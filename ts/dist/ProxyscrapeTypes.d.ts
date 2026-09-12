export interface ProxyList {
    anonymity?: string;
    country?: string;
    ip?: string;
    port?: number;
    protocol?: string;
    timeout?: number;
}
export interface ProxyListListMatch {
    anonymity?: string;
    country?: string;
    format?: string;
    protocol?: string;
    request: string;
    timeout?: number;
}
