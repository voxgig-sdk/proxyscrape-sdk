// Typed models for the Proxyscrape SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ProxyList {
  anonymity?: string
  country?: string
  ip?: string
  port?: number
  protocol?: string
  timeout?: number
}

export interface ProxyListListMatch {
  anonymity?: string
  country?: string
  ip?: string
  port?: number
  protocol?: string
  timeout?: number
}

