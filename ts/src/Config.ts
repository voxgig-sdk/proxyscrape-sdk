
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


  main = {
    name: 'Proxyscrape',
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
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "type": "`$STRING`"
        },
        {
          "name": "port",
          "type": "`$INTEGER`"
        },
        {
          "name": "protocol",
          "type": "`$STRING`"
        },
        {
          "name": "timeout",
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

