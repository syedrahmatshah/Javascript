/** @format */

const addLanguage = (langName) => {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
};
addLanguage("python");
addLanguage("typescript");

const addOptiLanguage = (langName) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
};
addOptiLanguage("golang");
