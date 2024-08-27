/** @format */
let string = "";
const buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    if (value === "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (value == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(value);
      string += value;
      document.querySelector("input").value = string;
    }
  });
});
