const quizData = [{
        question: "What is his name ?",
        a: "Ismail",
        b: "Iso",
        c: "Isi",
        d: "Kamil",
        correct: "answer-a",
    },
    {
        question: "How old is HE ?",
        a: 23,
        b: 17,
        c: 25,
        d: 26,
        correct: "answer-c",
    },
    {
        question: "Do you love Him ?",
        a: "Of course",
        b: "its not your business",
        c: "IDK",
        d: "I am addicted to Him",
        correct: "answer-d",
    },
    {
        question: "Did you see Him ?",
        a: "Of course",
        b: "It's not your business",
        c: "Sometimes",
        d: "He is next to me ",
        correct: "answer-d",
    }
]

const myQuestion = document.querySelector('#question');

const answera = document.querySelector('#answera');
const answerb = document.querySelector('#answerb');
const answerc = document.querySelector('#answerc');
const answerd = document.querySelector('#answerd');
const myBtn = document.querySelector('#btn');

const answerEl = document.querySelectorAll('.answer');



let currentQuizNumber = 0;
loadQuestion();

function loadQuestion() {

    diSelected();
    const currentQuizData = quizData[currentQuizNumber];
    myQuestion.innerHTML = currentQuizData.question;

    answera.innerHTML = currentQuizData.a;
    answerb.innerHTML = currentQuizData.b;
    answerc.innerHTML = currentQuizData.c;
    answerd.innerHTML = currentQuizData.d;

}

function diSelected() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

function getSelected() {
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });
    return answer;
}
const appContainer = document.querySelector('.appcontainer');
let score = 0;

myBtn.addEventListener("click", () => {
    const answer = getSelected();



    if (answer) {
        if (answer === quizData[currentQuizNumber].correct) {
            score++;
        }
        currentQuizNumber++;
        if (currentQuizNumber < quizData.length) {
            loadQuestion();
        } else
            alert(`Congratulations You finished the quiz. Your score => ${score} of 4`);


    }




})