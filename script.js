/*
Displaying the Quiz Questions
The next thing our quiz needs is some questions to display. 
We’ll use object literals to represent the individual questions 
and an array to hold all of the questions that make up our quiz. 
Using an array will make the questions easy to iterate over:
*/

const quizData = [
  {
    question: "Who invented javascript?",
    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "None of these",
    correct: "c",
  },
  {
    question: "Which one of these is a javscript package manager?",
    a: "Node.js",
    b: "TypeScript",
    c: "npm",
    d: "None of these",
    correct: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    a: "Angular",
    b: "jQuery",
    c: "Requirejs",
    d: "ESlint",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answersElements = document.querySelectorAll(".answer");

const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
// let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answersElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered correctly at
            ${score}/${quizData.length} questions.</h2>
            
            <button onclick= "location.reload()">Reload</button> `;
    }
  }
});
