const reactionNumber = document.querySelector(".R");
const memorieNumber = document.querySelector(".M");
const verbalNumber = document.querySelector(".Ve");
const visualNumber = document.querySelector(".Vi");
const average = document.querySelector(".average");

const btn = document.querySelector(".btn-main");

btn.addEventListener("click", function () {
  const reaction = parseInt(Math.floor(Math.random() * 100) + 1);
  const memory = parseInt(Math.floor(Math.random() * 100) + 1);
  const verbal = parseInt(Math.floor(Math.random() * 100) + 1);
  const visual = parseInt(Math.floor(Math.random() * 100) + 1);

  const avAll = (reaction + memory + verbal + visual) / 4;
  const avText = document.querySelector(".congrats-text");
  const resultText = document.querySelector(".result-text");

  reactionNumber.innerText = reaction;
  memorieNumber.innerText = memory;
  verbalNumber.innerText = verbal;
  visualNumber.innerText = visual;
  average.innerText = avAll;

  if (avAll <= 30) {
    avText.innerText = `poor`;
    resultText.innerText = `You scored very poor , should you try the test again ?`;
  } else if (avAll > 31 && avAll <= 50) {
    avText.innerText = `medium`;
    resultText.innerText = `You scored as an average person .`;
  } else if (avAll > 51 && avAll <= 70) {
    avText.innerText = `great`;
    resultText.innerText = `You scored higher then  most of the people who have taken these tests.`;
  } else if (avAll > 71 && avAll == 100) {
    avText.innerText = `well done`;
    resultText.innerText = `You're Einstein , you genius !!!`;
  } else {
    reactionNumber.innerText = "";
    memorieNumber.innerText = "";
    verbalNumber.innerText = "";
    visualNumber.innerText = "";
    average.innerText = "";
  }
});

// if (
//   reactionNumber.innerText == "" &&
//   memorieNumber.innerText == "" &&
//   verbalNumber.innerText == "" &&
//   visualNumber.innerText == "" &&
//   average.innerText == ""
// ) {
//   reactionNumber.innerText = reaction;
//   memorieNumber.innerText = memory;
//   verbalNumber.innerText = verbal;
//   visualNumber.innerText = visual;
//   average.innerText = avAll;
// } else if (avAll <= 30) {
//   avText.innerText = `poor`;
// } else if (avAll > 31 && avAll <= 50) {
//   avText.innerText = `medium`;
// } else if (avAll > 51 && avAll <= 70) {
//   avText.innerText = `great`;
// } else if (avAll > 71 && avAll == 100) {
//   avText.innerText = `well done`;
// } else {
//   reactionNumber.innerText = "";
//   memorieNumber.innerText = "";
//   verbalNumber.innerText = "";
//   visualNumber.innerText = "";
//   average.innerText = "";
// }
