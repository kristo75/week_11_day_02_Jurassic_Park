const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function (){
  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Brontosaurus", 2)
  })

  it('should have type', function(){
    assert.strictEqual(dinosaur.type, "Brontosaurus")
  })
})
