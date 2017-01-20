var assert = require('assert');
var Shouty = require('../../lib/shouty');
var Coordinate = require('../../lib/coordinate')

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  const ARBITARY_MESSAGE = 'Hello, world'

  Given(/^(\w+) is at \[(\d+), (\d+)\]$/, function (person, x, y, callback) {
    this.shouty.setLocation(person, new Coordinate(x, y))
    callback()
  });

  When(/^Sean shouts$/, function (callback) {
    this.shouty.shout('Sean', ARBITARY_MESSAGE)
    callback()
  });

  Then(/^Lucy should hear Sean$/, function (callback) {
    assert.equal(Object.keys(this.shouty.getMessagesHeardBy('Lucy')).length, 1)
    callback()
  });

  Then(/^Lucy should hear nothing$/, function (callback) {
    assert.equal(Object.keys(this.shouty.getMessagesHeardBy('Lucy')).length, 0)
    callback()
  });

  When('Oscar shouts', function (callback) {
    this.shouty.shout('Oscar', ARBITARY_MESSAGE)
    callback()
 });

 Then('Lucy should not hear Oscar', function (callback) {
   var heardMessages = this.shouty.getMessagesHeardBy('Lucy');
   assert.equal(heardMessages['Oscar'], undefined)
   callback()
 });

});
