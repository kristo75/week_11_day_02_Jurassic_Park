const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur');

describe('Park', function () {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur('Brontosaurus', 2)
    dinosaur2 = new Dinosaur('Stegasaurus', 3)
    dinosaur3 = new Dinosaur('Tuatara', 4)

  })

  it('should have an enclosure', function () {
    assert.deepStrictEqual(park.enclosure, []);
  })

  it('should start with empty enclosure', function (){
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 0);
  })

  it('should be able to add dinosaur', function(){
    park.addDinosaur(dinosaur1);
    assert.deepStrictEqual(park.enclosure, [dinosaur1]);
  })






})
