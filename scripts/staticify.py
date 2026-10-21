#!/usr/bin/env python3
"""Turn a `wget --mirror --adjust-extension -nH` crawl into a tree nginx can serve with no PHP.

- foo.html        -> foo/index.html          (so /foo keeps working)
- foo?a=b.html    -> foo/_q/<hash>/index.html, links rewritten to match
- sites/ is dropped: public files keep being served from the files mount.

Usage: staticify.py <mirror_dir> <out_dir>
"""
import hashlib
import html
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


def target_url(url):
    """'/foo?x=1' -> '/foo/_q/<hash>/', '/foo' -> '/foo/'."""
    path, _, query = url.partition('?')
    path = path.rstrip('/') + '/'
    if query:
        path += '_q/' + hashlib.md5(query.encode()).hexdigest()[:10] + '/'
    return path


def file_to_url(rel):
    """Mirror-relative file name -> the URL wget fetched it from."""
    if rel.startswith('index.html'):  # wget names the site root index.html
        rel = rel[len('index.html'):]
    if rel.endswith('.html'):
        rel = rel[:-len('.html')]
    return '/' + unquote(rel)  # wget %-encodes '/' in query strings


def main(src, out):
    src, out = Path(src), Path(out)
    shutil.rmtree(out, ignore_errors=True)
    pages = {}  # url -> source file
    for f in src.rglob('*'):
        rel = f.relative_to(src).as_posix()
        if not f.is_file() or rel.startswith('sites/'):
            continue
        if f.suffix == '.html' or '?' in rel:
            pages[file_to_url(rel)] = f
        else:  # css/js/fonts/images from core, modules, themes
            (out / rel).parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(f, out / rel)

    attr = re.compile(r'''((?:href|src|action)=")([^"]*\?[^"]*)(")''')

    for url, f in pages.items():
        base = 'https://x' + url

        def fix(m):
            parts = urlsplit(urljoin(base, html.unescape(m.group(2))))
            key = parts.path + ('?' + unquote(parts.query) if parts.query else '')
            if parts.netloc not in ('x', 'celebratedrupal.org') or key not in pages:
                return m.group(0)
            return m.group(1) + target_url(key) + m.group(3)

        text = f.read_text(errors='replace')
        text = attr.sub(fix, text)
        # Infinite scroll and AJAX views page over POST /views/ajax; make pagers plain links.
        text = text.replace(' data-drupal-views-infinite-scroll-pager', '').replace('js-pager__items', '')
        dest = out / target_url(url).lstrip('/') / 'index.html'
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(text)


if __name__ == '__main__':
    assert target_url('/') == '/'
    assert target_url('/?page=1').startswith('/_q/')
    assert file_to_url('index.html?page=1.html') == '/?page=1'
    assert file_to_url('photos.html') == '/photos'
    main(*sys.argv[1:3])
