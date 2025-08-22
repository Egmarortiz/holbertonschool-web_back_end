#!/usr/bin/env python3
"""Method gives log stats"""


from pymongo import MongoClient

if __name__ == "__main__":
    """Script prints log stats"""

    # Connection, Database, Collection
    client = MongoClient("mongodb://127.0.0.1:27017")
    db = client.logs
    nginx = db.nginx


    # Total number of docs
    total_logs = nginx.count_documents({})

    # Count per method
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {m: nginx.count_documents({"method": m}) for m in methods}

    # Count of GET in /status
    get_status = nginx.count_documents({"method": "GET", "path": "/status"})


    # Output
    print(f"{total_logs} logs")
    print("Methods:")
    for m in methods:
        print(f"\tmethod {m}: {method_counts[m]}")
    print(f"{get_status} status check")
