const Park = function () {
  this.enclosure = [];
}

Park.prototype.dinosaurCount = function () {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function(dinosaur){
   this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurByType = function(type){
  const dinosaursToKeep = [];
  for (const dinosaur of this.enclosure){
    if (dinosaur.type !== type) dinosaursToKeep.push(dinosaur);
  }
  this.enclosure = dinosaursToKeep;
}

// Park.prototype.removeDinosaur = function(type) {
//   for (var dinosaur of this.dinosaur) {
//     if (dinosaur.type === type) {
//       var index = this.dinosaur.indexOf(dinosaur);
//       this.dinosaur.splice(index, 1);
//     }
//   }


module.exports = Park;
