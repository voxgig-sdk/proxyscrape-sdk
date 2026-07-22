# Proxyscrape SDK utility: make_context

from core.context import ProxyscrapeContext


def make_context_util(ctxmap, basectx):
    return ProxyscrapeContext(ctxmap, basectx)
