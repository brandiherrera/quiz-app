console.log("working");
let score = 0;
console.log(score);
let questionNumber = 0;
const submitButton = document.getElementsByClassName("submitButton");

//let submitButton = `<button type="submit" class="submitButton">Submit</button>`
/*
function displayQuestionNumber() {
    firstPage.append($(questionNumber));
}
*/

function displayQuestion() {
    console.log("running `displayQuestion`");
    console.log(STORE.length);
    if (questionNumber < STORE.length) {
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
        `;
    };
}
//displayQuestion();


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
//LEFT OFF HERE
$('.submitButton').on('click', function(event) {
    $('.quizPage').hide();
    console.log("TEST")
})
/* ???
function nextQuestion() {
    if (questionNumber < STORE.length) {
        questionNumber++;
        $('.questionNumber').text(questionNumber+1);
    }
}
*/
function answerCorrect() {
    $('quizPage').hide();
    
}

function answerIncorrect() {
    $('h2').css('color', 'red)');
    console.log("print");
}

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
$(".submitButton").on('click', function(event) {
    event.preventDefault();
//        let result = false;
        for (let i=0; i<'answers'.length; i++) {
            let userInput = $('answers')[i];
            if ("userInput:checked" === true) {
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
*/


/*
function hitSubmit() {
    $('.questionPage').on('click', 'button' (function(event) {
        event.preventDefault();
        //$('quizPage').remove();
        console.log("`submitButton` working")
    }));
};
*/


function startQuiz() {
    $('.firstPage').on('click', 'button', function(event) {
        event.preventDefault();
        $('.firstPage').hide();
        console.log("running `startQuiz`");
        $('.quizPage').prepend(displayQuestion());
        $('.submitButton').show();
    });
}
startQuiz();

/*
function handleQuizApp() {
    startQuiz();
}
*/
//$(nextQuestion);