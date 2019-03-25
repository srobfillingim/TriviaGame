    
$( window ).on( "load", function() {

    var questions = [
        {question: "When it's head is cut off, two more grow back. Which mythological Greek creature does this describe?",
        answers: [
            {text: "Cerberus",
             value: false,},
            {text: "Hydra",
             value: true,},
            {text: "Gorgon",
             value: false,},
            {text: "Chimera",
             value: false}]
        },
        {question: "Who designed the great labyrinth?",
        answers: [
            {text: "Perseus",
             value: false,},
            {text: "Apollo",
             value: false,},
            {text: "Daedelus",
             value: true,},
            {text: "Odysseus",
             value: false}]
        },
        {question: "Who is the queen of the underworld and wife of Hades?",
        answers: [
            {text: "Persephone",
             value: true,},
            {text: "Demeter",
             value: false,},
            {text: "Hera",
             value: false,},
            {text: "Artemis",
             value: false}]
        },
        {question: "There was one tree in Athens that was considered sacred. Which tree was it?",
         answers: [
             {text: "Poplar tree",
             value: false},
             {text: "Olive tree",
             value: true},
             {text: "Pine tree",
             value: false},
             {text: "Fir tree",
             value: false}]
        },
        {question: "Poseidon, god of the sea, had one animal in particular that was associated with him. What was it?",
         answers: [
             {text: "Octopus",
             value: false},
             {text: "Shark",
             value: false},
             {text: "Wolf",
             value: false},
             {text: "Horse",
             value: true}]
         },
         {question: "Hercules after he killed his wife and children was told by Apollo to serve the kind of Mycenae for 12 years completing 12 labors. which of these was not one of the 12 labors?",
         answers: [
             {text: "Sinis the Giant",
             value: true},
             {text: "Cerberus",
             value: false},
             {text: "The Apples of Hesperides",
             value: false},
             {text: "The Nemean Lion",
             value: false}]
        },
        {question: "Every nine years, which monster required seven maids and seven youths to be fed to it?",
        answers: [
            {text: "The Nemean Lion",
            value: false},
            {text: "Minotaur",
            value: true},
            {text: "Sirens",
            value: false},
            {text: "Cyclops",
            value: false}]
        },
        {question: "Olympus was the home of the gods, but there were a specific number of them that lived there. How many?",
        answers: [
            {text: "6",
            value: false},
            {text: "12",
            value: true},
            {text: "13",
            value: false},
            {text: "18",
            value: false}]
        },
        {question: "Which one of these gods was actually a Titan?",
        answers: [
            {text: "Zeus",
            value: false},
            {text: "Kronos",
            value: true},
            {text: "Hera",
            value: false},
            {text: "Hercules",
            value: false}]
        },
        {question: "A moon of Pluto is called Charon. What did Charon do in Greek Mythology?",
        answers: [
            {text: "He tows the sun across the sky.",
            value: false},
            {text: "He is the messenger for the gods.",
            value: false},
            {text: "He ferries the dead across the River Styx.",
            value: true},
            {text: "He Weighs the hearts of the dead.",
            value: false}]
        }];
    
    var score = 0;
    
    $("#start").click(function game() {
    
        var questionCounter = questions[0]
        var currentQuestion = questionCounter;
    
        var counter = 20;
    
        function reset(){
            counter = 20;
            questionCounter++;
            //game();
        }
    
        setInterval(function(){
            counter --;
            if (counter >= 0){
                span = $("#count");
                span.html(counter);
            }
            if (counter <= 0){
                reset();
            }
        }, 1000);
    
        $("#question").empty();
    
        $("#question").text(currentQuestion.question);
    
        for (var i = 0; i < currentQuestion.answers.length; i++) {
            console.log(currentQuestion.answers.length);
            var answers = $("<btn/>")
            .addClass("btn btn-success")
            .addClass("answerButtons")
            .attr("data-name", currentQuestion.answers[i].text)
            .attr("data-value", currentQuestion.answers[i].value)
            .text(currentQuestion.answers[i].text);
            $("#a1").append(answers);
        };
    
        $(".answerButtons").on("click", function(){
            console.log($(this).attr("data-value"));
    
            if ($(this).attr("data-value") = true) {
                    reset();
                    score++;
            }else{
                    reset();
            }
            
        });
    
    
    
        });
    
    
    
    
    
    
    });