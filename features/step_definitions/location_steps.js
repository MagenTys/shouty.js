var assert = require('assert');
var Shouty = require('../../lib/shouty');
var Coordinate = require('../../lib/coordinate')

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({addTransform, Given, When, Then, Before}) {

  addTransform({
    captureGroupRegexps: ['\\d+, \\d+'],
    transformer: function(coordinate){
      var [groups,x,y] = coordinate.match(/(\d+), (\d+)/)
      return new Coordinate(x,y)
    },
    typeName: 'Coordinate'
  })

  Before(function(scenarioResult, callback) {
    console.log('Before Location Steps');
    callback()
  })

  Given(/^(\w+) is at \[(\d+, \d+)\]$/, function (person, coordinate, callback) {

    console.log("person is a: " + typeof person)
    console.log("coordinate is a: " + typeof coordinate)
    console.log(coordinate)

    this.shouty.setLocation(person, coordinate)
    callback()
  });

  Given('people are located at', function (table, callback) {

    table.hashes().forEach(row => {
      this.shouty.setLocation(row['name'], new Coordinate(row['x'], row['y']))
    })

    callback();
  });
})
