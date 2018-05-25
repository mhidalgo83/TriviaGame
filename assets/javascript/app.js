$(document).ready(function () {

    //Timer for game....
    var timer = 30;


    // Button to start game...
    var button = $("<button>").html("Start!");
    $("#button-start").html(button);

    // Trivia questions...
    var question1 = {
        question: "What is the name of Ron Swanson's saxophone-playing alter ego?",
        answer1: "Ace Reagan",
        answer2: "Thelonius Blues",
        answer3: "Duke Silver",
        answer4: "Bud King",
    }

    var question2 = {
        question: "According to Ron, which holiday is scam?",
        answer1: "Valentine's Day",
        answer2: "Arbor Day",
        answer3: "Boxing Day",
        answer4: "Birthdays",
    }

    var question3 = {
        question: "What is Ron's secret hamburger recipe?",
        answer1: "'Instead of ground beef, just use steak.'",
        answer2: "'Instead of a bun, just use another hamburger.'",
        answer3: "'A hamburger made out of meat on a bun with nothing.'",
        answer4: "'Lawry's seasoning salt, both sides. Two pickles, two swipes of mustard, a thin layer of mayonnaise, on a brioche bun.'",
    }

    var question4 = {
        question: "What snack is known as a 'Swanson' around Pawnee?",
        answer1: "A turkey leg wrapped in bacon",
        answer2: "A burger topped with bacon and egg",
        answer3: "A 16oz T-Bone and a 24oz porterhouse",
        answer4: "All of the bacon and eggs you have",
    }

    var question5 = {
        question: "What tennis star does Ron list as being one of his ideal women?",
        answer1: "Anna Kournikova",
        answer2: "Serena Williams",
        answer3: "Steffi Graf",
        answer4: "Jennifer Capriati",
    }

    var question6 = {
        question: "Ron keeps a photo album with pictures of what?",
        answer1: "Every Sports Illustrated cover of Steffi Graf",
        answer2: "Every steak he has eaten at Charles Mulligan's",
        answer3: "Eggs",
        answer4: "Every flute he has ever carved",
    }

    var question7 = {
        question: "Ron only officially recommends three products. Two are the U.S. Army issued mustached trimmers and the C.R. Lawrence Fein two-inch axe-style scraper oscillating knife blade. What is the third?",
        answer1: "Angus beef",
        answer2: "Remington ammuntion",
        answer3: "Old Spice",
        answer4: "Morton's Salt",
    }
    
    var intervalId;

    function questionStart() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        timer--;
        $("#timer").text("Timer: " + timer + " seconds");
        if (timer === 0) {
            $()
        }
    }



});
