module.exports = function Shouty() {
  const MESSAGE_RANGE = 1000
  this.locations = {}
  this.messages = []

  this.setLocation = function(person, coordinate) {
    this.locations[person] = coordinate
  }

  this.shout = function(shouter, message) {
    //this.messages[person] = message

    var entry = {}
    entry[shouter] = message
    this.messages.push(entry)
  }

  this.getMessagesHeardBy = function(listener) {
    var result = []

    this.messages.forEach(entry => {
      shouter = Object.keys(entry)[0]
      if (shouter != listener){
        var message = entry[shouter]
        var distance = this.locations[listener].distanceFrom(this.locations[shouter])

        if(distance < MESSAGE_RANGE) {
          result.push(entry)
          //result[shouter] = message
        }
      }

    })

    return result
  }
};
