/** @format */

// How to create a div
const div = document.createElement("div");
console.log(div);

// To give a className to the div
div.className = "main";

// To give an ID to the div
div.id = Math.round(Math.random() * 10 + 1);

// To set a custom attribut
div.setAttribute("title", "generated title");

// Also we give style
div.style.backgroundColor = "green";

//Also we give padding
div.style.padding = "15px";

// To add some text to our div
// div.innerText = "chai aur code";
const addText = document.createTextNode("chai aur code");
div.appendChild(addText);

//To attach on document
document.body.appendChild(div);
