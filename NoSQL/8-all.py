#!/usr/bin/env python3

def list_all(mongo_collection):
    docs =  list(mongo_collection.find())
    return docs
