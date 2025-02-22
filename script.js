const quizData = [
    {
        question: "What is the capital of Italy?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 3
    },
    {
        question: "Which language is used for web development?",
        answers: ["Python", "JavaScript", "C++", "Java"],
        correct: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Leo Tolstoy", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    }
];

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const startBtn = document.getElementById('start-btn');

let currentQuiz = 0;
let score = 0;

function startQuiz() {
    startBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    currentQuiz = 0;
    score = 0;
    loadQuiz();
}

function loadQuiz() {
    resetState();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    currentQuizData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(index);
        answersEl.appendChild(button);
    });
}

function resetState() {
    answersEl.innerHTML = '';
    scoreEl.innerText = '';
}

function selectAnswer(index) {
    if (index === quizData[currentQuiz].correct) {
        score++;
    }
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    scoreEl.innerText = `You answered ${score}/${quizData.length} questions correctly.`;
    nextBtn.style.display = 'none';
    startBtn.style.display = 'block';
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
