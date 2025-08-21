#!/usr/bin/env python3
"""Return Specific argument"""


def schools_by_topic(mongo_collection, topic):
    """Module returns a specific argument"""
    return list(mongo_collection.find({"topic": topic}))
