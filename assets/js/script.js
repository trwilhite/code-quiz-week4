// set all variables
var startQuiz = document.querySelector("#start-btn");
var timeRemain = 60;
var timerEl = document.querySelector("#timer");
var countDown;
var quiz = document.querySelector(".quiz");
var answerOptions = document.querySelector(".answerOptions");
var showScoreForm = document.querySelector(".scoreForm");

showScoreForm.style.display = "none"

// set array for questions
var quizQuestions = [
    {
        firstQuestion: "Commonly used data types do NOT include:",
            options: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
    },
    {
        secondQuestion: "The condition in an if/else statement is enclosed with:",
            options: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
    },
    {
        thirdQuestion: "Arrays in JavaScript can be used to store:",
            options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: "all of the above"
    },
    {
        fourthQuestion: "String values must be enclosed within ________ when being assigned to variables.",
            options: ["commas", "curly brackets", "quotes", "parentheses"],
            answer: "quotes"
    },
    {
        fifthQuestion: "A very useful tool used during development and debugging for printing content to the debugger is:",
            options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
            answer: "console.log"
    }
]

// start the quiz from the welcome page/start button
startQuiz.addEventListener("click", function() {
    console.log("start button clicked")
    document.getElementById('intro-page').remove();
    // start timer function when quiz begins
    function startTimer () {
        timerEl.textContent = "Time: " + timeRemain + " seconds remaining!";
        if(timeRemain === 0) {
            clearInterval(countDown);
            alert("Time is Up - Game Over!")
        }
        timeRemain--;
    }
    countDown = setInterval(startTimer, 1000);
    startTimer();
    firstQuestion ();
});

function firstQuestion () {
    quiz.textContent = quizQuestions[0].firstQuestion;
    for (var i = 0; i < quizQuestions[0].options.length; i++){
        var optionsBtn = document.createElement("button");
        var feedback = document.createElement("p")
        optionsBtn.innerHTML = quizQuestions[0].options[i];
        quiz.appendChild(optionsBtn);
        optionsBtn.addEventListener("click", function() {
            //check if answer is right or wrong
            if (this.textContent === quizQuestions[0].answer) {
                console.log("Q1: Right Answer Selected")
                quiz.appendChild(feedback);
                feedback.textContent = "Correct! Great job."
                setTimeout(function (){secondQuestion()}, 1000)
            } else {
                console.log("Q1: Wrong Answer Selected, -5 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                //if answer is wrong, subtract time from timer
                timeRemain -= 5
                //call next question function
                setTimeout(function (){secondQuestion()}, 1000)
            }
        })
    }
}

function secondQuestion () {
    quiz.textContent = quizQuestions[1].secondQuestion;
    for (var i = 0; i < quizQuestions[1].options.length; i++){
        var optionsBtn = document.createElement("button");
        var feedback = document.createElement("p")
        optionsBtn.innerHTML = quizQuestions[1].options[i];
        quiz.appendChild(optionsBtn);
        optionsBtn.addEventListener("click", function() {
            if (this.textContent === quizQuestions[1].answer) {
                console.log("Q2: Right Answer Selected")
                quiz.appendChild(feedback);
                feedback.textContent = "Correct! Great job."
                setTimeout(function (){thirdQuestion()}, 1000)
            } else {
                console.log("Q2: Wrong Answer Selected, -5 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                timeRemain -= 5
                setTimeout(function (){thirdQuestion()}, 1000)
            }
        })
    }
}

function thirdQuestion () {
    quiz.textContent = quizQuestions[2].thirdQuestion;
    for (var i = 0; i < quizQuestions[2].options.length; i++){
        var optionsBtn = document.createElement("button");
        var feedback = document.createElement("p")
        optionsBtn.innerHTML = quizQuestions[2].options[i];
        quiz.appendChild(optionsBtn);
        optionsBtn.addEventListener("click", function() {
            if (this.textContent === quizQuestions[2].answer) {
                console.log("Q3: Right Answer Selected")
                quiz.appendChild(feedback);
                feedback.textContent = "Correct! Great job."
                setTimeout(function (){fourthQuestion()}, 1000)
            } else {
                console.log("Q3: Wrong Answer Selected, -5 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                timeRemain -= 5
                setTimeout(function (){fourthQuestion()}, 1000)
            }
        })
    }
}

function fourthQuestion () {
    quiz.textContent = quizQuestions[3].fourthQuestion;
    for (var i = 0; i < quizQuestions[3].options.length; i++){
        var optionsBtn = document.createElement("button");
        var feedback = document.createElement("p")
        optionsBtn.innerHTML = quizQuestions[3].options[i];
        quiz.appendChild(optionsBtn);
        optionsBtn.addEventListener("click", function() {
            if (this.textContent === quizQuestions[3].answer) {
                console.log("Q4: Right Answer Selected")
                quiz.appendChild(feedback);
                feedback.textContent = "Correct! Great job."
                setTimeout(function (){fifthQuestion()}, 1000)
            } else {
                console.log("Q4: Wrong Answer Selected, -5 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                timeRemain -= 5
                setTimeout(function (){fifthQuestion()}, 1000)
            }
        })
    }
}

function fifthQuestion () {
    quiz.textContent = quizQuestions[4].fifthQuestion;
    for (var i = 0; i < quizQuestions[4].options.length; i++){
        var optionsBtn = document.createElement("button");
        var feedback = document.createElement("p")
        optionsBtn.innerHTML = quizQuestions[4].options[i];
        quiz.appendChild(optionsBtn);
        optionsBtn.addEventListener("click", function() {
            if (this.textContent === quizQuestions[4].answer) {
                console.log("Q5: Right Answer Selected")
                quiz.appendChild(feedback);
                feedback.textContent = "Correct! Great job."
                setTimeout(function (){endQuiz()}, 1000)
            } else {
                console.log("Q5: Wrong Answer Selected, -5 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                timeRemain -= 5
                setTimeout(function (){endQuiz()}, 1000)
            }
        })
    }
}

//end the quiz and go to high score page to enter initials and save score
function endQuiz () {
    clearInterval(countDown);
    quiz.textContent = "You've completed the Coding Quiz! Your Score is: " + (timeRemain + 1);
    showScoreForm.style.display = "block"
}

//local storage for high scores