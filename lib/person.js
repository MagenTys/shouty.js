module.exports = function Person(name, locX, locY) {
  this.name = name
  this.locX = locX
  this.locY = locY
  this.shoutsRecentlyHeard = []

  this.distFrom = function(other) {
    var dx = locX - other.locX
    var dy = locY - other.locY

    return Math.sqrt(dx * dx + dy * dy)
  }

  this.hear = function(shout){
    this.shoutsRecentlyHeard.push(shout)
  }

  this.heard_shout = function() {
    return this.shoutsRecentlyHeard.length > 0
  }
}
