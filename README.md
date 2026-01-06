# Celebrate Drupal

This project was setup to showcase Celebrations about the Drupal 9 launch, and has continued on for all types of celebrations related to Drupal.

## Getting Started

### Local environment

Clone this project, then run `composer install`.

You'll need [direnv](https://direnv.net/) and [Drush](https://www.drush.org/) installed.

Ensure you allow the `.envrc` file to run with `direnv` by typing `direnv allow`.

This will copy the file `.env.example` to `.env`.

You can then bootstrap and install Drupal based on the existing configuration with the following [Drush](https://www.drush.org/) command:

```
drush si -y minimal --sites-subdir default --existing-config --account-name admin --account-pass admin
```

Finally, run a local version of the website using `drush serve` and you should be access it at `http://127.0.0.1:8888`, where you can login with the generic username and password:
```
user: admin
pass: admin
```

Or use `drush uli` to create a one-time login link.

### Lando

- `lando start`
- To run drush commands with `lando drush`, comment out `DRUSH_OPTIONS_URI="$SB_BASE_URL"` if you are also using a local environment setup.

## Frontend

- Based on Tailwind
- `yarn && yarn run build`

## Services

* PHP
* MariaDB
* Redis

## Hosted by upsun.com

This project is kindly sponsored and hosted by [upsun.com](https://upsun.com).

### Further Reading

* [Drupal](https://www.drupal.org/)
* [Drupal on upsun.com](https://fixed.docs.upsun.com/guides/drupal/deploy.html)
* [PHP on upsun.com](https://fixed.docs.upsun.com/languages/php.html)
