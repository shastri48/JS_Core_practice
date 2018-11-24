class List {
  constructor(board,title,index,dummyList){
    this.board = board;
    this.title = title;
    this.index = index;

    // create node
    this.node = createNode("div");
    this.node.className = "list";
    this.listTitleNode = createNode("h5");
    this.listTitleNode.textContent = title;
    this.node.appendChild(this.listTitleNode);


    // create cardNode

    this.cardNode = createNode("div");
    this.cardNode.className = "cards";

    if(!dummyList){
      this.cards = [new Card(this, "Add new Card")]
      this.cardForm = cardForm();
      this.cards[this.cards.length - 1].node.appendChild(this.cardForm);
      this.cards.forEach(card => {
        this.cardNode.appendChild(card.node);
      });
      this.node.appendChild(this.cardNode);
      this.cards[this.cards.length - 1].node.addEventListener("click", () => addCard(this));
    }
  }
}