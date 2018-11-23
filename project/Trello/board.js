var container = document.querySelector("#container");
var trello = document.querySelector("#trello");
var list = document.querySelector("#list");
var listItem = document.querySelector(".listItem");
var listCard = document.querySelector(".listCard");

var inputBox = { name:`<h4>Add New List</h4><input type="text" class = "listItemData" id = "0"><button class = "addValue" id = "0">value</button>`};



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

  
  displayCards(id){
    var displayCardArr = this.lists[id].cards.map((v, i) => {
      return `<li id = "cardId${i}">${v}</li>`
    }).join(" ");
    // listItem.innerHTML = displayCardArr.join(" ");
    // this.buttonEvent();
    return displayCardArr;
  }
  displayList(){
    var displayArr = this.lists.map((v, i) => {
      if(i < this.lists.length-1){
        return `<span id = "cardItemData${i}"><h4>${v.name}</h4><input type="text" class = "cardItemInput${i} cardItemInput" id = "${i}"><button class = "cardItemButton${i}" id = "0">Cardvalue</button></span>`; } else {
        return `<span id = "${i}">${v.name}</span>`;
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



listItem.addEventListener("click", addCard.bind(newBoard));