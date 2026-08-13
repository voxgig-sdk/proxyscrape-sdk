package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Proxyscrape",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"active": true,
						"name": "anonymity",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "country",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "ip",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "port",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "protocol",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "timeout",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 5,
					},
				},
				"name": "proxy_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "elite,anonymous",
											"kind": "query",
											"name": "anonymity",
											"orig": "anonymity",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "us",
											"kind": "query",
											"name": "country",
											"orig": "country",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "socks5",
											"kind": "query",
											"name": "protocol",
											"orig": "protocol",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "displayproxies",
											"kind": "query",
											"name": "request",
											"orig": "request",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 6000,
											"kind": "query",
											"name": "timeout",
											"orig": "timeout",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/free-proxy-list/get",
								"parts": []any{
									"free-proxy-list",
									"get",
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
								"index$": 0,
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
