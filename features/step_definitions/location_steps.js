var assert = require('assert');
var Shouty = require('../../lib/shouty');
var Coordinate = require('../../lib/coordinate')

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, Before}) {

  Before(function(scenarioResult, callback) {
    console.log('Before Location Steps');
    callback()
  })

  Given(/^(\w+) is at \[(\d+), (\d+)\]$/, function (person, x, y, callback) {
    this.shouty.setLocation(person, new Coordinate(x, y))
    callback()
  });

  Given('people are located at', function (table, callback) {

    table.hashes().forEach(row => {
      this.shouty.setLocation(row['name'], new Coordinate(row['x'], row['y']))
    })

    callback();
  });
})
