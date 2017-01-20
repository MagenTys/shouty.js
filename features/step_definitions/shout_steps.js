var assert = require('assert');
var Shouty = require('../../lib/shouty');

module.exports = function () {
  this.World = function() {
      this.shouty = new Shouty()
  };

  this.Given(/^(\w+) is at location \((\d+),(\d+)\)$/, function (name, locX, locY, callback) {
    this.shouty.addPerson(name,locX,locY);
    callback()
  });

  this.When(/^(\w+) shouts "([^"]*)"$/, function (name, message, callback) {
    this.shouty.person_shouts(name, message)
    callback()
  });

  this.Then(/^(\w+) should hear the shout$/, function (name,callback) {
    assert.ok(this.shouty.person(name).heard_shout())
    callback()
  });
};
