console.log("working");
let score = 0;
console.log(score);
let questionNumber = 0;
let questionNumberDisplay = questionNumber+1;
console.log(questionNumberDisplay)
//const submitButton = document.getElementsByClassName("submitButton");
//const nextButton = documemt.getElementsByClassName("nextButton");


function displayQuestion() {
    console.log("running `displayQuestion`");
//    console.log(STORE.length);
    if (questionNumber <= STORE.length) {
        console.log(STORE.length);
        return `
        <ul>
            <li>Question: ${questionNumber} / 10 </li>
            <li>Score: ${score} / 10 </span></li>
        </ul>
        <form class="questionPage" role="form">
        <fieldset>
        <h2> ${STORE[questionNumber].question} </h2>
        <div class="answer-container">
            <label class="answerOption" for="answer-1">
                <input id="answer-1" type="radio" name="answer" value="${STORE[questionNumber].answers[0]}" required>
                <span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption" for="answer-2">
                <input id="answer-2" type="radio" name="answer" value="${STORE[questionNumber].answers[1]}" required>
                <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption" for="answer-3">
                <input id="answer-3" type="radio" name="answer" value="${STORE[questionNumber].answers[2]}" required>
                <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption" for="answer-4">
                <input id="answer-4" type="radio" name="answer" value="${STORE[questionNumber].answers[3]}" required>
                <span>${STORE[questionNumber].answers[3]}</span>
            </label>
        </div>
        </fieldset>   
        </form>
        `
    };
}
//displayQuestion();

function increaseQuestionNumber() {
    questionNumber++;
/*    let nextQuestionNumber = questionNumber+1;
//    $('.questionNumber').text(questionNumber+1);
    console.log(nextQuestionNumber);
    return nextQuestionNumber;
//    console.log("running `increaseQuestionNumber`");
*/
}

function increaseScore() {
    score++;
}
/*
function checkAnswer() {
    console.log($(".answer-container' input[type='radio']:checked").val());
    if (userAnswer === (STORE[questionNumber].correctAnswer)) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    } 
};
*/

function answerCorrect() {
    $('.quizPage').hide();
//    console.log("running `answerCorrect`");
    increaseScore();
    $('.resultsPage').show();
    $('.resultsPage').prepend(
        `
        <ul>
            <li>Question: ${questionNumber+1} / 10 </li>
            <li>Score: ${score} / 10 </span></li>
        </ul>
        <h3>CORRECT!</h3>
        <p>${STORE[questionNumber].explanation}<p>
        `
        );
    console.log("running `answerCorrect`");
}

function answerIncorrect() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.quizPage').hide();
    $('.resultsPage').show();
    console.log("running `answerIncorrect`");
    $('.resultsPage').show();
    $('.resultsPage').prepend(
        `
        <ul>
            <li>Question: ${questionNumberDisplay} / 10 </li>
            <li>Score: ${score} / 10 </span></li>
        </ul>
        <h3>INCORRECT!</h3>
        <p>The correct answer is ${STORE[questionNumber].correctAnswer}.</p>
        <p>${STORE[questionNumber].explanation}</p>
        `
        );
    console.log("running `answerIncorrect`");
}

function checkAnswer() {
    let userSelection = $('input[name=answer]:checked');
    let userAnswer = userSelection.val();
    console.log(userAnswer);
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    console.log("running `checkAnswer`");
    if (userAnswer === correctAnswer) {
//        userSelection.parent().addClass('correct');
        answerCorrect();
    } else {
//        userSelection.parent().addClass('incorrect');
        answerIncorrect();
    };
    console.log("`checkAnswer` complete")
}

function displayNextQuestion() {
    console.log("running `displayNextQuestion`");
        console.log(STORE.length);
//        questionNumber
        console.log(questionNumber)
        return `
        <ul>
            <li>Question: ${questionNumber+1} / 10 </li>
            <li>Score: ${score} / 10 </span></li>
        </ul>
        <form class="questionPage" role="form">
        <fieldset>
        <h2> ${STORE[questionNumber].question} </h2>
        <div class="answer-container">
            <label class="answerOption" for="answer-1">
                <input id="answer-1" type="radio" name="answer" value="${STORE[questionNumber].answers[0]}" required>
                <span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption" for="answer-2">
                <input id="answer-2" type="radio" name="answer" value="${STORE[questionNumber].answers[1]}" required>
                <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption" for="answer-3">
                <input id="answer-3" type="radio" name="answer" value="${STORE[questionNumber].answers[2]}" required>
                <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption" for="answer-4">
                <input id="answer-4" type="radio" name="answer" value="${STORE[questionNumber].answers[3]}" required>
                <span>${STORE[questionNumber].answers[3]}</span>
            </label>
        </div>
        </fieldset>   
        </form>
        `
    };



