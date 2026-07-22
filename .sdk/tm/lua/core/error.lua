-- Proxyscrape SDK error

local ProxyscrapeError = {}
ProxyscrapeError.__index = ProxyscrapeError


function ProxyscrapeError.new(code, msg, ctx)
  local self = setmetatable({}, ProxyscrapeError)
  self.is_sdk_error = true
  self.sdk = "Proxyscrape"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ProxyscrapeError:error()
  return self.msg
end


function ProxyscrapeError:__tostring()
  return self.msg
end


return ProxyscrapeError
