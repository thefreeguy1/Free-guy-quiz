
const questions = [
    {
        question: "What is the chemical formula for Water Gas?",
        answers: [
            "H2O (g)",
            "C + H2O",
            "CO + H2",
            "CH2O"
        ],
        correct: 2
    },

    {
        question: "Find the derivative of (x² + 3x)⁶",
        answers: [
            "2x + 3",
            "(2x + 3).6(x² + 3x)⁵",
            "(2x + 3)⁵.(x² + 3x)",
            "0"
        ],
        correct: 1
    },

    {
        question: "What is the product at the anode in the electrolysis of conc. CuSO₄?",
        answers: [
            "O₂",
            "Copper",
            "H₂O",
            "SO₂"
        ],
        correct: 1
    },

    {
        question: "Wnich of the following is NOT a first-class lever machine?",
        answers: [
            "Scissors",
            "Fishing Rod",
            "Plier",
            "sea-saw"
        ],
        correct: 1
    },

    {
        question: "Which of the following parts of the brain is responsible for temperature control?",
        answers: [
            "=",
            "==",
            "===",
            "!="
        ],
        correct: 2
    }
];

// Select HTML elements
const startSection = document.getElementById("start-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const finalScore = document.getElementById("final-score");

// Variables
let currentQuestion = 0;
let score = 0;

// Start quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;

    startSection.style.display = "none";
    resultSection.style.display = "none";
    quizSection.style.display = "block";

    showQuestion();
}

// Display question
function showQuestion() {
    feedback.textContent = "";
    nextBtn.style.display = "none";

    answersContainer.innerHTML = "";

    questionNumber.textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    questionText.textContent =
        questions[currentQuestion].question;

    // Create answer buttons
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {

        const button = document.createElement("button");

        button.textContent =
            questions[currentQuestion].answers[i];

        button.onclick = function() {
            checkAnswer(i, button);
        };

        answersContainer.appendChild(button);
    }
}

// Check answer
function checkAnswer(selectedAnswer, selectedButton) {

    const correctAnswer = questions[currentQuestion].correct;

    const buttons = answersContainer.querySelectorAll("button");

    // Disable all buttons
    for (let button of buttons) {
        button.disabled = true;
    }

    if (selectedAnswer === correctAnswer) {
        score++;

        selectedButton.classList.add("correct");
        feedback.textContent = "Correct!";
    } else {
        selectedButton.classList.add("wrong");

        buttons[correctAnswer].classList.add("correct");

        feedback.textContent = "Wrong answer!";
    }

    nextBtn.style.display = "block";
}

// Move to next question
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show final score
function showResults() {

    quizSection.style.display = "none";
    resultSection.style.display = "block";

    finalScore.textContent =
        "You scored " + score +
        " out of " + questions.length;
}

// Restart quiz
function restartQuiz() {

    resultSection.style.display = "none";

    startQuiz();
}
