/** @format */

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

document.getElementById("gray").addEventListener("click", () => {
  const a = document.getElementById("gray").classList.contains("");
  console.log(a);
});
// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);

//     switch (true) {
//       case e.target.id === "gray":
//         console.log((body.style.backgroundColor = e.target.id));
//         break;

//       case e.target.id === "darkorange":
//         console.log((body.style.backgroundColor = e.target.id));
//         break;
//       case e.target.id === "blue":
//         console.log((body.style.backgroundColor = e.target.id));
//         break;
//       case e.target.id === "yellow":
//         console.log((body.style.backgroundColor = e.target.id));
//         break;
//         break;
//       case e.target.id === "purple":
//         console.log((body.style.backgroundColor = e.target.id));
//         break;
//       case e.target.id === "skyblue":
//         console.log((body.style.backgroundColor = e.target.id));
//         break;
//       default:
//         break;
//     }
//   });
// });
