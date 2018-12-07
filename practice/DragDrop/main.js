var fill = document.querySelector(".fill");
var empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  setTimeout(()=> (this.className += "invisible"), 0);
}
function dragEnd(){
  this.className = "fill";
}

for(var empty of empties){
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);  
}
function dragOver(e){
  e.preventDefault();
  console.log("over")
}
function dragEnter(e){
  // e.preventDefault();
  console.log("enter")
  this.className += " hovered";
}
function dragLeave(){
  console.log("leave")
  this.className = "empty";
}
function dragDrop(e){
  console.log("dragdrop")
  this.className = "empty";
  this.append(fill);
}