# Proxyscrape SDK utility: prepare_body
module ProxyscrapeUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
