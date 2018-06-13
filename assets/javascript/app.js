// create array with question data 
$(document).ready(function () {
    let myQuestions = [
        {
            question: 'Which country won the 2014 FIFA World Cup?',
            choices: ['Brazil', 'Germany', 'Spain', 'Netherlands'],
            answer: 'Germany',
        }, {
            question: 'Which nation has won the most world cups?',
            choices: ['Germany', 'Itay', 'France', 'Brazil'],
            answer: 'Brazil',
        }, {
            question: 'Who has scored the most world cup goals?',
            choices: ['Miroslav klose', 'Ronaldo', 'Ronaldinho', 'Landon Donovan'],
            answer: 'Miroslav Klose',
        }
    ];

    let userPick;
    let rightAnswer = 0;
    let wrongAnswer = 0;
    let leftBlank = 0;
    let question = 0;
    let count = 15;

    $('#start').on('click', function () {
        $(this).hide();
        counter = setInterval(timer, 1000);
        displayGame();

    })

    function timer() {
        count--;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }
        $('#timer').html('Time remaining: ' + count + ' secs');
    }

    function displayGame() {
        $('#question').html(myQuestions[0].question);
        question++;

        let choicesArr = myQuestions[0].choices;
        // let buttonArr = [];

        for (let i = 0; i < choicesArr.length; i++) {
            let answerList = $('<div>');
            answerList.addClass('answerbutton');
            answerList.text(choicesArr[i]);
            // answerList.attr('data-id', i);
            $('#answer').append(answerList);
        }

    }

    $('.answerbutton').on('click',function() {
        // userPick = $(this).data('id');
        // myQuestions[0].answer;
        console.log('test');
        if (userPick != myQuestions[0].answer) {
            $('#answer').text('NO! NO! NO! That/s Wrong!');
            wrongAnswer++;

        } else if (userPick === myQuestions[0].answer) {
            $('#answer').text('Nice Work!');
            rightAnswer++;
        }
    });
});


// start button and restart game button 

// game functions 


// next question function 


	//sets up new questions & answerList

	//clicking an answer will pause the time and setup answerPage

// timer countdown function 


// show time countdown function 


// answerpage function that tracks right, wrong and not answered counters 
// display results function 




