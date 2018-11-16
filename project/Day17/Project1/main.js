
// animal Creator 
function AnimalCreator(name, age) {
  var newA = Object.create(animalFunction);
  newA.name = name;
  newA.age = age; 
  return newA;
}

var animalFunction = {
  eat: function () {
    console.log("I eat")
  },
  move: function () {
    console.log("I move")
  }
}

// veg creator
function VegCreator(name, age){
  var newVeg = AnimalCreator(name, age);
  Object.setPrototypeOf(newVeg, vegFunction);
  return newVeg;
}

var vegFunction = {
  eatGrass: function (){
    console.log("i eat grass");
  } 
}

Object.setPrototypeOf(vegFunction, animalFunction);

// noVeg creator
function NonVegCreator(name, age){
  var newVeg = AnimalCreator(name, age);
  Object.setPrototypeOf(newVeg, nonVegFunction);
  return newVeg;
}

var nonVegFunction = {
  eatFlesh: function (){
    console.log("i eat flesh");
  } 
}

Object.setPrototypeOf(nonVegFunction, animalFunction);

// Rabbit
function Rabbit(name, age){
  var newRabbit = VegCreator(name, age);
  Object.setPrototypeOf(newRabbit, rabbitFunction);
  return newRabbit;
}

var rabbitFunction = {
  jump: function () {
    console.log("I can Jump");
  }
}
Object.setPrototypeOf(rabbitFunction, vegFunction);

// lion
function Lion(name, age){
  var newLion = NonVegCreator(name, age);
  Object.setPrototypeOf(newLion, lionFunction);
  return newLion;
}

var lionFunction = {
  roar: function () {
    console.log("I can roar");
  }
}

Object.setPrototypeOf(lionFunction, nonVegFunction);