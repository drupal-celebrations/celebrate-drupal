<?php

namespace Drupal\hosting_platform_sh\Plugin\Block;

use Drupal\Core\Block\Annotation\Block;
use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hosting by platform.sh' block.
 *
 * @Block(
 *   id = "hosting_platform_sh_block",
 *   admin_label = @Translation("Hosting by platform.sh")
 * )
 */
class HostingPlatformShBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {
    return ['label_display' => FALSE];
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    return ['#markup' => '<span>' . $this->t('Hosting by <a href=":hosting">Platform.sh</a>', [':hosting' => 'https://www.platform.sh?medium=referral&utm_campaign=sponsored_sites&utm_source=celebratedrupal']) . '</span>'];
  }

}
