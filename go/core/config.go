package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Proxyscrape",
			"slug": "proxyscrape",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.proxyscrape.com/v3",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"proxy_list": map[string]any{},
			},
		},
		"entity": map[string]any{
			"proxy_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anonymity",
						"short": "Anonymity level of the proxy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country",
						"short": "Country code of the proxy location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"short": "IP address of the proxy server",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "port",
						"short": "Port number of the proxy server",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "protocol",
						"short": "Protocol type of the proxy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timeout",
						"short": "Timeout value in milliseconds",
						"type": "`$INTEGER`",
					},
				},
				"name": "proxy_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "elite,anonymous",
											"kind": "query",
											"name": "anonymity",
											"orig": "anonymity",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "us",
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "socks5",
											"kind": "query",
											"name": "protocol",
											"orig": "protocol",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "displayproxies",
											"kind": "query",
											"name": "request",
											"orig": "request",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 6000,
											"kind": "query",
											"name": "timeout",
											"orig": "timeout",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/free-proxy-list/get",
								"segments": []any{
									map[string]any{
										"lit": "free-proxy-list",
									},
									map[string]any{
										"lit": "get",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"anonymity",
										"country",
										"format",
										"protocol",
										"request",
										"timeout",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.proxies`",
								},
								"parts": []any{
									"free-proxy-list",
									"get",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
