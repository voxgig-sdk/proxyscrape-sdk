# Proxyscrape SDK configuration

module ProxyscrapeConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
              "name" => "anonymity",
              "type" => "`$STRING`",
            },
            {
              "name" => "country",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "type" => "`$STRING`",
            },
            {
              "name" => "port",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "protocol",
              "type" => "`$STRING`",
            },
            {
              "name" => "timeout",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "proxy_list",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "elite,anonymous",
                        "kind" => "query",
                        "name" => "anonymity",
                        "orig" => "anonymity",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "us",
                        "kind" => "query",
                        "name" => "country",
                        "orig" => "country",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "socks5",
                        "kind" => "query",
                        "name" => "protocol",
                        "orig" => "protocol",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "displayproxies",
                        "kind" => "query",
                        "name" => "request",
                        "orig" => "request",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 6000,
                        "kind" => "query",
                        "name" => "timeout",
                        "orig" => "timeout",
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
                },
              ],
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
