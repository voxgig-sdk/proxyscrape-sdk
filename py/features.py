# Proxyscrape SDK feature factory

from feature.base_feature import ProxyscrapeBaseFeature
from feature.test_feature import ProxyscrapeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ProxyscrapeBaseFeature(),
        "test": lambda: ProxyscrapeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
