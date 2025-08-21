#!/usr/bin/env python3
"""Insert document in collection"""


def insert_school(mongo_collection, **kwargs):
    """Module prints id of new doc"""
    result =  mongo_collection.insert_one(kwargs)
    return result.inserted_id
