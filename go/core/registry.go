package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewProxyListEntityFunc func(client *ProxyscrapeSDK, entopts map[string]any) ProxyscrapeEntity

