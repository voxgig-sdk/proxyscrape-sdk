"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ProxyListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PROXYSCRAPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PROXYSCRAPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ProxyscrapeSDK.test();
        const ent = testsdk.ProxyList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PROXYSCRAPE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'proxy_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "anonymity", "req": false, "short": "Anonymity level of the proxy", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "country", "req": false, "short": "Country code of the proxy location", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "ip", "req": false, "short": "IP address of the proxy server", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "port", "req": false, "short": "Port number of the proxy server", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "protocol", "req": false, "short": "Protocol type of the proxy", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "timeout", "req": false, "short": "Timeout value in milliseconds", "type": "`$INTEGER`", "index$": 5 }], "name": "proxy_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "elite,anonymous", "kind": "query", "name": "anonymity", "orig": "anonymity", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "us", "kind": "query", "name": "country", "orig": "country", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "socks5", "kind": "query", "name": "protocol", "orig": "protocol", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": "displayproxies", "kind": "query", "name": "request", "orig": "request", "reqd": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": 6000, "kind": "query", "name": "timeout", "orig": "timeout", "reqd": false, "type": "`$INTEGER`", "index$": 5 }] }, "contract": { "id": "GET /free-proxy-list/get", "json": "{\"operationId\":\"getProxyList\",\"parameters\":[{\"description\":\"Type of request to perform\",\"in\":\"query\",\"name\":\"request\",\"required\":true,\"schema\":{\"default\":\"displayproxies\",\"enum\":[\"displayproxies\"],\"type\":\"string\"}},{\"description\":\"Country code for filtering proxies (e.g., 'us' for United States)\",\"in\":\"query\",\"name\":\"country\",\"required\":false,\"schema\":{\"example\":\"us\",\"type\":\"string\"}},{\"description\":\"Protocol type for the proxy servers\",\"in\":\"query\",\"name\":\"protocol\",\"required\":false,\"schema\":{\"enum\":[\"http\",\"https\",\"socks4\",\"socks5\"],\"example\":\"socks5\",\"type\":\"string\"}},{\"description\":\"Response format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"text\"],\"type\":\"string\"}},{\"description\":\"Maximum timeout for proxy servers in milliseconds\",\"in\":\"query\",\"name\":\"timeout\",\"required\":false,\"schema\":{\"example\":6000,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Anonymity level of proxies (comma-separated for multiple levels)\",\"in\":\"query\",\"name\":\"anonymity\",\"required\":false,\"schema\":{\"example\":\"elite,anonymous\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"proxies\":[{\"anonymity\":\"elite\",\"country\":\"US\",\"ip\":\"192.168.1.1\",\"port\":1080,\"protocol\":\"socks5\",\"timeout\":1500},{\"anonymity\":\"anonymous\",\"country\":\"US\",\"ip\":\"192.168.1.2\",\"port\":1080,\"protocol\":\"socks5\",\"timeout\":2000}]},\"schema\":{\"properties\":{\"proxies\":{\"items\":{\"properties\":{\"anonymity\":{\"description\":\"Anonymity level of the proxy\",\"example\":\"elite\",\"type\":\"string\"},\"country\":{\"description\":\"Country code of the proxy location\",\"example\":\"US\",\"type\":\"string\"},\"ip\":{\"description\":\"IP address of the proxy server\",\"example\":\"192.168.1.1\",\"type\":\"string\"},\"port\":{\"description\":\"Port number of the proxy server\",\"example\":8080,\"type\":\"integer\"},\"protocol\":{\"description\":\"Protocol type of the proxy\",\"example\":\"socks5\",\"type\":\"string\"},\"timeout\":{\"description\":\"Timeout value in milliseconds\",\"example\":1500,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"text/plain\":{\"schema\":{\"description\":\"Plain text list of proxy servers\",\"example\":\"192.168.1.1:1080\\n192.168.1.2:1080\",\"type\":\"string\"}}},\"description\":\"Successful response containing a list of proxy servers\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters provided\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the server issue\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/free-proxy-list/get", "segments": [{ "lit": "free-proxy-list" }, { "lit": "get" }], "select": { "exist": ["anonymity", "country", "format", "protocol", "request", "timeout"] }, "transform": { "req": "`reqdata`", "res": "`body.proxies`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "proxy_list", "name__orig": "proxy_list", "Name": "ProxyList", "name_": "proxy_list", "name-": "proxy-list", "NAME": "PROXY_LIST", "index$": 0 }, { "active": true, "entity": "proxy_list", "key$": "BasicProxyListFlow", "kind": "basic", "name": "BasicProxyListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "proxy_list_ref01" } }], "index$": 0 }] }, 'ProxyList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let proxy_list_ref01_data = Object.values(setup.data.existing.proxy_list)[0];
        // LIST
        const proxy_list_ref01_ent = client.ProxyList();
        const proxy_list_ref01_match = {};
        const proxy_list_ref01_list = (await proxy_list_ref01_ent.list(proxy_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/proxy_list/ProxyListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ProxyscrapeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['proxy_list01', 'proxy_list02', 'proxy_list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PROXYSCRAPE_TEST_PROXY_LIST_ENTID': idmap,
        'PROXYSCRAPE_TEST_LIVE': 'FALSE',
        'PROXYSCRAPE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['PROXYSCRAPE_TEST_PROXY_LIST_ENTID'];
    const live = 'TRUE' === env.PROXYSCRAPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PROXYSCRAPE_TEST_PROXY_LIST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ProxyscrapeSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.PROXYSCRAPE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ProxyListEntity.test.js.map