const Park = function () {
  this.enclosure = [];
}

Park.prototype.dinosaurCount = function () {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function(dinosaur){
   this.enclosure.push(dinosaur);
}

// Park.prototype.removeDinosaur = function(type) {
//   for (var dinosaur of this.dinosaur) {
//     if (dinosaur.type === type) {       s
//       var index = this.dinosaur.indexOf(dinosaur);
//       this.dinosaur.splice(index, 1);
//     }
//   }
}


module.exports = Park;
