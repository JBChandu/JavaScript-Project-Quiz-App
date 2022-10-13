const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c"
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b"
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  }
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  questionEl.textContent = quizData[currentQuiz].question;
  a_text.textContent = quizData[currentQuiz].a;
  b_text.textContent = quizData[currentQuiz].b;
  c_text.textContent = quizData[currentQuiz].c;
  d_text.textContent = quizData[currentQuiz].d;
}

function deselectAnswers() {
  answerEls.forEach((data) => {
    data.checked = false;
  });
}

function getSelected() {
  let selec = "";

  answerEls.forEach((data) => {
    if (data.checked === true) {
      selec = data.id;
    }
  });
  return selec;
}

submitBtn.addEventListener("click", () => {
  let selectedAns = getSelected();
  // if none of the options is selected give a alert do a reload
  if (!selectedAns) {
    alert("Please select one option");
    window.location.reload();
  }
  // if answer is selected check with the quizdata object
  if (selectedAns === quizData[currentQuiz].correct) {
    score += 1;
    console.log(score);
  }
  if (currentQuiz < quizData.length - 1) {
    //
    currentQuiz += 1;
    deselectAnswers();
    loadQuiz();
  } else {
    // alert(`Your score is :${score} You can retake the quiz if Needed`);
    quiz.innerHTML = `Your Score is: ${score} / ${quizData.length}`;
    quiz.style.textAlign = "center";

    // create a retry button
    let retry = document.createElement("button");
    retry.textContent = "RE-TRY";
    quiz.append(retry);
    currentQuiz = 0;
    score = 0;
    loadQuiz();
    deselectAnswers();
    // retry button click
    retry.addEventListener("click", () => {
      window.location.reload();
    });
  }
});