//LEFT OFF HERE

$('.nextButton').on('click', function(event) {
    event.preventDefault();
    increaseQuestionNumber();
    if (questionNumber < STORE.length) {
        console.log(questionNumber);
//        $('.resultsPage').hide();
//        $('.quizPage').show();

        console.log(questionNumber);
        $('.resultsPage').hide();
        $('.quizPage').replaceWith(displayNextQuestion());
//        $('.quizPage').show()
        $('.submitButton').show();
//        (displayNextQuestion());
    } else {
        $('.resultsPage').hide();
        '.finalPage'
        console.log("rendering `finalPage`")

    }

//    $('.quizpage').show()
//    console.log("showing `quizPage`")
//    .append(displayQuestion());
})
function nextQuestion() {

}

$('.submitButton').on('click', function(event) {
    event.preventDefault();
    $('.quizPage').hide();
    console.log("TEST")
//    questionButton();
//    validateSubmit();
    checkAnswer();
    $('.resultsPage').show();
    console.log("TEST TEST");
    $('.nextButton').show();
})

function startQuiz() {
    $('.firstPage').on('click', 'button', function(event) {
        event.preventDefault();
        $('.firstPage').hide();
        console.log("running `startQuiz`");
//        increaseQuestionNumber();
        $('.quizPage').prepend(displayQuestion());
        $('.submitButton').show();
    });
}
startQuiz();

/*
function submitAnswer() {
    $('.submitButton').on('submit', function(event) {
        event.preventDefault();
        
    }
}
*/
/*function validateSubmit() {
    let radios = ${".answerOption"};
    let formValid = false;

    let i = 0
    while(!formValid && i<radios.length) {
        if (radios[i].checked)) {
            formValid = true;
        i++
        }
        if (!formValid) {
            alert("Please select an answer.");
            return formValid;
        }
    }
}
*/
/*
function questionButton() {
    event.preventDefault();
    let result = false;
    for (let i=0; i<'answers'.length; i++) {
        let userInput = $('answers')[i];
        if ("input:checked" === true) {
            result = true;
            break;
            console.log("print");
            }
        }
        if (result === false) {
            alert("Please select an answer.");
        }
        else {
            let answer = checkAnswer();
            if (answer === true) {
                score++;
                displayCorrectAnswer();
            }
            else {
                displayIncorrectAnswer();
            }
        console.log("running `questionButton`");
    };
}
*/



/* ???
function nextQuestion() {
    if (questionNumber < STORE.length) {
        questionNumber++;
        $('.questionNumber').text(questionNumber+1);
    }
}
*/


/*
function userSubmitAnswer() {
    $('.quizPage').on('click', 'button', function(event) {
        event.preventDefault();
//        $('.quizPage').hide();
        let userSelection = $("answers:checked");
        let userAnswer = userSelection.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        if (userAnswer === correctAnswer) {
            userSelection.parent().addClass('correct');
            answerCorrect();
        } else {
            userSelection.parent().addClass('incorrect');
            answerIncorrect();
        console.log("print")

        }
    })
}
userSubmitAnswer();
*/
/*
function questionButton() {
    $(".submitButton").on('click', function(event) {
    event.preventDefault();
        let result = false;
        for (let i=0; i<'answers'.length; i++) {
            let userInput = $('answers')[i];
            if ("input:checked" === true) {
                result = true;
                break;
                console.log("print");
                }
            }
            if (result === false) {
                alert("Please select an answer.");
            }
            else {
                let answer = checkAnswer();
                if (answer === true) {
                    score++;
                    displayCorrectAnswer();
                }
                else {
                    displayIncorrectAnswer();
                }
            }
        console.log("running `questionButton`");
//        function checkAnswer()
    });
}
*/




/*
function handleQuizApp() {
    startQuiz();
}
*/
//$(nextQuestion);
//$(checkAnswer);