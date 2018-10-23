var input = document.querySelector("input");
var button = document.querySelector("button");
var ul = document.querySelector(".list");
var toDoList = [];
function createToDo(){
    ul.innerHTML = ' ';
  toDoList.forEach((todo,i) => {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "cancel");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "check");
    li.textContent = todo.name;
    span.textContent = "X";
    span.style.marginLeft = "20px";
    li.setAttribute("data-id", i);
    span.setAttribute("data-id", i);
    checkbox.setAttribute("data-id", i);
    // console.log(checkbox);
      if(todo.done == true) {
        checkbox.checked = true;
        li.style.textDecoration = "line-through";
      }
    li.prepend(checkbox);
    li.appendChild(span);
    ul.appendChild(li);
    // console.log(li);
  })
}

function addToDo(){
  var toDoData = {
    name: "",
    done: false
  }
  toDoData.name = input.value;
  toDoList.push(toDoData);
  createToDo();
}
var ulSelect = document.querySelector("ul");

ulSelect.addEventListener("click", toDoRemove);
function toDoRemove(event){
  if(event.target.classList.contains("cancel")){
  let idSelect = event.target.dataset.id;
  console.log(idSelect);
  var newToDo = toDoList.filter((val, i) =>i != idSelect);
  toDoList = newToDo.map(value => value);
  // console.log(toDoList);
  createToDo();
  }
}
ulSelect.addEventListener("click", check);
function check(event) {
  let idSelect = event.target.dataset.id;
  if(event.target.classList.contains("check")) {
    toDoList[idSelect].done = event.target.checked;
    createToDo();
  }
}

button.addEventListener("click", addToDo);
