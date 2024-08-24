/** @format */

const getCube = () => {
  const number = document.getElementById("number").value;
  alert(number * number * number);
};
//===========================================================================>

const changeText = () => {
  let element = document.getElementById("myText");
  element.textContent = "The text has been changed";
};
const changeStyle = () => {
  let element = document.getElementById("myText");
  element.style.color = "red";
  element.style.fontSize = "25px";
};
//===============================================================================>
