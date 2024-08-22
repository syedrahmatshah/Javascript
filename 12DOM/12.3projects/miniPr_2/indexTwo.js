/** @format */
const form = document.querySelector("form");
// this usecase will give empty value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show results
    results.innerHTML = `your bmi is ${bmi}`;

    const weightGuide = document.querySelector("#weight-guide");
    if (bmi < 18.6) {
      weightGuide.innerHTML = "you are Under Weight";
    } else if (bmi < 24.9) {
      weightGuide.innerHTML = "your weight is in Normal Range";
    } else {
      weightGuide.innerHTML = "you are Overweight";
    }
  }
});
