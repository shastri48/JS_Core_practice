function AnimalCreator(name, age) {
  this.name = name;
  this.age = age;
}
AnimalCreator.prototype.eat = function () {
  console.log("I can move");
}
AnimalCreator.prototype.move = function () {
  console.log("I can move");
}

function VegCreator(name, age){
  return (new AnimalCreator(name, age))
}
VegCreator.prototype.eatGrass = function () {
  console.log("I can eat Ghas Fus")
}
VegCreator.prototype.__proto__= AnimalCreator.prototype

var newVeg = new VegCreator("helo", 33)