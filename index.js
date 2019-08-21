console.log("working");
let score = 0;
console.log(score);
let questionNumber = 0;



/*
function showMainPage() {
    $('.header').remove();
    console.log("hello");
}
showMainPage();
*/

function displayQuestion() {
    console.log("running `displayQuestion`");
    console.log(STORE.length);
    if (questionNumber < STORE.length) {
        console.log(STORE.length);
        return `
        <form class="questionPage" role="form">
        <fieldset>
        <h2> ${STORE[questionNumber].question} </h2>
        <div class="answer-container">
            <label class="answerOption">
                <input type="radio" name="answer" value="${STORE[questionNumber].answers[0]}" required>
                <span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" name="answer" value="${STORE[questionNumber].answers[1]}" required>
                <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" name="answer" value="${STORE[questionNumber].answers[2]}" required>
                <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" name="answer" value="${STORE[questionNumber].answers[3]}" required>
                <span>${STORE[questionNumber].answers[3]}</span>
            </label>
        </div>
        <button type="submit" class="submitButton">Submit</button>
        </fieldset>
        
        </form>
        `;
        
    
        
        


    }
}
displayQuestion();

function startQuiz() {
    $('.main').on('click', 'button', function(event) {
        event.preventDefault();
        $('.firstPage').remove();
        console.log("running `startQuiz`");
        $('.quizPage').append(displayQuestion());
    });
}
startQuiz();
/*
function handleQuizApp() {
    startQuiz();

}
*/