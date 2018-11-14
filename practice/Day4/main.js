var button = document.querySelector("#button");
var check =  document.querySelectorAll(".check");
var ul =  document.querySelector("ul");


function btnClick(e) {
  if(e.target.className == "check"){
    if(e.target.checked){
      if(e.shiftKey){
       check.forEach(v => v.checked = true);
      }
    } else if(!e.target.checked){
      if(e.ctrlKey){
      check.forEach(v => v.checked = false);
      }
    }
  }
}


ul.addEventListener("click", btnClick);