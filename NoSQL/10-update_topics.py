#!/usr/bin/env python3
"""Module updates document arguments"""


def update_topics(mongo_collection, name, topics):
    """Module updates document arguments"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
