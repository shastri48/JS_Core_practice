class Card {
  constructor(list, title, dummyCard){
    this.list = list;
    this.title = title; 
    this.id = list.nextId();
    this.node = createNode("div");
    this.node.className = "card";
    this.node.setAttribute("data-id", this.id);
    this.titleNode = createNode("p");
    this.titleNode.setAttribute("class", "cardItem")
    this.cardDelete = createNode("button");
    this.titleNode.textContent = this.title;
    this.node.appendChild(this.titleNode)
    if(!dummyCard){
      this.cardDelete.textContent = "Delete";
      this.cardDelete.setAttribute("class", "deleteCard");
      this.node.appendChild(this.cardDelete);
    }
  }
}