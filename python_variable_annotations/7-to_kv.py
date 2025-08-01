#!/usr/bin/env python3
"""Module returns the square of the second tuple item"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Module returns the square of the second tuple item"""
    squared: float = float(v ** 2)
    return k, squared
