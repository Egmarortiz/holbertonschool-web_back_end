#!/usr/bin/env python3
"""
Async comprehension module
"""


import asyncio
from typing import List
from importlib import import_module


async_generator = import_module('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Coroutine collects 10 random numbers"""
    return [i async for i in async_generator()]
