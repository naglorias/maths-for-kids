let showCalc = document.getElementById("calculation");
let wrongAnswers = document.querySelectorAll(".random");
let correctAnswer = document.querySelector(".correct");
let correctEffect = new Audio("correct.mp3");
let wrongEffect = new Audio("wrong.mp3");
let answers = document.querySelector(".answers");

function division() {
  let random1 = Math.floor(Math.random() * 10);
  let random2 = Math.floor(Math.random() * 10);
  let random3 = Math.floor(Math.random() * 10);
  let random4 = Math.floor(Math.random() * 10);
  let division = random1 / random2;
  showCalc.innerHTML = `${random1} / ${random2} = ?`;
  correctAnswer.innerHTML = division.toFixed(2);
  wrongAnswers[0].innerHTML = random3;
  wrongAnswers[1].innerHTML = random4;
  shufflePlaces(answers);
}
correctAnswer.onclick = (event) => {
  correctAnswer.style.border = "3px solid green";
  correctAnswer.style.color = "green";
  correctAnswer.style.background = "#C9E4C5";
  wrongAnswers.forEach((wrong) => {
    wrong.style.background = "#ffef78";
    wrong.style.color = "#000";
    wrong.style.border = "0.4rem solid #b24080";
  });

  correctEffect.play();
  window.setTimeout(function () {
    location.reload();
  }, 1100);
};

wrongAnswers[0].onclick = (event) => {
  event.target.style.border = "3px solid red";
  event.target.style.color = "red";
  event.target.style.background = "#FFDEDE";
  correctAnswer.style.background = "#ffef78";
  correctAnswer.style.color = "#000";
  correctAnswer.style.border = "0.4rem solid #b24080";
  wrongAnswers[1].style.background = "#ffef78";
  wrongAnswers[1].style.color = "#000";
  wrongAnswers[1].style.border = "0.4rem solid #b24080";
  wrongEffect.play();
};
wrongAnswers[1].onclick = (event) => {
  event.target.style.border = "3px solid red";
  event.target.style.color = "red";
  event.target.style.background = "#FFDEDE";
  correctAnswer.style.background = "#ffef78";
  correctAnswer.style.color = "#000";
  correctAnswer.style.border = "0.4rem solid #b24080";
  wrongAnswers[0].style.background = "#ffef78";
  wrongAnswers[0].style.color = "#000";
  wrongAnswers[0].style.border = "0.4rem solid #b24080";
  wrongEffect.play();
};

function shufflePlaces(n) {
  for (var i = n.children.length; i >= 0; i--) {
    n.appendChild(n.children[(Math.random() * i) | 0]);
  }
}
