class AnimalCreator {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("I can eat bro")
  }
  move() {
    console.log("I can move bro")
  }
}

class VegCreator extends AnimalCreator {
  constructor(name, age){
    super(name, age);
  }
  eatGrass() {
    console.log("I can eat Grass bro")
  }
}

class NonVegCreator extends AnimalCreator {
  constructor(name, age){
    super(name, age);
  }
  eatFlesh() {
    console.log("I can eat Flesh bro")
  }
}

class Rabbit extends VegCreator {
  constructor(name, age){
    super(name, age);
  }
  jump() {
    console.log("I am rabbit and i can jump")
  }
}

class Cow extends VegCreator {
  constructor(name, age){
    super(name, age);
  }
  milk() {
    console.log("I am Cow and i can give milk")
  }
}


class Lion extends NonVegCreator {
  constructor(name, age){
    super(name, age);
  }
  roar() {
    console.log("I am Lion and i can Roar bro")
  }
}

class Tiger extends NonVegCreator {
  constructor(name, age){
    super(name, age);
  }
  hunt() {
    console.log("I am Tiger and i am a hunter bro")
  }
}