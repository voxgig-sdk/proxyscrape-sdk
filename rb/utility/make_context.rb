# Proxyscrape SDK utility: make_context
require_relative '../core/context'
module ProxyscrapeUtilities
  MakeContext = ->(ctxmap, basectx) {
    ProxyscrapeContext.new(ctxmap, basectx)
  }
end
