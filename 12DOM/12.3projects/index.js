/** @format */

// create a close button
const myNodeList = document.getElementsByTagName("li");

var i;
for (let i = 0; i < myNodeList.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createElement("\u00D7");
  console.log(txt);

  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
var i;
for (let i = 0; i < close.length; i++) {
  close[i] = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}
