const quizQuestions = [
    {
        question: "In which game does Luigi first demonstrate his unique 'scuttle' jump, which is higher and floatier than Mario's?",
        answers: ["Super Mario Bros. 2", "Super Mario Bros. 3", "Luigi's Mansion", "Mario & Luigi: Superstar Saga"],
        correctAnswer: "Super Mario Bros. 2"
    },
    {
        question: "Luigi’s ghostly dog, Polterpup, first appears in which game?",
        answers: ["Luigi's Mansion", "Luigi's Mansion: Dark Moon", "Luigi's Mansion 3", "Super Mario Galaxy"],
        correctAnswer: "Luigi's Mansion: Dark Moon"
    },
    {
        question: "Which game features Luigi wearing a green fox costume?",
        answers: ["Super Mario 3D World", "Mario Kart 8", "Super Mario Bros. 3", "Super Mario Odyssey"],
        correctAnswer: "Super Mario 3D World"
    },
    {
        question: "What unique power does Luigi use in 'Mario & Luigi: Partners in Time'?",
        answers: ["Time Travel", "Mind Reading", "Invisibility", "Super Strength"],
        correctAnswer: "Time Travel"
    },
    {
        question: "Luigi is the protagonist of which RPG series that features both brothers, but typically emphasizes his character more?",
        answers: ["Paper Mario", "Mario & Luigi", "Super Mario RPG", "Luigi's Mansion RPG"],
        correctAnswer: "Mario & Luigi"
    },
    {
        question: "In what year did Luigi feature in his own version of the classic game, marking 'The Year of Luigi'?",
        answers: ["2013", "2001", "1996", "2018"],
        correctAnswer: "2013"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentQuestionIndex);
    document.getElementById('next-button').addEventListener('click', handleNextQuestion);
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
});

function loadQuestion(index) {
    const question = quizQuestions[index];
    document.getElementById('question').textContent = question.question;
    const answersUl = document.getElementById('answers');
    answersUl.innerHTML = '';
    question.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', function() {
            document.querySelectorAll('#answers li').forEach(li => li.classList.remove('selected'));
            li.classList.add('selected');
        });
        answersUl.appendChild(li);
    });
}

function handleNextQuestion() {
    const selectedAnswer = document.querySelector('li.selected');
    if (selectedAnswer && selectedAnswer.textContent === quizQuestions[currentQuestionIndex].correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').textContent = `${score} out of ${quizQuestions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion(0);
}
