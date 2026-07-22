# Proxyscrape SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ProxyscrapeUtility.registrar = ->(u) {
  u.clean = ProxyscrapeUtilities::Clean
  u.done = ProxyscrapeUtilities::Done
  u.make_error = ProxyscrapeUtilities::MakeError
  u.feature_add = ProxyscrapeUtilities::FeatureAdd
  u.feature_hook = ProxyscrapeUtilities::FeatureHook
  u.feature_init = ProxyscrapeUtilities::FeatureInit
  u.fetcher = ProxyscrapeUtilities::Fetcher
  u.make_fetch_def = ProxyscrapeUtilities::MakeFetchDef
  u.make_context = ProxyscrapeUtilities::MakeContext
  u.make_options = ProxyscrapeUtilities::MakeOptions
  u.make_request = ProxyscrapeUtilities::MakeRequest
  u.make_response = ProxyscrapeUtilities::MakeResponse
  u.make_result = ProxyscrapeUtilities::MakeResult
  u.make_point = ProxyscrapeUtilities::MakePoint
  u.make_spec = ProxyscrapeUtilities::MakeSpec
  u.make_url = ProxyscrapeUtilities::MakeUrl
  u.param = ProxyscrapeUtilities::Param
  u.prepare_auth = ProxyscrapeUtilities::PrepareAuth
  u.prepare_body = ProxyscrapeUtilities::PrepareBody
  u.prepare_headers = ProxyscrapeUtilities::PrepareHeaders
  u.prepare_method = ProxyscrapeUtilities::PrepareMethod
  u.prepare_params = ProxyscrapeUtilities::PrepareParams
  u.prepare_path = ProxyscrapeUtilities::PreparePath
  u.prepare_query = ProxyscrapeUtilities::PrepareQuery
  u.result_basic = ProxyscrapeUtilities::ResultBasic
  u.result_body = ProxyscrapeUtilities::ResultBody
  u.result_headers = ProxyscrapeUtilities::ResultHeaders
  u.transform_request = ProxyscrapeUtilities::TransformRequest
  u.transform_response = ProxyscrapeUtilities::TransformResponse
}
