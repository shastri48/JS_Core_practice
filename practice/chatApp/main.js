var chatMsg = document.querySelector(".chatMsg");
var chatText = document.querySelector("#chatText");
var chatSubmit = document.querySelector("#chatSubmit");
chatSubmit.addEventListener("click", pushMsg);
function pushMsg(e) {
  e.preventDefault();
  var chatItem = document.createElement("h3");
  chatItem.textContent = chatText.value;
  chatMsg.prepend(chatItem);
  chatText.value = "";
}