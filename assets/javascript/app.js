// global variables 
let leftBlank = 0;
let timeLeft = 5;

// start button game 
$(document).ready(function () {

    $('#start').on('click', function () {
        $('#quiz').show();
        $('#start').hide();
        timer();
    });
});

// function to check answers 
function checkAnswers(){
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let question7 = document.quiz.question7.value;
    let question8 = document.quiz.question8.value;
    let question9 = document.quiz.question9.value;
    let question10 = document.quiz.question10.value;
    
    let correct = 0;
    let wrong = 0;

                if (question1 === "Germany"){
                    correct++;
            }   else if (question1 === ''){
                    leftBlank++;
            }   else {
                    wrong++;
            }
                if (question2 === 'Miroslav Klose'){
                    correct++;
            }    else if(question2 === '') {
                    leftBlank++;
            }   else {
                    wrong++;
            }

                if (question3 === 'Uruguay'){
                    correct++;
            }  else if (question3 === ''){
                    leftBlank++;
            }   else {
                    wrong++;
            }

            if (question4 === 'Mexico'){
                    correct++;
            }   else if(question4 === ''){
                    leftBlank++;
            }   else {
                    wrong++;
            }

            if (question5 === 'Ronaldo'){
                    correct++;
            }   else if (question5 === ''){
                    leftBlank++;
            }   else {
                    wrong++;
            }

            if (question6 === 'Netherlands'){
                correct++;
            }   else if (question6 === ''){
                leftBlank++;
            }   else {
                wrong++;
            }

            if (question7 === 'Faryd Mondragon'){
                correct++;
            }   else if (question7 === ''){
                leftBlank++;
            }   else {
                wrong++;
            }

            if (question8 === 'Russia'){
                correct++;
            }   else if (question8 === ''){
                leftBlank++;
            }   else {
                wrong++;
            }

            if (question9 === 'Brazil'){
                correct++;
            }   else if (question9 === ''){
                leftBlank++;
            }   else {
                wrong++;
            }

            if (question10 === 'Iceland'){
                correct++;
            }   else if (question10 === ''){
                leftBlank++;
            }   else {
                wrong++;
            }

    $('#quiz').hide();
    $('#correct').show();
    $('#correct').html('Number Correct: ' + correct);
    $('#wrong').html('Number Incorrect: ' + wrong);
    $('#unanswered').html('Left Blank: ' + leftBlank);
    $('#timer').hide();
    $('#button').hide();
    $('h1').hide();
    $('h2').show();
}
// timer functions 
function timer() {
    $('#timer').html('Time Remaining: ' + timeLeft);
    intervalId = setInterval(countDown, 1000);
}
// countdown function
function countDown() {
    timeLeft--;
    $('#timer').html('Time Remaining: ' + timeLeft);
    if (timeLeft === 0) {
        clearInterval(intervalId);
        $('#timer').empty();
        checkAnswers();
    }
}
// clear interval
function stopTimer(){
    clearInterval(intervalId);
}







