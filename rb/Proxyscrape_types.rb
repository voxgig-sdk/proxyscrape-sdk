# frozen_string_literal: true

# Typed models for the Proxyscrape SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ProxyList entity data model.
#
# @!attribute [rw] anonymity
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Integer, nil]
#
# @!attribute [rw] protocol
#   @return [String, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
ProxyList = Struct.new(
  :anonymity,
  :country,
  :ip,
  :port,
  :protocol,
  :timeout,
  keyword_init: true
)

# Request payload for ProxyList#list.
#
# @!attribute [rw] anonymity
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Integer, nil]
#
# @!attribute [rw] protocol
#   @return [String, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
ProxyListListMatch = Struct.new(
  :anonymity,
  :country,
  :ip,
  :port,
  :protocol,
  :timeout,
  keyword_init: true
)

