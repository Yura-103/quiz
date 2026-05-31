// Cкопіюй код з минулого уроку
document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "найкрутіший співак?",
            answers: ["gazan", "Dzidzo", "ledi gaga", "Саня"],
            correct: 3
        },
    
        //   Додай свої запитання
        {
            question: "хто написав пісню: 67?",
            answers: ["gazan", "Dzidzo", "ledi gaga", "Саня"],
            correct: 0
        },
        
        {
            question: "хто написав пісню: abracadabra?",
            answers: ["gazan", "Dzidzo", "ledi gaga", "Саня"],
            correct: 2
        },
        
        {
            question: "хто написав пісню: каділак?",
            answers: ["gazan", "Dzidzo", "ledi gaga", "Саня"],
            correct: 1
        },
        

    ];
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    let questionIndex = 0;
    let score = 0;
    const quizScreen = document.querySelector("#quiz-screen")
    const resultScreen = document.querySelector("#result-screen")
    const startScreen = document.querySelector("#start-screen")
    const startBtn = document.querySelector("#start-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const scoreDisplay = document.querySelector("#score-display")
    const resultText = document.querySelector("#result-text")
   
    function startGame(){
        startScreen.classList.remove("show");
        startScreen.classList.add("hide");

        resultScreen.classList.remove("show");
        resultScreen.classList.add("hide");

        quizScreen.classList.remove("hide");
        quizScreen.classList.add("show");
        score = 0
        scoreDisplay.textContent = `Бали: 0`;
        questionIndex = 0
        showQuestion(questions[0])
    }
    startBtn.onclick = startGame
    
    function goToStartScreen() {
    resultScreen.classList.remove("show");
    resultScreen.classList.add("hide");

    quizScreen.classList.remove("show");
    quizScreen.classList.add("hide");

    startScreen.classList.remove("hide");
    startScreen.classList.add("show");
}
    restartBtn.onclick = goToStartScreen
    
    function showQuestion(question) {
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            // Завдання 5 - Перевірка відповіді
            button.addEventListener('click', () => checkAnswer(button,i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);

    // Завдання 5 - Перевірка відповіді
    function checkAnswer(button,answerIndex) {
        if (answerIndex == questions[questionIndex].correct) {
            score++;
            button.classList.add("correct");
            scoreDisplay.textContent = `Бали:  ${score} `
            

        } else {
            button.classList.add("wrong");

        }
        questionIndex++;
        if (questionIndex < questions.length) {
        showQuestion(questions[questionIndex]);
    } else {
        showResult();
    }
    }
    function nextQuestion(){
        questionIndex++
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
        }
        else {
            showResult()
        }
    }
    function showResult(){
        quizScreen.classList.remove("show");
        quizScreen.classList.add("hide")
        resultScreen.classList.add("show")
        resultText.textContent = `Твій результат: ${score} з ${questions.length}`
        
    }
    
});
