#!/usr/bin/env python3
"""Returns list of school containing a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """This will print a list of schools that have a specified topic"""
    return list(mongo_collection.find({"topics": topic}))
