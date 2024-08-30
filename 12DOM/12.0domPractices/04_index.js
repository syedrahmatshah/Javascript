/** @format */
//first method for adding li
const addLanguage = (langName) => {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
};
addLanguage("python");
addLanguage("typescript");
//==============================================================>

//Second method for adding li
const addOptiLanguage = (langName) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
};
addOptiLanguage("golang");
//=================================================================>

//Method for edit li
const secondLang = document.querySelector("li:nth-child(2)");

// we can use the following method
// secondLang.innerHTML = "mojo";

// But this method is used more
const newLi = document.createElement("li");
// for adding textContent
newLi.textContent = "mojo";
secondLang.replaceWith(newLi);
//==================================================================>

//Method for edit another li
// const firstLang = document.querySelector("li:first-child");
// firstLang.outerHTML = "<li>TypeScript</li>";
//===================================================================>

//To remove li
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
