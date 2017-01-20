module.exports = function Coordinate(x, y) {

  this.x = function() {
    return x
  }

  this.y = function() {
    return y
  }

  this.distanceFrom = function(other) {
    var xDist = other.x() - x
    var yDist = other.y() - y

    return Math.sqrt(xDist * xDist + yDist * yDist)
  }
};
