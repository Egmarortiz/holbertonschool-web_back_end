#!/usr/bin/env python3
"""Basic async generator"""


import asyncio
import random


async def async_generator():
    """Basic async generator"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)


async def gather_values() -> list[float]:
    """Gather values into list"""
    return [value async for value in async_generator()]
