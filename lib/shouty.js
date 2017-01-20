const Person = require('./person')
module.exports = function Shouty() {

  var people = [];

  this.addPerson = function(name, locX, locY) {
    people.push(new Person(name,locX,locY))
  }

  this.person_shouts = function(name, message) {
    var shouter = this.person(name)

    var shoutees = people.filter( person => {
        return person.name !== name && person.distFrom(shouter) < 1000
      } )

    shoutees.forEach(shoutee => {shoutee.hear(message)})

  }

  this.person = function(name) {

    return people.find(person => {return person.name === name} )

  }
};
