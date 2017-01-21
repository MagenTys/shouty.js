var {defineSupportCode} = require('cucumber');
var Shouty = require('../../lib/shouty');

function CustomWorld() {
  this.shouty = new Shouty()
}

defineSupportCode(function({setWorldConstructor, Before, After}) {
  setWorldConstructor(CustomWorld)

  Before(function(scenarioResult, callback) {
    console.log("Before hook called")
    callback()
  })

  After(function(scenarioResult, callback) {
    console.log("After hook called")
    callback()
  })
});
