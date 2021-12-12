// set all variables
var startQuiz = document.querySelector("#start-btn");
var timeRemain = 60;
var timerEl = document.querySelector("#timer");
var countdown;
var quiz = document.querySelector(".quiz");
var showScoreForm = document.querySelector(".scoreForm");
var submitBtn = document.querySelector("#submitScore")

//hide quiz and scoreform elements until ready
quiz.style.display = "none"
showScoreForm.style.display = "none"

// set array for questions
// questions pulled from provided mock-up
var quizQuestions = [
    {
        firstQuestion: "Commonly used data types do NOT include:",
            options: ["alerts", "booleans", "strings", "numbers"],
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
            options: ["commas", "quotes", "curly brackets", "parentheses"],
            answer: "quotes"
    },
    {
        fifthQuestion: "A very useful tool used during development and debugging for printing content to the debugger is:",
            options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
            answer: "console.log"
    }
]


//found goHome function idea on StackOverflow
function goHome() {
    window.location.href="./index.html"
}

// start the quiz from the welcome page/start button
startQuiz.addEventListener("click", function() {
    console.log("start button clicked")
    document.getElementById('intro-page').remove();
    // start timer function when quiz begins
    function startTimer () {
        timerEl.textContent = "Time: " + timeRemain + " seconds remaining!";
        if(timeRemain === 0) {
            clearInterval(countdown);
            alert("Game Over! You've run out of time. Click OK to return to home and try again.")
            return goHome ();
        }
        timeRemain--;
    }
    countdown = setInterval(startTimer, 1000);
    startTimer();
    firstQuestion ();
});

function firstQuestion () {
    quiz.style.display = "block"
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
                feedback.setAttribute("style", "color:green;")
                setTimeout(function (){secondQuestion()}, 1000)
            } else {
                console.log("Q1: Wrong Answer Selected, -10 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                feedback.setAttribute("style", "color:red;")
                //if answer is wrong, subtract time from timer
                timeRemain = timeRemain - 9
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
                feedback.setAttribute("style", "color:green;")
                setTimeout(function (){thirdQuestion()}, 1000)
            } else {
                console.log("Q2: Wrong Answer Selected, -10 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                feedback.setAttribute("style", "color:red;")
                timeRemain = timeRemain - 9
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
                feedback.setAttribute("style", "color:green;")
                setTimeout(function (){fourthQuestion()}, 1000)
            } else {
                console.log("Q3: Wrong Answer Selected, -10 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                feedback.setAttribute("style", "color:red;")
                timeRemain = timeRemain - 9
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
                feedback.setAttribute("style", "color:green;")
                setTimeout(function (){fifthQuestion()}, 1000)
            } else {
                console.log("Q4: Wrong Answer Selected, -10 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                feedback.setAttribute("style", "color:red;")
                timeRemain = timeRemain - 9
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
                feedback.setAttribute("style", "color:green;")
                setTimeout(function (){endQuiz()}, 1000)
            } else {
                console.log("Q5: Wrong Answer Selected, -10 seconds.")
                quiz.appendChild(feedback)
                feedback.textContent = "Incorrect, sorry!"
                feedback.setAttribute("style", "color:red;")
                timeRemain = timeRemain - 9
                setTimeout(function (){endQuiz()}, 1000)
            }
        })
    }
}

//end the quiz and go to high score page to enter initials and save score
function endQuiz () {
    clearInterval(countdown);
    var finalScore = (timeRemain + 1)
    var scoreData = {
        name: document.getElementById("input").value,
        score: finalScore,
    };
    console.log("Quiz completed. Final score is: " + finalScore)
    quiz.textContent = "You've completed the JavaScript Quiz! Your Score is: " + finalScore;
    showScoreForm.style.display = "block"
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(highScores);
        highScores.push(scoreData);
    });
}

var highScores = [];

//local storage for high scores