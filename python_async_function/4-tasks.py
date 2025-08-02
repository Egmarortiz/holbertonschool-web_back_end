#!/usr/bin/env python3
"""Module executes mutiple corotuines"""


from typing import List
import asyncio
from importlib import import_module


task_wait_random = import_module('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Function returns lists of delay times"""
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
