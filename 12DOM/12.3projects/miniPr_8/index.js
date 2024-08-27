/** @format */
const input = document.querySelector("input");
const listContainer = document.querySelector("#myUL");

const addText = () => {
  if (input.value.trim() === "") {
    alert("you must write something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
};

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
