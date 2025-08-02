#!/usr/bin/env python3
"""
Measure runtime module
"""


from asyncio import gather
from time import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Coroutine measures total runtime"""
    start = time()
    tasks = [async_comprehension() for _ in range(4)]
    await gather(*tasks)
    end = time()
    return end - start
