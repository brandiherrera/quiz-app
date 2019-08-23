console.log("working");
let score = 0;
console.log(score);
let questionNumber = 0;
let questionNumberDisplay = questionNumber+1;
//console.log(questionNumberDisplay)


function displayQuestion() {
    console.log("running `displayQuestion`");
//    console.log(STORE.length);
    if (questionNumber <= STORE.length) {
        console.log(STORE.length);
        return `
        <ul>
            <li>Question: ${questionNumberDisplay} / 10 </li>
            <li>Score: ${score} / 10 </span></li>
        </ul>
        <form action="#" id="questionPage" class="questionPage" onsubmit="return checkAnswer()" method="post" role="form">
        <fieldset>
        <h2> ${STORE[questionNumber].question} </h2>
        <div class="answer-container">
            <label class="answerOption" for="answer-1">
                <input id="answer-1" type="radio" name="answer" value="${STORE[questionNumber].answers[0]}" class="required">
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
        <input type="submit"  value="submit" />
        </fieldset>   
        </form>
        `
    };
}
//displayQuestion();

/*
    $("#questionPage").on('submit', (function() {
        event.preventDefault();
        return false
    }));
*/

//            <input type="submit"  value="submit" />
/*
function verifyAnswer() {
    $('.quizPage').submit(".questionPage", function(event) {
        event.preventDefault();
        checkAnswer();

    })
}
*/
//$(FormData).get("submit")

function increaseQuestionNumber() {
    questionNumber++;
}

function increaseScore() {
    score++;
}

function answerCorrect() {
    $('.quizPage').hide();
//    console.log("running `answerCorrect`");
    increaseScore();
    $('.resultsPage').show();
    $('.resultsPage').empty().prepend(
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
    return false
}

function answerIncorrect() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.quizPage').hide();
    $('.resultsPage').show();
    console.log("running `answerIncorrect`");
//    $('.resultsPage').show();
    $('.resultsPage').empty().prepend(
        `
        <ul>
            <li>Question: ${questionNumber+1} / 10 </li>
            <li>Score: ${score} / 10 </span></li>
        </ul>
        <h3>INCORRECT!</h3>
        <p>The correct answer is ${STORE[questionNumber].correctAnswer}.</p>
        <p>${STORE[questionNumber].explanation}</p>
        `
        );
    console.log("`answerIncorrect` complete");
    return false
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
//    $('.resultsPage').show();
    console.log("TEST TEST");
    $('.nextButton').show();
    return false
}


function checkNextAnswer() {
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
//    $('.resultsPage').show();
    console.log("TEST TEST");
    $('.nextButton').show();
    return false 
}



function displayNextQuestion() {
    console.log("running `displayNextQuestion`");
    console.log(STORE.length);
    $('.nextButton').hide();
//        questionNumber
    console.log(questionNumber)
    if (questionNumber <= STORE.length) {
        console.log(STORE.length);
    return `
        <ul>
            <li>Question: ${questionNumber+1} / 10 </li>
            <li>Score: ${score} / 10 </span></li>
        </ul>
        <form action="#" id="questionPage" class="questionPage" onsubmit="return checkNextAnswer()" method="post" role="form">
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
            <input type="submit"  value="submit" />
        </div>
        </fieldset>   
        </form>
        `
    };
    return false
}


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
        $('.quizPage').html(displayNextQuestion());
        console.log("`displayNextQuestion` working")
        $('.quizPage').show();
//        $('.submitButton').show();
    } else {
        $('.nextButton').hide();
        $('.resultsPage').hide();
        renderFinalPage();
//        $('.finalPage').append('.restartButton');
        $('.restartButton').show();
        $('.finalPage').show();
        $('.finalPage').prepend()
        console.log("rendering `finalPage`");
//        $('.restartButton').show();
        return false
    };
})

function renderFinalPage() {
//    let finalScore = score;
//   console.log("running `renderFinalPage`")
    if (score <= 5) {
        return $('.finalPage').prepend(
            `
            <h3>You're an F1 newbie!</h3>
            <p>You got ${score} out of 10 correct. That's okay, you'll win next time! Hopefully you learned more about four of Formula One's most winning drivers. You'll get 'em next time!
            </p>
            `
        )
    }
    if (score >= 8) {
        return $('.finalPage').prepend(
            `
            <h3>You finished in first place! </h3>
            <p>You got ${score} out of 10 correct. Well done, you're a true F1 fan!!</p>
            `
        )
    }
    if (score === 6 || score === 7) {
        return $('.finalPage').prepend(
            `
            <h3>So close!</h3>
            <p>You got ${score} out of 10 correct. Following the sport a little while longer and you'll be a superstar F1 fan in no time!</p>
            `
        )
    };
}

$('.restartButton').on('click', function(event) {

    location.reload();
})

//    $('.quizpage').show()
//    console.log("showing `quizPage`")
//    .append(displayQuestion());
//})
//function nextQuestion() {

//}
/*
$('.submitButton').on('click', function(event) {
    event.preventDefault();
//    let userAnswer
    $('.quizPage').hide();
    console.log("TEST")
//    questionButton();
//    validateSubmit();
    checkAnswer();
    $('.resultsPage').show();
    console.log("TEST TEST");
    $('.nextButton').show();
})
*/
function startQuiz() {
    $('.firstPage').on('click', 'button', function(event) {
        event.preventDefault();
        $('.firstPage').hide();
        console.log("running `startQuiz`");
//        increaseQuestionNumber();
        $('.quizPage').append(displayQuestion());
//        $('.submitButton').show();
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
/*
function validateSubmit() {
    let userAnswer = $(this).closest("form").find("radio:checked").val();
    if (!userAnswer) {
        alert ("Please select an answer.")
    }
    else {
        checkAnswer()
    }
/*    let formValid = false;

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