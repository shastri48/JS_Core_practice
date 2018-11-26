class List {
  constructor(board,title,index,dummyList){
    this.board = board;
    this.title = title;
    this.index = index;
    let cardId = 0;
    this.nextId = function(){
      return cardId++;
    }
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
      this.cards = [new Card(this, "Add new Card", true)]
      this.cardForm = cardForm();
      this.cards[this.cards.length - 1].node.appendChild(this.cardForm);
      this.cards.forEach(card => {
        this.cardNode.appendChild(card.node);
      });
      this.cardNode.addEventListener("click", this.cardDelete.bind(this));
      this.cardNode.addEventListener("click", this.cardEdit.bind(this));

      
      this.node.appendChild(this.cardNode);
      this.cards[this.cards.length - 1].titleNode.addEventListener("click", () => addCard(this));
    }
  }
  cardDelete(e) {
    if(e.target.parentElement.dataset.id > 0 && e.target.classList.contains("deleteCard")){
      var data = e.target.parentElement;
      console.log(data)
      e.target.parentElement.parentElement.removeChild(data);
    } else return;
  }
  cardEdit(e){
    e.preventDefault();
    if(e.target.classList.contains("cardItem") && e.target.parentElement.dataset.id != 0){
      var inputEdit = createNode("input");
      inputEdit.setAttribute("type", "text");
      inputEdit.setAttribute("id", "editId");
      console.log(e.target)
      var store = e.target.textContent;
      console.log(store)
      e.target.innerHTML = `<input type="text" class ="editId" value="${store}">`;
      var editSelect = document.querySelector(".editId")
     
      function replaceValue(event){
        if(event.keyCode == 13){
          e.target.textContent = editSelect.value;
          console.log(editSelect.value);
        }
      }
      editSelect.addEventListener("keydown", replaceValue);
    }
  }
}