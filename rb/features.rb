# Proxyscrape SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ProxyscrapeFeatures
  def self.make_feature(name)
    case name
    when "base"
      ProxyscrapeBaseFeature.new
    when "test"
      ProxyscrapeTestFeature.new
    else
      ProxyscrapeBaseFeature.new
    end
  end
end
