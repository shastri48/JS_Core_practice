class Card {
  constructor(list, title){
    this.list = list;
    this.title = title; 
    this.node = createNode("div");
    this.node.className = "card";
    this.titleNode = createNode("p");
    this.titleNode.textContent = this.title;
    this.node.appendChild(this.titleNode)
  }
}