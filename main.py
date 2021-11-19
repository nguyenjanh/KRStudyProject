import bottle
import json
import csv

@bottle.route('/')
def displayMainPage() :
  return bottle.static_file('display.html', root = 'client/')

@bottle.route('/js')
def runScript() :
  return bottle.static_file('script.js', root = 'client/')

#json can't take in Korean characters, data needs to be manually transported from Python > JavaScript
bottle.run(host="0.0.0.0", port=8080, debug=True)
