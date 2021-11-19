import csv

def convert(filename) :
  with open(filename) as f :
    dict = {}
    reader = csv.reader(f)
    headers = next(f)
    for line in reader :
      dict[line[0]] = line[1]
  return dict

#data needs to be manually transported, json doesn't like Korean characters :/
