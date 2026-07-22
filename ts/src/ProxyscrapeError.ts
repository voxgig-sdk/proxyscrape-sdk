
import { Context } from './Context'


class ProxyscrapeError extends Error {

  isProxyscrapeError = true

  sdk = 'Proxyscrape'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ProxyscrapeError
}

