const MCQS = [
  {
    question: "What is the height of mt Everest",
    options: ["8848.4m", "12312m", "12333m", "112233m"],
    answer: "8848.4m",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Madrid", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "who is the best person in this universe",
    options: ["Nirman", "Hitler", "Denji", "Makima"],
    answer: "Nirman" || "Makima",
  },
];

const qustionShow = document.querySelector(".qn");
const choices = document.querySelector(".choices");
const btns = document.querySelector("button");
const mainDiv = document.querySelector(".mainDiv");
// MCQS.forEach((mcq) => {
//   console.log(mcq.options);
// });
let count = 0;
let score = 0;
let hel = [];
let va;
showQN(count);
function nextQn(a) {
  choices.innerHTML = "";

  count += a;
  showQN(count);

   
 
}
function showQN(a) {
  console.log(a);
  if (a < MCQS.length) {
    qustionShow.innerHTML = MCQS[a].question;

    for (let i = 0; i < 4; i++) {
      choices.innerHTML += `<label for="mcqs"> <input type= "radio" name="mcqs" value="${MCQS[a].options[i]}" /> ${MCQS[a].options[i]}</label>`;
    }
    checked();
  } else {
    qustionShow.innerHTML = "calculating score";
    checked();
    btns.style.display = "none";
    
    setTimeout(() => {
      MCQS.map((a, i) => {
        if (a.answer == hel[i]) {
          score++;
        }
      });
      console.log(hel);
      if (score <= 2) {
        qustionShow.classList.add("poor");
        qustionShow.innerHTML = `Your Score is ${score}`;
      } else if (score == 3) {
        qustionShow.classList.add("mid");
        qustionShow.innerHTML = `Your Score is ${score}`;
      } else if (score == 4) {
        qustionShow.classList.add("all");
        qustionShow.innerHTML = `Your Score is ${score} `;
      }
    }, 2000);
  }
}

function checked() {
  const inputBtn = document.querySelectorAll("input");

  inputBtn.forEach((input) => {
    input.addEventListener("click", function (e) {
      va = input.value;

      
    });

    console.log(va);
  });
  if(va != undefined){
    hel.push(va);
  }
 
}
