// Change the background color of box1 to 'orange'
box1.style.background = "orange"



// set the font size in box1s to 44px
box1.style.fontSize = "44px"



// shrink box2 by half



// double the size of box2s


// put a circle in the middle of box3 use the class named 'circle' you need to add <div class="circle"></div> in the innerHTML of the box
// **using .innerHTML**
box3.innerHTML = '<div class="circle"></div>';



// **using .appendChild()**
circle = document.createElement("div")
circle.className = "circle";
box3.appendChild(circle);



//remove the circle from box3s
// **using .innerHTML**
// box3s.innerHTML = "";

// **using .removeChild()**
// box3s.childNodes.forEach(v => v.remove());
// box3s.childNodes.forEach(v => v.remove());


// write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done".  
var arr = [];
var i = 0;
function clearFinished() {
  var li = document.querySelectorAll("li");
  li.forEach(v => {
    if(!v.classList.contains("done")){
      arr[i] = v;
      i++;
    }
  })
}
clearFinished();
  var ul = document.querySelector("#box5 ul");
  ul.innerText = "";
arr.forEach(v => {
  ul.appendChild(v);
})




//write a function for #box5 that takes all the completed chores and moves them to #box5s


// write a function called addChore that adds a new item to the list of chores, giving it the class "undone."
var list = document.querySelector("#box5 ul");
function addChore() {
  var choreItem = document.createElement("li");
  choreItem.setAttribute("class", "chore undone");
  choreItem.innerText = "";
  list.appendChild(choreItem);
}

  //do this task using the .appendChild() or innerHTML
list.innerHTML += '<li class = "chore undone"></li>'

//reverse the text in #box6
var text = document.querySelector("#box6 p");
var textContent = text.innerText;
textContentarr = textContent.split(" ");
textContentarr = textContentarr.reverse();
reverseText = textContentarr.join(" ");
text.innerText = reverseText;



// put <em></em> tags around the word "keep" in #box6s
var p = document.querySelector("#box6s p");
pText = p.innerText;
var split = pText.split(" ");
split = split.map(v => {
  if(v == "keep")
  return `<em>${v}</em>`;
  })
  newText = split.join(" ");
  p.innerHTML += newText;

