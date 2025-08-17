#!/usr/bin/env python3


"""Module calculates offset and limit"""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Module returns offset and limit"""
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
