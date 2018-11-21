// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts

class Cat {
  constructor(name) {
    this.name = name;
    this.happiness = 5;
    this.tiredness = 5;
    this.lonliness = 5;
    this.hunger = 5;
  }

  statusFunc(input) {
    if (input ==  0) {
      return "not"
    } if (input > 0 && input <= 3){
      return "less"
    } if (input > 3 && input <= 6) {
      return "moderate"
    } if (input > 6 && input <= 9) {
      return "very"
    } if (input == 10) {
      return "extreme"
    }
  }

  printStatus() {
    console.log(`${this.name} is ${this.statusFunc(this.hunger)} hungry.`);
    console.log(`${this.name} is ${this.statusFunc(this.lonliness)} lonely.`);
    console.log(`${this.name} is ${this.statusFunc(this.tiredness)} tired.`);
    console.log(`${this.name} is ${this.statusFunc(this.happiness)} happy.`);
}

  changeStatus(state, amount) {
    var x = +(prompt(`Press 1 for increment and press 0 for decrement.`));
    switch(state) {
      case "hunger": this.hunger =( x ? (this.hunger + amount) : (this.hunger - amount));
      break;
      case "happiness": this.happiness =( x ? (this.happiness + amount) : (this.happiness - amount));
      break;
      case "tiredness": this.tiredness =( x ? (this.tiredness + amount) : (this.tiredness - amount));
      break;
      case "lonliness": this.lonliness =( x ? (this.lonliness + amount) : (this.lonliness - amount));
      break;
    }
    for(const key in this) {
      if(!(key == "name")){
        if(this[key] < 0) this[key] = 0;
        if(this[key] > 10) this[key] =10;
      }
    }

  }
}


// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book

// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books


class BookList {
  constructor() {
    this.bookArray = [];
    this.markedRead = 0;
    this.markedNotRead = 0;
    this.nextReadBookIndex = 1;
    this.currentReadBookIndex = 0;
    this.lastReadBookIndex = 0;
  }

  addBook(book) {
    this.bookArray.push(book);
    this.updateBookStatus();
  }

  updateBookStatus(){
    this.nextReadBookIndex = this.findNextBookIndex();
    this.bookArray.forEach((value, i) => {
      if(value.readStatus) this.markedRead++;
    });
    this.markedNotRead = this.bookArray.length - this.markedRead;
  }

  findNextBookIndex() {
    let index;
    for(let i = 0; i < this.bookArray.length; i++) {
      if(this.bookArray[i].readStatus == false && i != this.currentReadBookIndex) {
        index = i;
        break;
      }
    }
    return index;
  }

  finishCurrentBook(){
    if(! this.nextReadBookIndex) {
      console.log("BookList is Empty Add more Books to Read");
      return;
    }
    this.bookArray[this.currentReadBookIndex].readStatus = true;
    this.bookArray[this.currentReadBookIndex].readDate = new Date(Date.now());
    this.lastReadBookIndex = this.currentReadBookIndex;
    this.currentReadBookIndex = this.nextReadBookIndex;
    this.nextReadBookIndex = this.findNextBookIndex();
    this.updateBookStatus();
  }
}


class Book {
  constructor(title, author, genre, readStatus, readDate) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.readStatus = false;
    this.readDate
  }
}

let library = new BookList();
let b1 = new Book("s", "sw", "swd");
library.addBook(b1);
let b2 = new Book("se", "sew", "sewd");
library.addBook(b2);
let b3 = new Book("sr", "srw", "rswd");
library.addBook(b3);
let b4 = new Book("sh", "shw", "hswd");
library.addBook(b4);
