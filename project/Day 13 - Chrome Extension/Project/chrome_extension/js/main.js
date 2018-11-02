const h = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");
var greeting = "";
var now;
var second;
var minute;
var hour;

function setDate() {
  now = new Date();
  second = now.getSeconds();
  minute = now.getMinutes();
  hour = now.getHours();
  h.innerText = `${hour}:`;
  min.innerText = `${minute}`;
  if(hour < 12) {
    greeting = `Good Morning <span class="greetName"></span>`;
  }
  if(hour > 12 && hour < 17) {
    greeting = `Good Afternoon <span class="greetName"></span>`;
  }
  if(hour > 17 && hour < 20) {
    greeting = `Good Evening <span class="greetName"></span>`;
  }
  if(hour > 20) {
    greeting = `Good Night <span class="greetName"></span>`;
  }
  wish.innerHTML = greeting;

}
setInterval(setDate, 1000);


const todoText = document.querySelector("#todo-form");
const todoValue = document.querySelector("#todo-text");
const bookList = document.querySelector("#book-list ul");
const li = document.querySelector("li");
const showAll = document.querySelector("[data-id=all]");
const doneAll = document.querySelector("[data-id=done]");
const notDoneAll = document.querySelector("[data-id=notDone]");
const left = document.querySelector("[data-id=left]");
const wish = document.querySelector(".greeting");
const greetName = document.querySelector(".greetName");




var toDoArray = JSON.parse(localStorage.getItem("dataArray")) || [];


function todoDisplay(data = []) {
  bookList.innerHTML = "";
  data.forEach((v, i) => {
  bookList.innerHTML += `<li data-id = "${i}"><input type = "checkbox" class="check" data-id="${i}" ${v.done ? 'checked' : ""}>${v.done ? v.name.strike(): v.name}<img class = "edit pencil" data-id="${i}" src="img/pencil.svg">
  <button class = "delete" data-id="${i}">X</button>
  </li>`
 
});
localStorage.setItem("dataArray", JSON.stringify(toDoArray));

}
function addToDo(e) {
  e.preventDefault();
  var todoData = {
    name : "",
    done: false
  }
  if(!todoValue.value) return;
  todoData.name = todoValue.value; 
  toDoArray.push(todoData);
  todoValue.value = "";
  todoDisplay(toDoArray);
  leftCount();
}

function todoDelete(event){
  // console.log("tododelete");

if(event.target.classList.contains("delete")) {
  index = event.target.dataset.id;
  toDoArray.splice(index, 1);  
}
if(event.target.classList.contains("editText")) return; 
todoDisplay(toDoArray);
leftCount();
}


function todoToggle(e){
  // console.log("todotoggle");

 if(!e.target.classList.contains("check")) return;
 let id = e.target.dataset.id;
 toDoArray[id].done = !toDoArray[id].done;
 if(event.target.classList.contains("editText")) return;
 todoDisplay(toDoArray);
 leftCount();
}

function doneData() {
  let done = toDoArray.filter(v => {
    if(v.done){
      return v;
    }
  })
  todoDisplay(done);
}

function allData() {
  todoDisplay(toDoArray);
}

var notDone;
function notDoneData() {
  notDone = toDoArray.filter(v => {
    if(!v.done){
      return v;
    }
  })
  left.textContent = notDone.length;
  todoDisplay(notDone);
}

function leftCount() {
  notDone = toDoArray.filter(v => {
    if(!v.done){
      return v;
    }
  })
  left.textContent = notDone.length
}
function todoEdit(event) {
  // console.log(event,'edit');
  let id = event.target.dataset.id;
  // console.log(id,'asdasd')
  // if(event.target.classList.contains("editText")) return;
 if(event.target.classList.contains("edit")){
   newText = `<input type="text" class="editText" id=${id} value= ${toDoArray[id].name}>`
   toDoArray[id].name = newText;  
  todoDisplay(toDoArray);
  }
}

function saveEdited(e) {
  const editText = document.querySelector("[class=editText]");
  // console.log(e.target)
  index = e.target.id; 
  if(e.keyCode == 13){
    toDoArray[index].name = editText.value;
   } else return;
   todoDisplay(toDoArray);
 }

notDoneData();
todoDisplay(toDoArray);
bookList.addEventListener("keyup", saveEdited)
bookList.addEventListener("click", todoEdit);
bookList.addEventListener("click", todoDelete);
todoText.addEventListener("submit", addToDo);
bookList.addEventListener('click', todoToggle);
doneAll.addEventListener("click", doneData);
showAll.addEventListener("click", allData);
notDoneAll.addEventListener("click", notDoneData);
left.addEventListener("click", leftCount);
