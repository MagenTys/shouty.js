var assert = require('assert')
var Shouty = require('../lib/shouty')
var Coordinate = require('../lib/coordinate')

describe("shouty class", () => {
  beforeEach(() => {
    this.shouty = new Shouty()
  })


  describe("getMessagesHeardBy", ()=>{
    beforeEach(() => {
      this.shouty.setLocation("Lucy", new Coordinate(0,0))
      this.shouty.setLocation("Bob", new Coordinate(0,100))
    })

    it("should return an array", ()=> {
      var messagesHeard = this.shouty.getMessagesHeardBy("Lucy")
      assert.ok(Array.isArray(messagesHeard))

    })

    it("should start empty", ()=>{
      assert.equal(this.shouty.getMessagesHeardBy("Lucy").length,0)
    })

    it("should return an array of shouts", ()=>{
      this.shouty.shout('Bob', "foo")

      var expected = [
        {"Bob":"foo"}
      ]

      assert.deepEqual(this.shouty.getMessagesHeardBy("Lucy"), expected)
    })

    it("should allow multiple shouts from the same person", ()=>{
      this.shouty.shout('Bob', "foo")
      this.shouty.shout('Bob', "foo")

      var expected = [
        {"Bob":"foo"},
        {"Bob":"foo"}
      ]

      assert.deepEqual(this.shouty.getMessagesHeardBy("Lucy"), expected)

    })
  })

})
