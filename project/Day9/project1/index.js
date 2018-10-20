//Select the section with an id of container without using querySelector.
document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#container");

//Select all of the list items with a class of "second".
document.querySelectorAll(".second");


//Select a list item with a class of third, but only the list item inside of the ol tag.
var ol = document.querySelector("ol");
ol.querySelector(".third");



//Give the section with an id of container the text "Hello!".
var container = document.querySelector("#container");
container.innerHTML += "hello";


//Add the class main to the div with a class of footer.
var footer = document.querySelector(".footer");
footer.className += " " +"main"
footer.classList.add("hello");

//Remove the class main on the div with a class of footer.
footer.classList.remove("hello");

//Create a new li element.
var li = document.createElement("li");


//Give the li the text "four".
li.textContent = "four"


//Append the li to the ul element.
var ul = document.querySelector("ul");
ul.appendChild(li);

//Loop over all of the list inside the ol tag and give them a background color of "green".
var oll = document.querySelectorAll("ol li");
oll.forEach(v => v.style.background = "red")


//Remove the div with a class of footer.
var footer = document.querySelector(".footer");
// footer.remove();