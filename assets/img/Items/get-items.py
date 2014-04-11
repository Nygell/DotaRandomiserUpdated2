from urllib.request import urlopen
from json import loads, dumps
from os import system

with open("items.txt") as i:
    items_json = loads(i.read())

print(items_json)