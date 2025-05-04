#!/usr/bin/env python3
""" Insert document into collection """


def insert_school(mongo_collection, **kwargs):
    """Insert a new document into collection using kwargs"""
    return mongo_collection.insert_one(kwargs).inserted_id
