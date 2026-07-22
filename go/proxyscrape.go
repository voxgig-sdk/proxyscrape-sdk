package voxgigproxyscrapesdk

import (
	"github.com/voxgig-sdk/proxyscrape-sdk/go/core"
	"github.com/voxgig-sdk/proxyscrape-sdk/go/entity"
	"github.com/voxgig-sdk/proxyscrape-sdk/go/feature"
	_ "github.com/voxgig-sdk/proxyscrape-sdk/go/utility"
)

// Type aliases preserve external API.
type ProxyscrapeSDK = core.ProxyscrapeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ProxyscrapeEntity = core.ProxyscrapeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ProxyscrapeError = core.ProxyscrapeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewProxyListEntityFunc = func(client *core.ProxyscrapeSDK, entopts map[string]any) core.ProxyscrapeEntity {
		return entity.NewProxyListEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewProxyscrapeSDK = core.NewProxyscrapeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewProxyscrapeSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ProxyscrapeSDK  { return NewProxyscrapeSDK(nil) }
func Test() *ProxyscrapeSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
