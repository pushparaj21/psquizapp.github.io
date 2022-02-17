const quizData = [
  {
    question: "How many days makes a week ?",
    a: "10 days",
    b: "14 days",
    c: "5 days",
    d: "7 days",
    correct: "d",
  },

  {
    question: "How many players are allowed on a soccer pitch ?",
    a: "10 players",
    b: "11 players",
    c: "9 players",
    d: "12 players",
    correct: "b",
  },

  {
    question: "Who was the first President of USA ?",
    a: "Donald Trump",
    b: "Barack Obama",
    c: "Abraham Lincoln",
    d: "George Washington",
    correct: "d",
  },

  {
    question: "30 days has ______ ?",
    a: "January",
    b: "December",
    c: "June",
    d: "August",
    correct: "c",
  },

  {
    question: "How manay hours can be found in a day ?",
    a: "30 hours",
    b: "38 hours",
    c: "48 hours",
    d: "24 hours",
    correct: "d",
  },

  {
    question: "Which is the longest river in the world ?",
    a: "River Nile",
    b: "Long River",
    c: "River Niger",
    d: "Lake Chad",
    correct: "a",
  },

  {
    question: "_____ is the hottest Continent on Earth ?",
    a: "Oceania",
    b: "Antarctica",
    c: "Africa",
    d: "North America",
    correct: "c",
  },

  {
    question: "Which country is the largest in the world ?",
    a: "Russia",
    b: "Canada",
    c: "Africa",
    d: "Egypt",
    correct: "a",
  },

  {
    question: "Which of these numbers is an odd number ?",
    a: "Ten",
    b: "Twelve",
    c: "Eight",
    d: "Eleven",
    correct: "d",
  },

  {
    question: `"You Can't see me" is a popular saying by`,
    a: "Eminem",
    b: "Bill Gates",
    c: "Chris Brown",
    d: "John Cena",
    correct: "d",
  },

  {
    question: "Where is the world tallest building located ?",
    a: "Africa",
    b: "California",
    c: "Dubai",
    d: "Italy",
    correct: "c",
  },

  {
    question: "The longest river in the United Kingdom is ?",
    a: "River Severn",
    b: "River Mersey",
    c: "River Trent",
    d: "River Tweed",
    correct: "a",
  },

  {
    question: "How many permanent teeth does a dog have ?",
    a: "38",
    b: "42",
    c: "40",
    d: "36",
    correct: "b",
  },

  {
    question: "Which national team won the football World cup in 2018 ?",
    a: "England",
    b: "Brazil",
    c: "Germany",
    d: "France",
    correct: "d",
  },

  {
    question: "Which US state was Donald Trump Born ?",
    a: "New York",
    b: "California",
    c: "New Jersey",
    d: "Los Angeles",
    correct: "a",
  },

  {
    question: "How man states does Nigeria have ?",
    a: "24",
    b: "30",
    c: "36",
    d: "37",
    correct: "c",
  },

  {
    question: "____ is the capital of Nigeria ?",
    a: "Abuja",
    b: "Lagos",
    c: "Calabar",
    d: "Kano",
    correct: "a",
  },

  {
    question: "Los Angeles is also known as ?",
    a: "Angels City",
    b: "Shining city",
    c: "City of Angels",
    d: "Lost Angels",
    correct: "c",
  },

  {
    question: "What is the capital of Germany ?",
    a: "Georgia",
    b: "Missouri",
    c: "Oklahoma",
    d: "Berlin",
    correct: "d",
  },

  {
    question: "How many sides does an hexagon have ?",
    a: "Six",
    b: "Sevene",
    c: "Four",
    d: "Five",
    correct: "a",
  },

  {
    question: "How many planets are currently in the solar system ?",
    a: "Eleven",
    b: "Seven",
    c: "Nine",
    d: "Eight",
    correct: "d",
  },

  {
    question: "Which Planet is the hottest ?",
    a: "Jupitar",
    b: "Mercury",
    c: "Earth",
    d: "Venus",
    correct: "b",
  },

  {
    question: "where is the smallest bone in human body located?",
    a: "Toes",
    b: "Ears",
    c: "Fingers",
    d: "Nose",
    correct: "b",
  },

  {
    question: "How many hearts does an Octopus have ?",
    a: "One",
    b: "Two",
    c: "Three",
    d: "Four",
    correct: "c",
  },

  {
    question: "How many teeth does an adult human have ?",
    a: "28",
    b: "30",
    c: "32",
    d: "36",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const currentQuestion = document.getElementById("currentQuestion");

// move button
rightButton.addEventListener("click", () => {
  currentQuiz++;
  currentQuiz < quizData.length
    ? loadQuiz()
    : alert("you finished and your score is : " + score);
});

leftButton.addEventListener("click", () => {
  currentQuiz ? currentQuiz-- : currentQuiz;
  loadQuiz();
});

let currentQuiz = 0;
loadQuiz();
function loadQuiz() {
  currentQuestion.innerText = `${currentQuiz + 1}/${quizData.length}`;
  console.log(currentQuestion.innerText);
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
      curAnsElem.checked = false;
    }
  });
  return answer;
};
let score = 0;
submitbtn.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer == quizData[currentQuiz].correct) {
    score++;
  }
});
