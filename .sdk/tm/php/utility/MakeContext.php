<?php
declare(strict_types=1);

// Proxyscrape SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ProxyscrapeMakeContext
{
    public static function call(array $ctxmap, ?ProxyscrapeContext $basectx): ProxyscrapeContext
    {
        return new ProxyscrapeContext($ctxmap, $basectx);
    }
}
