<?php
declare(strict_types=1);

// Proxyscrape SDK utility: prepare_body

class ProxyscrapePrepareBody
{
    public static function call(ProxyscrapeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
