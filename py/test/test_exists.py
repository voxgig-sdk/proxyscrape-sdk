# Proxyscrape SDK exists test

import pytest
from proxyscrape_sdk import ProxyscrapeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ProxyscrapeSDK.test(None, None)
        assert testsdk is not None
