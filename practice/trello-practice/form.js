function listForm(){
  var listForm = document.createElement("form");
  var input = document.createElement("input");
  input.className = "list-text";
  input.setAttribute("type","text");
  var button = createNode("button");
  button.textContent = "Add List";
  button.className = "list-submit";
  listForm.appendChild(input);
  listForm.appendChild(button);
  listForm.style.display = 'none';
  return listForm;
}

function cardForm(){
  var cardForm = document.createElement("form");
  var input = document.createElement("input");
  input.className = "card-text";
  input.setAttribute("type","text");
  var button = createNode("button");
  button.textContent = "Add Card";
  button.className = "card-submit";
  cardForm.appendChild(input);
  cardForm.appendChild(button);
  cardForm.style.display = 'none';
  return cardForm;
}

function hide(list){
  list.cardForm.style.display = "none";
}