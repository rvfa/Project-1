// console.log('Ready!')


function checkScore() {


	//Each 'var questionX' checks the answer value. 
	var question1 = document.querySelector("input[name='question1']:checked").value;
	var question2 = document.querySelector("input[name='question2']:checked").value;
	var question3 = document.querySelector("input[name='question3']:checked").value;
	var question4 = document.querySelector("input[name='question4']:checked").value;
	var question5 = document.querySelector("input[name='question5']:checked").value;
	var question6 = document.querySelector("input[name='question6']:checked").value;
	var question7 = document.querySelector("input[name='question7']:checked").value;
	var question8 = document.querySelector("input[name='question8']:checked").value;
	var question9 = document.querySelector("input[name='question9']:checked").value;
	var question10 = document.querySelector("input[name='question10']:checked").value;


	// The variable 'score' multiplies each 'questionX' value by 10 giving you 10 points for each right answer and 0 points for each wrong answer. It also adds all the points you've got and returns your final score. 
	var score = question1 * 10 + question2 * 10 + question3 * 10 + question4 * 10 + question5 * 10 + question6 * 10 + question7 * 10 + question8 * 10 + question9 * 10 + question10 * 10;


	// console.log(score);

	// Writes your final score to the document and how many questions you've got right.
	document.querySelector(".finalScore").innerHTML = "Your final score is " + score + ". You've got " + score / 10 + " questions right!"


	// Shows the right answers after the final score. 
	document.querySelector(".answers").innerHTML = "Here are the right answers: " + "<br>" + "1) Tyrion Lannister" + "<br>" + "2) 14" + "<br>" + "3) The Dragon and The Wolf" + "<br>" + "4) Ser Pounce" + "<br>" + "5) Robert Baratheon" + "<br>" + "6) Howland Reed" + "<br>" + "7) 150,966" + "<br>" + "8) 2" + "<br>" + "9) 5 million USD" + "<br>" + "10) Tommen Lannister";
}


	



