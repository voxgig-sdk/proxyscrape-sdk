-- Proxyscrape SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Proxyscrape",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.proxyscrape.com/v3",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["proxy_list"] = {},
      },
    },
    entity = {
      ["proxy_list"] = {
        ["fields"] = {
          {
            ["name"] = "anonymity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ip",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "port",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "protocol",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timeout",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "proxy_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "elite,anonymous",
                      ["kind"] = "query",
                      ["name"] = "anonymity",
                      ["orig"] = "anonymity",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "us",
                      ["kind"] = "query",
                      ["name"] = "country",
                      ["orig"] = "country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "socks5",
                      ["kind"] = "query",
                      ["name"] = "protocol",
                      ["orig"] = "protocol",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "displayproxies",
                      ["kind"] = "query",
                      ["name"] = "request",
                      ["orig"] = "request",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 6000,
                      ["kind"] = "query",
                      ["name"] = "timeout",
                      ["orig"] = "timeout",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/free-proxy-list/get",
                ["parts"] = {
                  "free-proxy-list",
                  "get",
                },
                ["select"] = {
                  ["exist"] = {
                    "anonymity",
                    "country",
                    "format",
                    "protocol",
                    "request",
                    "timeout",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.proxies`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
