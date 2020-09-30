var questions = [{
    question:"What is the baby of a Moth known as?",
    choices:["baby","infant","kit","larva"],
    correctAnswer: 3
},  {
    question:"What is the adult of a kid called",
    choice: ["calf","doe","goat","chicken"],
    correctAnswer: 2;
},  {
    question:"What is the adult of a kid called",
    choice: ["calf","doe","goat","chicken"],
    correctAnswer: 2;
}];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click",function() {
        if (!quizOver) {
            value = $("input[type='radio]:checked").val();
            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select your answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswer++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    dislayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hidescore();
        }
    });
});
function displayCurrentQuestion() {
    
    console.log("In display current Question");
    
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var chiceList = $(document).find(".quizContainer > .choiceList");
    var numChoice = questions[currentQuestion].choices.length;
    
    //set the questionclass text to the current question
    $(questionClass).text(question);
    
    //remove all current <li> element (if any)
    $(choiceList).find("li").remove();
    
    var choice;
    for (i = 0; i < numChoice; i++) {
        choice = questions[currentQuestion].choice[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio"/>' + choice + '</li>').appendTo(chiceList);
    }
}
function resetQuiz() {
    currentQuestion = 0;
    correctAnswer = 0;
    hideScore();
}

function displayScore() {
    $(document).find("quizContainer > .result").text("You scored: " + correctAnswer + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}