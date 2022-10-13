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
const answerEls = [];
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a");
const b_text = document.querySelector("#b");
const c_text = document.querySelector("#c");
const d_text = document.querySelector("#d");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  for (let i = 0; i < quizData.length; ) {
    questionEl.textContent = quizData[i].question;
    a_text.textContent = quizData[i].a;
    console.log(quizData[i].a);
    b_text.textContent = quizData[i].b;
    c_text.textContent = quizData[i].c;
    d_text.textContent = quizData[i].d;
  }
}

function deselectAnswers() {}

function getSelected() {}

submitBtn.addEventListener("click", () => {});
