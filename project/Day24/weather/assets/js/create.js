export function create(tag, content,attribute, parent){
  var tagName = document.createElement(tag);
  tagName.setAttribute("id", attribute);
  tagName.textContent = content;
  parent.appendChild(tagName);  
}


export function createImage(tag, attribute, parent){
  var tagName = document.createElement(tag);
  tagName.setAttribute("src", attribute);
  parent.appendChild(tagName);
}