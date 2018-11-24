class Board {
  constructor(title){
    this.title = title;
    this.lists = [];


    this.node = createNode("div");
    this.node.className = "board";
    this.titleNode = createNode("h2");

    // list node
    this.listNode = createNode("div");
    this.listNode.classList.add("lists");
  }
  render() {
    this.titleNode.textContent = this.title;  
    this.node.appendChild(this.titleNode);


    // list
    this.listForm = listForm();
    this.lists.push(new List(this, "Add new List..", 0 , true));
    this.listNode.appendChild(this.lists[0].node);
    this.lists[this.lists.length - 1].node.appendChild(this.listForm);
    this.lists[this.lists.length - 1].node.addEventListener("click", () => addList(this));
    this.node.appendChild(this.listNode);
  }
}



var board = new Board("Trello");
document.body.onload = function () {
  board.render();
  document.getElementById("container").appendChild(board.node);
  console.log(document.getElementsByClassName("container"));
}

