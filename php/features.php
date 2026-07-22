<?php
declare(strict_types=1);

// Proxyscrape SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ProxyscrapeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ProxyscrapeBaseFeature();
            case "test":
                return new ProxyscrapeTestFeature();
            default:
                return new ProxyscrapeBaseFeature();
        }
    }
}
