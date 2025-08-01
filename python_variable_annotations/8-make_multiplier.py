#!/usr/bin/env python3
"""Module returns a function"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a function that multipies the float"""
    def multiply(n: float) -> float:
    """Multiplies the input by the multiplier"""
        return n * multpilier
    return multiply
