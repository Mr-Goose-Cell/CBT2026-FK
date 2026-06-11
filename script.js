// =========================
// CBT FK UHO 2026
// script.js
// =========================

// -------------------------
// ELEMENT
// -------------------------

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");

const resultBox = document.getElementById("resultBox");
const resultStatus = document.getElementById("resultStatus");
const explanationText = document.getElementById("explanationText");

const nextButton = document.getElementById("nextButton");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const imageContainer = document.getElementById("imageContainer");
const questionImage = document.getElementById("questionImage");

// -------------------------
// TIMER
// -------------------------

const timerElement =
document.getElementById("timer");

let timeLeft = 6000;

// -------------------------
// STATE
// -------------------------

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// -------------------------
// SHUFFLE QUESTIONS
// -------------------------

const shuffledQuestions = [...questions];

shuffleArray(shuffledQuestions);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] =
    [array[j], array[i]];
  }
}

// -------------------------
// START
// -------------------------

startTimer();
showQuestion();

// -------------------------
// SHOW QUESTION
// -------------------------

function showQuestion() {

  answered = false;

  resultBox.classList.add("hidden");
  nextButton.classList.add("hidden");

  optionsContainer.innerHTML = "";

  const question =
  shuffledQuestions[currentQuestionIndex];

  // ---------------------
  // PROGRESS
  // ---------------------

  progressText.innerText =
    `Soal ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;

  const progressPercent =
    ((currentQuestionIndex + 1) /
      shuffledQuestions.length) * 100;

  progressBar.style.width =
    `${progressPercent}%`;

  // ---------------------
  // QUESTION TEXT
  // ---------------------

  questionText.innerText =
    question.question;

  // ---------------------
  // IMAGE QUESTION
  // ---------------------

  if (question.type === "image") {

    imageContainer.classList.remove("hidden");

    questionImage.src =
      question.image;

  } else {

    imageContainer.classList.add("hidden");

    questionImage.src = "";
  }

  // ---------------------
  // OPTIONS
  // ---------------------

  question.options.forEach(
    (option, index) => {

      const button =
        document.createElement("button");

      button.classList.add("option-btn");

      button.innerText = option;

      button.addEventListener(
        "click",
        () => checkAnswer(index)
      );

      optionsContainer.appendChild(button);

    }
  );
}

// -------------------------
// CHECK ANSWER
// -------------------------

function checkAnswer(selectedIndex) {

  if (answered) return;

  answered = true;

  const question =
    shuffledQuestions[currentQuestionIndex];

  const optionButtons =
    document.querySelectorAll(".option-btn");

  optionButtons.forEach(btn => {
    btn.disabled = true;
  });

  // ---------------------
  // CORRECT ANSWER
  // ---------------------

  if (selectedIndex === question.answer) {

    score++;

    resultStatus.innerText =
      "✅ Jawaban Benar";

    resultStatus.style.color =
      "#16a34a";

  } else {

    resultStatus.innerText =
      "❌ Jawaban Salah";

    resultStatus.style.color =
      "#dc2626";
  }

  // ---------------------
  // COLOR OPTIONS
  // ---------------------

  optionButtons.forEach(
    (button, index) => {

      if (index === question.answer) {

        button.style.background =
          "#16a34a";

        button.style.color =
          "#ffffff";
      }

      if (
        index === selectedIndex &&
        selectedIndex !== question.answer
      ) {

        button.style.background =
          "#dc2626";

        button.style.color =
          "#ffffff";
      }
    }
  );

  // ---------------------
  // EXPLANATION
  // ---------------------

  explanationText.innerText =
    question.explanation;

  resultBox.classList.remove("hidden");

  nextButton.classList.remove("hidden");
}

// -------------------------
// NEXT BUTTON
// -------------------------

nextButton.addEventListener(
  "click",
  nextQuestion
);

function nextQuestion() {

  currentQuestionIndex++;

  if (
    currentQuestionIndex <
    shuffledQuestions.length
  ) {

    showQuestion();

  } else {

    showFinalScore();
  }
}

// -------------------------
// FINAL SCORE
// -------------------------

function showFinalScore() {

  const total =
    shuffledQuestions.length;

  const percentage =
    Math.round(
      (score / total) * 100
    );

  let grade = "";

  if (percentage >= 90) {

    grade = "A";

  } else if (percentage >= 80) {

    grade = "B";

  } else if (percentage >= 70) {

    grade = "C";

  } else if (percentage >= 60) {

    grade = "D";

  } else {

    grade = "E";
  }

  document.querySelector(".quiz-box").innerHTML =

  `
  <div class="final-score">

      <h2>🎉 CBT Selesai</h2>

      <p>
        Jawaban Benar :
        <strong>${score}</strong>
      </p>

      <p>
        Total Soal :
        <strong>${total}</strong>
      </p>

      <p>
        Nilai :
        <strong>${percentage}</strong>
      </p>

      <p>
        Grade :
        <strong>${grade}</strong>
      </p>

      <br>

      <button
      class="btn"
      onclick="location.reload()">

      Ulangi CBT

      </button>

  </div>
  `;
  }

// -------------------
// TIMER
// -------------------

function startTimer(){

    const timer =
    setInterval(() => {

        let minutes =
        Math.floor(timeLeft / 60);

        let seconds =
        timeLeft % 60;

        timerElement.innerText =
        `${minutes}:${seconds
          .toString()
          .padStart(2,"0")}`;

        timeLeft--;

        if(timeLeft < 0){

            clearInterval(timer);

            showFinalScore();
        }

    },1000);

}
