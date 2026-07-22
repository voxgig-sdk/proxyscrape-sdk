<?php
declare(strict_types=1);

// Proxyscrape SDK exists test

require_once __DIR__ . '/../proxyscrape_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ProxyscrapeSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
