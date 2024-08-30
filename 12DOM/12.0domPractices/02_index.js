/** @format */

// To target the parent div
const parent = document.querySelector(".parent");

// To target the child div
console.log(parent.children);

// To target the second child by index also the node text in it
console.log(parent.children[1].innerHTML);
// ========================================================================>

///for loop for all children of the parent to add some style
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

//it give green color to the second child of the parent
parent.children[1].style.color = "green";

//firsElementChild is used to target the first child
console.log(parent.firstElementChild);

// firsElementChild is used to target the first child
console.log(parent.lastElementChild);
//===========================================================================>

// select a div by class name as day and assign it to a variable
const dayOne = document.querySelector(".day");
console.log(dayOne);

//To target parent from child
console.log(dayOne.parentElement);

//To target sibling
console.log(dayOne.nextElementSibling);

//To find how many node  are their
console.log("NODES :", parent.childNodes);
//===========================================================================>
