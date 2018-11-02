var add = document.querySelector(".add");
var input = document.querySelector(".input");
var ulList = document.querySelector("ul");
var todoArray = [];

var dragSrcEl;

function dragStart(e) {
  e.target.style.opacity = '0.5';
  dragSrcEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
};

function dragEnter(e) {
  e.target.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  e.target.classList.remove('over');
}

function dragOver(e) {
  if(e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != e.target) {
    dragSrcEl.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  e.target.style.opacity = '1';
}

// function todoDisplay(arr){
  // ulList.innerHTML = "";
//  arr.forEach((v, i) => {
//    ulList.innerHTML += `<li class = "draggable" data-id = "${i}" draggable = true>${v}</li>`
//  });
// ulList.innerHTML = arr.map((v, i) => {
//    return `<li class = "draggable" data-id = "${i}" draggable = true>${v}</li>`
//    return newArray;
// }).join("");
// }
function addToDo(e){
  if(e.target.className == "add") {
    var li = document.createElement("li");
    li.setAttribute("class", "draggable");
    li.setAttribute("draggable", true)
    li.innerText = input.value;
    ulList.appendChild(li);
  }
  addEventsDragAndDrop(li);
}
function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

// todoDisplay(todoArray);

add.addEventListener("click", addToDo);



