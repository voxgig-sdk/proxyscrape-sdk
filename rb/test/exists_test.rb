# Proxyscrape SDK exists test

require "minitest/autorun"
require_relative "../Proxyscrape_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ProxyscrapeSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
