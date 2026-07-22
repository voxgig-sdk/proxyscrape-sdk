<?php
declare(strict_types=1);

// Proxyscrape SDK utility: result_body

class ProxyscrapeResultBody
{
    public static function call(ProxyscrapeContext $ctx): ?ProxyscrapeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
