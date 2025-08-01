#!/usr/bin/env python3
"""Module returns list of tuples"""


from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """Function returns list of tuples"""
    return [(i, len(i)) for i in lst]
