#!/usr/bin/env python3
"""
Async generator module
"""

from asyncio import sleep
from random import uniform
from typing import AsyncGenerator, Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Coroutine that loops 10 times, waits 1 second asynchronously,
    then yields a random number between 0 and 10.
    """
    for _ in range(10):
        await sleep(1)
        yield uniform(0, 10)
