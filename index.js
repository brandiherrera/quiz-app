console.log("working");
let score = 0;
console.log(score);
let questionNumber = 0;
let questionNumberDisplay = questionNumber+1;



function displayQuestion() {
    console.log("running `displayQuestion`");

    if (questionNumber <= STORE.length) {
        console.log(STORE.length);
        return `<ul>
            <li><b>QUESTION:</b> ${questionNumberDisplay} / 10</li>
            <li><b>SCORE:</b> ${score} / 10</li>
        </ul>
        <section class="question-page">
        <form action="#" id="questionPage" class="questionPage" onsubmit="return checkAnswer()" method="post" role="form">
        <fieldset>
        <h2> ${STORE[questionNumber].question} </h2>
        <div class="answer-container">
            <input id="answer-1" type="radio" name="answer" value="${STORE[questionNumber].answers[0]}" class="required">    
            <label class="answerOption" for="answer-1"><span>${STORE[questionNumber].answers[0]}</span></label>
            
            <input id="answer-2" type="radio" name="answer" value="${STORE[questionNumber].answers[1]}" required>
            <label class="answerOption" for="answer-2"><span>${STORE[questionNumber].answers[1]}</span></label>

            <input id="answer-3" type="radio" name="answer" value="${STORE[questionNumber].answers[2]}" required>
            <label class="answerOption" for="answer-3"><span>${STORE[questionNumber].answers[2]}</span></label>
                
            <input id="answer-4" type="radio" name="answer" value="${STORE[questionNumber].answers[3]}" required>
            <label class="answerOption" for="answer-4"><span>${STORE[questionNumber].answers[3]}</span></label>
        
            <input type="submit"  value="SUBMIT" />

        </div>
        </fieldset>   
        </form>
        `
    };
}

function increaseQuestionNumber() {
    questionNumber++;
}

function increaseScore() {
    score++;
}

function answerCorrect() {
    $('.quizPage').hide();
    increaseScore();
    $('.resultsPage').show();
    $('.resultsPage').empty().prepend(
        `<ul>
            <li><b>QUESTION:</b> ${questionNumber+1} / 10</li>
            <li><b>SCORE:</b> ${score} / 10</span></li>
        </ul>
        <h3><b>CORRECT!</h3>
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
    $('.resultsPage').empty().prepend(
        `<ul>
            <li><b>QUESTION:</b> ${questionNumber+1} / 10</li>
            <li><b>SCORE:</b> ${score} / 10</span></li>
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
        answerCorrect();
    } else {
        answerIncorrect();
    };
    console.log("`checkAnswer` complete")
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
        answerCorrect();
    } else {
        answerIncorrect();
    };
    console.log("`checkAnswer` complete")
    console.log("TEST TEST");
    $('.nextButton').show();
    return false 
}



function displayNextQuestion() {
    console.log("running `displayNextQuestion`");
    console.log(STORE.length);
    $('.nextButton').hide();
    console.log(questionNumber)
    if (questionNumber <= STORE.length) {
        console.log(STORE.length);
    return `<ul>
            <li><b>QUESTION:</b> ${questionNumber+1} / 10</li>
            <li><b>SCORE:</b> ${score} / 10</span></li>
        </ul>
        <form action="#" id="questionPage" class="questionPage" onsubmit="return checkNextAnswer()" method="post" role="form">
        <fieldset>
        <h2> ${STORE[questionNumber].question} </h2>
        <div class="answer-container">
            <div tabindex="0">
            <input id="answer-1" type="radio" name="answer" value="${STORE[questionNumber].answers[0]}" class="required">    
            <label class="answerOption" for="answer-1"><span>${STORE[questionNumber].answers[0]}</span></label>
            </div>
            <div tabindex="0">
            <input id="answer-2" type="radio" name="answer" value="${STORE[questionNumber].answers[1]}" required>
            <label class="answerOption" for="answer-2"><span>${STORE[questionNumber].answers[1]}</span></label>
            </div>
            <div tabindex="0">
            <input id="answer-3" type="radio" name="answer" value="${STORE[questionNumber].answers[2]}" required>
            <label class="answerOption" for="answer-3"><span>${STORE[questionNumber].answers[2]}</span></label>
            </div>
            <div tabindex="0">
            <input id="answer-4" type="radio" name="answer" value="${STORE[questionNumber].answers[3]}" required>
            <label class="answerOption" for="answer-4"><span>${STORE[questionNumber].answers[3]}</span></label>
            </div>
            <input type="submit"  value="SUBMIT" />
        </div>
        </fieldset>   
        </form>
        `
    };
    return false
}

$('.nextButton').on('click', function(event) {
    event.preventDefault();
    increaseQuestionNumber();
    if (questionNumber < STORE.length) {
        console.log(questionNumber);


        console.log(questionNumber);
        $('.resultsPage').hide();
        $('.quizPage').html(displayNextQuestion());
        console.log("`displayNextQuestion` working")
        $('.quizPage').show();
    } else {
        $('.nextButton').hide();
        $('.resultsPage').hide();
        renderFinalPage();
        $('.restartButton').show();
        $('.finalPage').show();
        $('.finalPage').prepend()
        console.log("rendering `finalPage`");
        return false
    };
})

function renderFinalPage() {
    if (score <= 5) {
        return $('.finalPage').prepend(
            `
            <img class="checkered-flags" src="https://cdn.bleacherreport.net/images/team_logos/328x328/formula_1.png" alt="checkered-flags"></img>
            <h2>You're an F1 newbie!</h2>
            <p>You got ${score} out of 10 correct. That's okay, you'll win next time! Hopefully you learned more about four of Formula One's most winning drivers. You'll get 'em next time!
            </p>
            `
        )
    }
    if (score >= 8) {
        return $('.finalPage').prepend(
            `
            <img class="checkered-flags" src="https://cdn.bleacherreport.net/images/team_logos/328x328/formula_1.png" alt="checkered-flags"></img>
            <h2>You finished in first place! </h2>
            <p>You got ${score} out of 10 correct. Well done, you're a true F1 fan!!</p>
            `
        )
    }
    if (score === 6 || score === 7) {
        return $('.finalPage').prepend(
            `
            <img class="checkered-flags" src="https://cdn.bleacherreport.net/images/team_logos/328x328/formula_1.png" alt="checkered-flags"></img>
            <h2>So close!</h2>
            <p>You got ${score} out of 10 correct. Following the sport a little while longer and you'll be a superstar F1 fan in no time!</p>
            `
        )
    };
}

$('.restartButton').on('click', function(event) {
    location.reload();
})

function startQuiz() {
    $('.firstPage').on('click', 'button', function(event) {
        event.preventDefault();
        $('.firstPage').hide();
        console.log("running `startQuiz`");
        $('.quizPage').append(displayQuestion());
    });
}
startQuiz();