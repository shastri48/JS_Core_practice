//1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
var myPenguin = {
  "character nam": "Parker",
  origin: "Love birds",
  author: "Robert J. Sherman",
  notes: "leader"
}


//2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
console.log(`Hello, I'm a penguin and my name is ${myPenguin["character nam"]}`)


//. Write another line of code that adds a new property to your penguin called canFly and set it to false.
myPenguin.canFly = false;

//4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
myPenguin.chirp = function() {
  console.log("CHIRP CHIRP!");
}


//5. Add another method to your penguin called sayHello that prints to the console the same message from problem 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!
myPenguin.sayHello = function() {
  console.log(`Hello, I'm a penguin and my name is ${this["character nam"]}`);
}



//6. Next, call your penguin's sayHello() method and make sure that it works!
myPenguin.sayHello();

//7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin["character nam"] = "Penguin McPenguinFace";
myPenguin.sayHello();


//8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
myPenguin.fly = function () {
  if (this.canFly == true) {
    console.log("I can fly");
  } else {
    console.log("No flying for me!");
  }
}


//9. Call your penguin's fly() method and make sure it works!
myPenguin.fly();


//10. Change the canFly property to true -- again, without modifying any of your previous code!
myPenguin.canFly = true;


//11. Now call your penguin's fly() method again and make sure it works as expected!
myPenguin.fly();


//12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)
// for (var x in myPenguin) {
//   console.log(x);
// }

//13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
// for (var x in myPenguin) {
//   console.log(myPenguin[x]);
// }


/* *********************************    Arrays inside objects      ********************************* */




// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
myPenguin.favouriteFoods = ["bread", "pizza", "rice"];

// 2. Access your penguin's second favorite food and print it to the console using console.log()
console.log(myPenguin.favouriteFoods[1]);

// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods. 
var firstFavFood = myPenguin.favouriteFoods[0];

// 4. Add another food to the end of the list.
myPenguin.favouriteFoods.push("burger");

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()
console.log(myPenguin.favouriteFoods.length);

// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1] = "pineapples";

// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)
var lastFavFood = myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1];

//8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)
// for (var x in myPenguin) {
//   console.log(x);
// }




// 1. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)
myPenguin.outfit = {
  hat: "baseball cap",
  shirt: "Hawaiian shirt",
  pants: "cargo shorts",
  shoes: "flip-flops",
}

// 2. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.
var penguinHatType = myPenguin.outfit.hat;

// 3. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!
myPenguin.outfit.accessory = "pocket watch";

// 4. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)
myPenguin.outfit.hat = "top hat";

// 5. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property. (Hint: see this page on the delete operator for examples.)
delete myPenguin.outfit.pants;

// 6. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. (Hint: This is the same as step 31 from above, only now we're accessing values from a nested object!)
for (var x in myPenguin.outfit) {
  console.log(myPenguin.outfit[x]);
}



//For these last few challenges, I'll create three penguins for you to work with. Copy-paste this code snippet to the end of your code:

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};
// 1.Create a new variable named penguins and set it equal to an array that lists these three penguins! (Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names don't have quotes around them.)
var penguins = [gunter, ramon, fred];

// 2. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)
console.log(penguins[0]); 

// 3.Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.
console.log(penguins[1]);

// 4 Print to the console the name of the last penguin in the list.
console.log(penguins[penguins.length - 1])

// 5. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!
penguins.push(myPenguin);


// 6. Print the length of the penguins array to the console.
console.log(penguins.length);

// 7. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).
penguins[0].canFly = true;

// 8.Call the sayHello method of the first penguin in your penguins array!
penguins[0].sayHello();


// 9.Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
// for (var i = 0; i < penguins.length; i++) {
//   console.log(penguins[i].name);
// }
// 10.Write a for loop to call the sayHello method of every penguin in the array!
// for(var i = 0; i < penguins.length;i++) {
//   console.log( penguins[i].sayHello() );
// }

// 11.Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2
for (var i = 0; i < penguins.length; i++) {
  penguins[i].numberOfFeet = 2;
}



// 12.Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)
for (var i = 0; i < penguins.length; i++) {
  if (penguins[i].canFly == true) {
    console.log(`${penguins[i].name } can fly`);
  }
}