# Proxyscrape SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Proxyscrape",
            "slug": "proxyscrape",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.proxyscrape.com/v3",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "proxy_list": {},
            },
        },
        "entity": {
      "proxy_list": {
        "fields": [
          {
            "name": "anonymity",
            "short": "Anonymity level of the proxy",
            "type": "`$STRING`",
          },
          {
            "name": "country",
            "short": "Country code of the proxy location",
            "type": "`$STRING`",
          },
          {
            "name": "ip",
            "short": "IP address of the proxy server",
            "type": "`$STRING`",
          },
          {
            "name": "port",
            "short": "Port number of the proxy server",
            "type": "`$INTEGER`",
          },
          {
            "name": "protocol",
            "short": "Protocol type of the proxy",
            "type": "`$STRING`",
          },
          {
            "name": "timeout",
            "short": "Timeout value in milliseconds",
            "type": "`$INTEGER`",
          },
        ],
        "name": "proxy_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "elite,anonymous",
                      "kind": "query",
                      "name": "anonymity",
                      "orig": "anonymity",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "us",
                      "kind": "query",
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "socks5",
                      "kind": "query",
                      "name": "protocol",
                      "orig": "protocol",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "displayproxies",
                      "kind": "query",
                      "name": "request",
                      "orig": "request",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": 6000,
                      "kind": "query",
                      "name": "timeout",
                      "orig": "timeout",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/free-proxy-list/get",
                "segments": [
                  {
                    "lit": "free-proxy-list",
                  },
                  {
                    "lit": "get",
                  },
                ],
                "select": {
                  "exist": [
                    "anonymity",
                    "country",
                    "format",
                    "protocol",
                    "request",
                    "timeout",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.proxies`",
                },
                "parts": [
                  "free-proxy-list",
                  "get",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
