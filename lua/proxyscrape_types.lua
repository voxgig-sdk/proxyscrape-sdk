-- Typed models for the Proxyscrape SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ProxyList
---@field anonymity? string
---@field country? string
---@field ip? string
---@field port? number
---@field protocol? string
---@field timeout? number

---@class ProxyListListMatch
---@field anonymity? string
---@field country? string
---@field ip? string
---@field port? number
---@field protocol? string
---@field timeout? number

local M = {}

return M
