#!/usr/bin/env python3
"""Basic async syntax"""


import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Function return await time"""
    delay_time = random.uniform(0, max_delay)
    await asyncio.sleep(delay_time)
    return delay_time
