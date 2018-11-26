function addCard(list) {

  list.cardForm.style.display = 'block';

  const cardText = list.cardNode.querySelector('.card-text')
      , cardSubmit = list.cardNode.querySelector('.card-submit');
  cardSubmit.onclick = addNewCard;
  function addNewCard(e){
    e.preventDefault();
    let title = cardText.value
        , card;
    card = new Card(list, title);
    cardText.value = "";
    list.cardNode.insertBefore(card.node, list.cards[list.cards.length - 1].node);

    list.cardForm.style.display = 'none';

  }
}