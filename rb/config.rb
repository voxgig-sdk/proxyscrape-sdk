# Proxyscrape SDK configuration

module ProxyscrapeConfig
  def self.make_config
    {
      "main" => {
        "name" => "Proxyscrape",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.proxyscrape.com/v3",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "proxy_list" => {},
        },
      },
      "entity" => {
        "proxy_list" => {
          "fields" => [
            {
              "active" => true,
              "name" => "anonymity",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "country",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "ip",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "port",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "protocol",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "timeout",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 5,
            },
          ],
          "name" => "proxy_list",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "elite,anonymous",
                        "kind" => "query",
                        "name" => "anonymity",
                        "orig" => "anonymity",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "us",
                        "kind" => "query",
                        "name" => "country",
                        "orig" => "country",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "socks5",
                        "kind" => "query",
                        "name" => "protocol",
                        "orig" => "protocol",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "displayproxies",
                        "kind" => "query",
                        "name" => "request",
                        "orig" => "request",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 6000,
                        "kind" => "query",
                        "name" => "timeout",
                        "orig" => "timeout",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/free-proxy-list/get",
                  "parts" => [
                    "free-proxy-list",
                    "get",
                  ],
                  "select" => {
                    "exist" => [
                      "anonymity",
                      "country",
                      "format",
                      "protocol",
                      "request",
                      "timeout",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.proxies`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ProxyscrapeFeatures.make_feature(name)
  end
end
