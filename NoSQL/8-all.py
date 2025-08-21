#!/usr/bin/env python3
"""List all documents in a collection"""


def list_all(mongo_collection):
    """Prints all documents in a collection"""
    docs =  list(mongo_collection.find())
    return docs
