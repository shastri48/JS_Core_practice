
    // start with strings, numbers and booleans


    // Let's say we have an array

    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    // You might think we can just do something like this:
    const team = players;


    // however what happens when we update that array?
    //  team[3]  = "lux";
    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    const team3 = [].concat(players);
    const team4 = [...players];
    team2[3] = "lux";

    // one way

    // or create a new array and concat the old one in

    // or use the new ES6 Spread

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
     const person = {
      name: 'Wes Bos',
      age: 80
    }; 

    // and think we make a copy:
    const captain = Object.assign({}, person);
    // captain.name = "abhishek";
    const captain2 = {...person};
    // how do we take a copy instead?

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const wes = {
      name : "wes",
      age : 100,
      social : {
        twitter : "shastri48",
        facebook : "abhishek.naaz"
      }
    };
    console.clear();
    console.log(wes);
    const dev = Object.assign({}, wes);
    

