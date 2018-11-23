function addCard(e){
  // var cardClass = e.target.className;
  if(e.target.classList.contains("cardItemInput")){
    var id = e.target.id;
    var newClass = "#cardItemData"+id;
    var newButton = ".cardItemButton"+id;
    var newInput = ".cardItemInput"+id;
    var spanText = document.querySelector(newClass);
    var spanButton = document.querySelector(newButton);
    var cardInput = document.querySelector(newInput);
    // console.log(spanText);
    // console.log(spanButton);
    // console.log(cardInput);
    function printCardValue() {
      newBoard.lists[id].cards.push(cardInput.value);
      var li = document.createElement('li');
      li.innerText = cardInput.value;
      spanText.appendChild(li);
    }
    spanButton.addEventListener("click", printCardValue)
    // console.log(newButton);
    // spanText.innerHTML  = this.displayCards(id);
  }

  var newCard = new Card(name);
}