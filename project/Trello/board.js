var container = document.querySelector("#container");
var trello = document.querySelector("#trello");
var list = document.querySelector("#list");
var listItem = document.querySelector(".listItem");
var listCard = document.querySelector(".listCard");

var inputBox = { name:`<input type="text" class = "listItemData" id = "0"><button class = "addValue" id = "0">value</button>`};
class Board {
  constructor(name, lists = [inputBox]){
    this.name = name;
    this.lists = lists;
  }
  addList (){
    var listItemData = document.querySelector(".listItemData");
    let name = listItemData.value;
    let id = this.lists.length;
    var newList = new List(name, id);
    this.lists.splice(id-1, 0, newList);
    this.displayList();
  }
  addCard(name){
    var newCard = new Card(name);
    this.lists[0].cards.push(newCard);
  }
  displayList(){
    var displayArr = this.lists.map((v, i) => {
      if(i < this.lists.length-1){
        return `<span><h4>${v.name}</h4><input type="text" class = "cardItemData" id = "0"><button class = "addValue" id = "0">Cardvalue</button></span>`; 
      } else {
        return `<span>${v.name}</span>`;
      }
    });
    listItem.innerHTML = displayArr.join(" ");
    this.buttonEvent();
  }
  buttonEvent(){
    var button = document.querySelector(".addValue")
    button.addEventListener("click", this.addList.bind(this));
  }
}

var newBoard = new Board("Altcampus");
newBoard.displayList();
// newBoard.buttonEvent();



// button.addEventListener("click", newBoard.addList.bind(newBoard));