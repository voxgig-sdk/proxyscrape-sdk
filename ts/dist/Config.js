"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Proxyscrape',
        slug: "proxyscrape",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.proxyscrape.com/v3",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            proxy_list: {},
        }
    };
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
                            "segments": [
                                {
                                    "lit": "free-proxy-list"
                                },
                                {
                                    "lit": "get"
                                }
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
                            },
                            "parts": [
                                "free-proxy-list",
                                "get"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map