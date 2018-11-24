class main {
  constructor(title){
    this.title = title;

    // this.board
    this.boardNode = createNode("div");
    this.boardNode.className = "boards";
  }

  render() {

  }
}

var board = new Board(this, "Add new board");
document.body.onload = function () {
  board.render();
  document.getElementById("container").appendChild(this.boardNode);
}