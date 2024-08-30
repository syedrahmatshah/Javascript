/** @format */
let counter = 0;

document.querySelector("#increment").onclick = function () {
  counter++;
  document.querySelector("#countLable").innerHTML = counter;
};

document.querySelector("#reset").onclick = function () {
  counter = 0;
  document.querySelector("#countLable").innerHTML = counter;
};

document.querySelector("#decrement").onclick = function () {
  counter--;
  document.querySelector("#countLable").innerHTML = counter;
};
