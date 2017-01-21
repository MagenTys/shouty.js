var {defineSupportCode} = require('cucumber');
var Shouty = require('../../lib/shouty');

function CustomWorld() {
  this.shouty = new Shouty()
}

defineSupportCode(function({setWorldConstructor, Before, After}) {
  setWorldConstructor(CustomWorld)

  Before({tags: "@wip"}, function(scenarioResult, callback) {
    console.log("Before @wip scenario")
    callback()
  })

  Before(function(scenarioResult, callback) {
    console.log("Before hook 2 called")
    callback()
  })

  After({tags: "@wip"}, function(scenarioResult, callback) {
    console.log("After @wip scenario")
    callback()
  })

  After(function(scenarioResult, callback) {
    console.log("After hook 2 called")
    callback()
  })
});
