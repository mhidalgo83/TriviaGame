$(document).ready(function () {

    //Variables for game...
    var seconds;
    var intervalId;
    var correct;
    var incorrect;
    var unanswered;
    var userPick;
    var currentQuestion;
    var answered;
    var messages = {
        correct: "Correct",
        incorrect: "Incorrect",
        endTime: "Out of time",
        finished: "Are you a man?"
    }



    // Button to start game...
    var button = $("<button>").html("Start!");
    $("#button-start").html(button);

    // Trivia questions...
    var triviaQuestions = [{
        question: "What is the name of Ron Swanson's saxophone-playing alter ego?",
        answers: ["Ace Reagan", "Thelonius Blues", "Duke Silver", "Bud King"],
        correctAnswer: 2
    }, {
        question: "According to Ron, which holiday is scam?",
        answers: ["Valentine's Day", "Arbor Day", "Boxing Day", "Birthdays"],
        correctAnswer: 3
    }, {
        question: "What is Ron's secret hamburger recipe?",
        answers: ["'Instead of ground beef, just use steak.'", "'Instead of a bun, just use another hamburger.'", "'A hamburger made out of meat on a bun with nothing.'", "'Lawry's seasoning salt, both sides. Two pickles, two swipes of mustard, a thin layer of mayonnaise, on a brioche bun.'"],
        correctAnswer: 2
    }, {
        question: "What snack is known as a 'Swanson' around Pawnee?",
        answers: ["A turkey leg wrapped in bacon", "A burger topped with bacon and egg", "A 16oz T-Bone and a 24oz porterhouse", "All of the bacon and eggs you have"],
        correctAnswer: 0
    }, {
        question: "What tennis star does Ron list as being one of his ideal women?",
        answers: ["Anna Kournikova", "Serena Williams", "Steffi Graf", "Jennifer Capriati"],
        correctAnswer: 2
    }, {
        question: "How does Ron feel about salad?",
        answers: ["The best thing ever", "He isn't a rabbit, he won't eat it", "Good and good for you", "It need's ranch"],
        correctAnswer: 1
    }, {
        question: "Ron only officially recommends three products. Two are the U.S. Army issued mustache trimmers and the C.R. Lawrence Fein two-inch axe-style scraper oscillating knife blade. What is the third?",
        answers: ["Angus beef", "Remington ammuntion", "Old Spice", "Morton's Salt"],
        correctAnswer: 3
    }];

    var images = ['assets/images/duke_silver.gif', 'assets/images/birthday.jpg', 'assets/images/hamburger.jpg', 'assets/images/turkeyleg.gif', 'assets/images/steffi_graf.jpg', 'assets/images/rabbit.gif', 'assets/images/mortons_salt.jpg'];

    // Starts the game...
    $("#start").on('click', function(){
        $(this).hide();
        newGame();
    });

    $('#startOver').on('click', function(){
        $(this).hide();
        newGame();
    });


    function newGame(){
        $('#finalMessage').empty();
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        $('#unanswered').empty();
        currentQuestion = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        questionStart();
    }

    // Picks a question...
    function questionStart(){
        $("#image").empty();
        $("#message").empty();
        $('#correct').empty();
        $('#incorrect').empty();
        $('#finsihed').empty();
        answered = true;
        $("#question").html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
        for(var i = 0; i < 4; i++){
            var choices = $("<div>");
            choices.text(triviaQuestions[currentQuestion].answers[i]);
            choices.attr({"data-index": i });
            choices.addClass('thisChoice');
            $("#answer").append(choices);
        }
        timer();

        //clicking an answer will pause the time and setup answerPage
        $('.thisChoice').on('click',function(){
            userPick = $(this).data('index');
            clearInterval(intervalId);
            answerPage();
        });
    };
    




    function timer(){
        seconds = 15;
        $('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
        answered = true;
        intervalId = setInterval(showTimer, 1000);
    }

    function showTimer(){
        seconds--;
        $('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if(seconds < 1){
            clearInterval(intervalId);
            answered = false;
            answerPage();
        }
    }

    function answerPage(){
        $('#currentQuestion').empty();
        $('.thisChoice').empty(); //Clears question page
        $("#question").empty();
    
        var rightAnswer = triviaQuestions[currentQuestion].answers[triviaQuestions[currentQuestion].correctAnswer];
        var rightAnswer = triviaQuestions[currentQuestion].correctAnswer;
        $('#image').html("<img src="+images[currentQuestion]+" width: 300px;>");
        //checks to see correct, incorrect, or unanswered
        if((userPick == rightAnswer) && (answered == true)){
            correct++;
            $('#message').html(messages.correct);
            console.log(correct);
        } else if((userPick != rightAnswer) && (answered == true)){
            incorrect++;
            $('#message').html(messages.incorrect);
            console.log(incorrect);
        } else{
            unanswered++;
            $('#message').html(messages.endTime);
            answered = true;
            console.log(unanswered);
        }        
        if(currentQuestion == (triviaQuestions.length-1)){
            setTimeout(scoreboard, 5000)
        } else{
            currentQuestion++;
            setTimeout(questionStart, 5000);
        }	
    }

    function scoreboard(){
        $('#timer').empty();
        $('#message').empty();
        $('#image').empty();
        $('#finished').html("<h3>"+messages.finished+"</h3>");
        $('#correct').html("Correct Answers: " + correct);
        $('#incorrect').html("Incorrect Answers: " + incorrect);
        $('#unanswered').html("Unanswered: " + unanswered);
        $('#startOver').addClass('reset');
        $('#startOver').show();
        $('#startOver').html('Start Over?');
    }

});