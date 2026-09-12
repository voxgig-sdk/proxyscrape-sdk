import { ProxyscrapeEntityBase } from '../ProxyscrapeEntityBase';
import type { ProxyscrapeSDK } from '../ProxyscrapeSDK';
import type { Control } from '../types';
import type { ProxyList, ProxyListListMatch } from '../ProxyscrapeTypes';
declare class ProxyListEntity extends ProxyscrapeEntityBase<ProxyList> {
    constructor(client: ProxyscrapeSDK, entopts: any);
    make(this: ProxyListEntity): ProxyListEntity;
    list(this: any, reqmatch?: ProxyListListMatch, ctrl?: Control): Promise<ProxyListEntity[]>;
}
export { ProxyListEntity };
