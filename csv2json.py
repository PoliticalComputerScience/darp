#!/usr/bin/env python3

import csv
import json
import sys

COLS = [
    "name",
    "id",
    "overall",
    "overall_desc",
    "access_consent",
    "access_consent_desc",
    "law_enforcement",
    "law_enforcement_desc",
    "localization",
    "localization_desc",
    "enforcement",
    "enforcement_desc",
    "jurisdictional_cov",
    "jurisdictional_cov_desc",
    "stability",
    "stability_desc",
]

def main(filename):
    data = {}
    with open(filename, newline='') as csvfile:
        reader = csv.reader(csvfile)
        # discard header row
        next(reader)

        for row in reader:
            if row[1] == "#N/A":
                # skip things not yet on the map
                continue
            country = {}
            for index, col in enumerate(COLS):
                country[col] = row[index]
            data[country["id"]] = country

    json.dump(data, sys.stdout)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("usage: csv2json.py <filename.csv>")
        sys.exit(2)
    main(sys.argv[1])
