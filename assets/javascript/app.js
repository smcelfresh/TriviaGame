$(document).ready(function(){

//create array for trivia questions 
//create radio buttons for answer options
	var triviaQuestions = [{
		question: "What is the name of the inspiring dentist in Ruldolph the Red-Nosed Reindeer?",
		choices: ["Bob", "Dennis", "Ralph", "Hermey"],
		validAnswer: 3
		}, {
		question:"What is the #1 downloaded Christmas cellular ringtone?",
		choices: ["All I Want for Christmas is You by Mariah Carey", 
				"Grandma Got Run Over by a Reindeer by Elmo & Patsy",
				"Santa Baby by Eartha Kitt"],
		validAnswer: 0

		}, {
		question:"What percentage of people who bought a real Christmas trees, cut down their own tree?",
		choices: ["4%", "10%", "23%", "35%"],
		validAnswer: 2

		}, {
		question:"In what year was the movie 'A Christmas Story released?'",
		choices: ["1957", "1969", "1975", "1983"],
		validAnswer: 3

		}];
//Create click event when start button is pressed
	$("#start").click(function(){

//Select a question in the array
	var selection = triviaQuestions[Math.floor(Math.random()*5)];
	console.log(selection);
//Display question and choices
	$("#question").html(selection["question"]);
		
			for (i = 0; i < selection.choices.length; i++){
				$("#options").append("<button>" + selection["choices"] + "</button>");
			};

	var type = selection["validAnswer"];

	//hide new question generator for now
		$("#newQuestion").hide();
	//hide result for now until question is answered
		$("#result").hide();
		
	});
	//create click event when player selects their choice
	$(".choice").click(function() {
	//create var to hold the players selection
		var playersChoice;
		$("#result").show();
		$("#question").hide();
		$("#options").hide();
		
		if (playersChoice == type) {
			$("#result").html("<span class='correct'>Correct!</span>"); 
		} else {
			$("#result").html("<span class='incorrect'>Incorrect!</span");
		}
		
		$("#newQuestion").show();
	});
});
//show and start countdown timer when event fires to allow 90 seconds
 //to start counting down from 90 seconds. You must pass a function to event:
	var countDown = 10;
	var counter = setInterval(timer, 1000);
	function timer() 
	{
		countDown = countDown - 1;
		if (countDown <= 0) 
	
		{
			clearInterval(counter);
			//after counter ends, do somthing here
			return;
		}
		//code for showing the number of seconds here
		document.getElementById("timer").innerHTML = countDown + " secs";
	}
//end game once timer runs out or next question is pressed
	$("#newQuestion").click(function() {
	var selection = triviaQuestions[Math.floor(Math.random()*5)];
	$("#name").html(selection["question"]);
	type = selection["validAnswer"];
	$("#result").hide();
	$("#question").show();
	$("options").show();
	$("newQuestion").hide();
});

//create if/else statements to compare validAnswers
//reveal # of questions answer correctly & incorrectly