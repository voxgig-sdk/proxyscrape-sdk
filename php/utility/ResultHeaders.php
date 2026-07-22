<?php
declare(strict_types=1);

// Proxyscrape SDK utility: result_headers

class ProxyscrapeResultHeaders
{
    public static function call(ProxyscrapeContext $ctx): ?ProxyscrapeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
