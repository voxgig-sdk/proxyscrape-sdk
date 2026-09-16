# Proxyscrape SDK feature factory

from proxyscrape_sdk.feature.base_feature import ProxyscrapeBaseFeature
from proxyscrape_sdk.feature.ratelimit_feature import ProxyscrapeRatelimitFeature
from proxyscrape_sdk.feature.retry_feature import ProxyscrapeRetryFeature
from proxyscrape_sdk.feature.test_feature import ProxyscrapeTestFeature
from proxyscrape_sdk.feature.timeout_feature import ProxyscrapeTimeoutFeature


_FEATURES = {
    "base": lambda: ProxyscrapeBaseFeature(),
    "ratelimit": lambda: ProxyscrapeRatelimitFeature(),
    "retry": lambda: ProxyscrapeRetryFeature(),
    "test": lambda: ProxyscrapeTestFeature(),
    "timeout": lambda: ProxyscrapeTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
