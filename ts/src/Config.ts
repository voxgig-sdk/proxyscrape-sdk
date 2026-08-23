
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Proxyscrape',
        slug: "proxyscrape",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.proxyscrape.com/v3",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      proxy_list: {
      },

    }
  }


  entity = {
    "proxy_list": {
      "fields": [
        {
          "name": "anonymity",
          "short": "Anonymity level of the proxy",
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "short": "Country code of the proxy location",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "short": "IP address of the proxy server",
          "type": "`$STRING`"
        },
        {
          "name": "port",
          "short": "Port number of the proxy server",
          "type": "`$INTEGER`"
        },
        {
          "name": "protocol",
          "short": "Protocol type of the proxy",
          "type": "`$STRING`"
        },
        {
          "name": "timeout",
          "short": "Timeout value in milliseconds",
          "type": "`$INTEGER`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "us",
                    "kind": "query",
                    "name": "country",
                    "orig": "country",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "socks5",
                    "kind": "query",
                    "name": "protocol",
                    "orig": "protocol",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "displayproxies",
                    "kind": "query",
                    "name": "request",
                    "orig": "request",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 6000,
                    "kind": "query",
                    "name": "timeout",
                    "orig": "timeout",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/free-proxy-list/get",
              "parts": [
                "free-proxy-list",
                "get"
              ],
              "select": {
                "exist": [
                  "anonymity",
                  "country",
                  "format",
                  "protocol",
                  "request",
                  "timeout"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.proxies`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

