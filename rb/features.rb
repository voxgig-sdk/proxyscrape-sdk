# Proxyscrape SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ProxyscrapeFeatures
  def self.make_feature(name)
    case name
    when "base"
      ProxyscrapeBaseFeature.new
    when "ratelimit"
      ProxyscrapeRatelimitFeature.new
    when "retry"
      ProxyscrapeRetryFeature.new
    when "test"
      ProxyscrapeTestFeature.new
    when "timeout"
      ProxyscrapeTimeoutFeature.new
    else
      ProxyscrapeBaseFeature.new
    end
  end
end
