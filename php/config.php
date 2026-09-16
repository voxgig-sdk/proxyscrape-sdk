<?php
declare(strict_types=1);

// Proxyscrape SDK configuration

class ProxyscrapeConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Proxyscrape",
                "slug" => "proxyscrape",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.proxyscrape.com/v3",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "proxy_list" => [],
                ],
            ],
            "entity" => [
        'proxy_list' => [
          'fields' => [
            [
              'name' => 'anonymity',
              'short' => 'Anonymity level of the proxy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'short' => 'Country code of the proxy location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip',
              'short' => 'IP address of the proxy server',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'port',
              'short' => 'Port number of the proxy server',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'protocol',
              'short' => 'Protocol type of the proxy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timeout',
              'short' => 'Timeout value in milliseconds',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'proxy_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'elite,anonymous',
                        'kind' => 'query',
                        'name' => 'anonymity',
                        'orig' => 'anonymity',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'us',
                        'kind' => 'query',
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'socks5',
                        'kind' => 'query',
                        'name' => 'protocol',
                        'orig' => 'protocol',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'displayproxies',
                        'kind' => 'query',
                        'name' => 'request',
                        'orig' => 'request',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 6000,
                        'kind' => 'query',
                        'name' => 'timeout',
                        'orig' => 'timeout',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/free-proxy-list/get',
                  'segments' => [
                    [
                      'lit' => 'free-proxy-list',
                    ],
                    [
                      'lit' => 'get',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'anonymity',
                      'country',
                      'format',
                      'protocol',
                      'request',
                      'timeout',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.proxies`',
                  ],
                  'parts' => [
                    'free-proxy-list',
                    'get',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ProxyscrapeFeatures::make_feature($name);
    }
}
