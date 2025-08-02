#!/usr/bin/env python3
"""Module measures time"""


import asyncio
import time
from importlib import import_module


wait_n = import_module('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Method measures time of delays"""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total = end - start
    return total / n
