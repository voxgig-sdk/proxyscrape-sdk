-- Proxyscrape SDK exists test

local sdk = require("proxyscrape_sdk")

describe("ProxyscrapeSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
