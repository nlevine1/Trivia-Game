let questions = [
    {
        question: "Which nation won the 2014 FIFA World Cup?",
        answerChoices: ['Brazil','Germany','Spain','Netherlands'],
        answer: 'Germany',
    },{
        question: 'Which nation has won the most world cups?',
        answerChoices: ['Germany','Itay','France','Brazil'],
        answer: 'Brazil',
    },{
        question: 'Who has scored the most world cup goals?',
        answerChoices: ['Miroslav klose','Ronaldo','Ronaldinho','Landon Donovan'],
        answer: 'Miroslav Klose',
    }
];

// global variables
let currentQuestion;
let correctAnswer;
let wrongAnswer;
let leftBlank;
let seconds;
let time;
let answered;
let userChoice;
let messages = {
    correct: 'Waahoooo!',
    wrong: 'Wrong Wrong Wrong!',
    timeOut: 'You are out of time!',
    finished: 'You did it!, score time.'
}

$(document).ready(function(){

    $('#start').on('click', function(){
        $(this).hide();
        // newGame();
    });

    $('#new-game').on('click', function(){
        $(this).hide();
        // newGame();
    });

});


