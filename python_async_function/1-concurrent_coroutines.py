#!/usr/bin/env python3
"""Module executes mutiple corotuines"""


from typing import List
import asyncio
from importlib import import_module


wait_random = import_module('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Function returns lists of delay times"""
    coroutines = [wait_random(max_delay) for _ in range(n)]

    delays = []
    for coro in asyncio.as_completed(coroutines):
        delay = await coro
        delays.append(delay)

    return delays
