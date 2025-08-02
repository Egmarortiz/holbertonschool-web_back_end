#!/usr/bin/env python3
""" Module returns an async task """


import asyncio
from importlib import import_module


wait_random = import_module('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Schedule wait_random(max_delay) as a Task and return it immediately.
    """
    loop = asyncio.get_event_loop()
    return loop.create_task(wait_random(max_delay))
