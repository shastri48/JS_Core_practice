// function select(d){
//   var obj = {};
//   obj.elem = document.querySelector(d);
//   // obj.d = d;
//   return obj; 
// }

function select(d){
  this.elem = document.querySelector(d);
}
var $ = (p)=> new select(p);

select.prototype.css = function(property, value){
  return tprototypehis.elem.style[property] = value;
}

select.prototype.hasClass = function(name){
  if(this.elem.classList.contains(name)) return true;
  else return false;
}

select.prototype.hide = function(){
  return this.elem.style.display = "none";
}

select.prototype.show = function(){
  return this.elem.style.display = "block";
}

select.prototype.html = function(val){
  this.elem.innerHTML = val;
  return this;
}

select.prototype.attr = function(property,val){
  this.elem.setAttribute = (property, val);
  return this;
}

select.prototype.removeAttr = function(property, val){
  this.elem.removeAttribute = (property, val);
  return this;
}

select.prototype.append = function(val){
  this.elem.appendChild(val);
  return this;
}

select.prototype.dblClick = function(todo){
  this.elem.addEventListener("dblclick", todo);
  return this;
}


