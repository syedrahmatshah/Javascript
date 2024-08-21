/** @format */

// The getElementsByClassName() method is used for selecting or getting the elements through their class name value.
let x = document.getElementsByClassName("class");
document.write("On calling x it will return an array like object" + x);

const changeColor = () => {
  let elements = document.getElementsByClassName("myClass");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
  }
};
