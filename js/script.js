window.onload = (event) => {
	
};

function toggleIndex(){
	console.log("Toggling visibility of index");
	const indexContent = document.getElementById("index-content");
	const hideBtn = document.getElementById("hide-index");
	const showBtn = document.getElementById("show-index");
	const toggleBtn = document.getElementById("index-toggle");

	if(indexContent.style.display == "none"){
		indexContent.style.display = "inline-block";
		showBtn.style.display = "none";
		hideBtn.style.display = "inline-block";
	} else{
		indexContent.style.display = "none";
		showBtn.style.display = "inline-block";
		hideBtn.style.display = "none";
	}
}

/* Access a question by using: questions[chapter][question].question */
const questions = [
	[
		{
			"question": "Which of these principles is among the AWS Leadership Principles?",
			"options": [
				"Customer Obsession",
				"Ownership",
				"Are Right, A Lot",
				"Be a leader, not a boss"
			],
			"ansid": [
				1,
				2,
				3
			]
		},
		{
			"question": "question 2",
			"options": [
				"o1 for q2",
				"o2 for q2",
				"o3 for q2",
				"o4 for q2"
			],
			"ansid": [
				1
			]
		},
		{
			"question": "question 3",
			"options": [
				"o1 for q3",
				"o2 for q3",
				"o3 for q3",
				"o4 for q3"
			],
			"ansid": [
				1
			]
		}
	],
	[
		{
			"question": "question 0",
			"options": [
				"o1 for q0",
				"o2 for q0",
				"o3 for q0",
				"o4 for q0"
			],
			"ansid": [
				1
			]
		},
		{
			"question": "question 1",
			"options": [
				"o1 for q1",
				"o2 for q2",
				"o3 for q2",
				"o4 for q2"
			],
			"ansid": [
				1
			]
		}
	]
];

/* Going to load in questions for the quiz the same order every time.*/
function loadQuiz(chapter){
	const qsub_q = document.getElementById("q-title-num");
	qsub_q.innerHTML = 1;

	const qrow = document.getElementById("c"+chapter+"-qr");
	const orow = document.getElementById("c"+chapter+"-or");
	qrow.style.filter = "none";
	orow.style.filter = "none";

	const question = document.getElementById("c"+chapter+"-q");
	var data = questions[chapter][0].question;
	question.innerHTML = questions[chapter][0].question;
	for(var i = 0; i < 4; i++){
		const option_i = document.getElementById("c"+chapter+"-o"+(i+1));
		option_i.innerHTML = questions[chapter][0].options[i];
	}
	
	const statusBtn = document.getElementById("c"+chapter+"-sb");
	statusBtn.style.color = "grey";
	statusBtn.innerHTML = "Waiting...";
}

function checkAnswer(chapter){
	const question = parseInt(document.getElementById("q-title-num").innerHTML) - 1;
	const statusBtn = document.getElementById("c"+chapter+"-sb");
	
	//const userAnswer = 
	const correctAnswer = questions[chapter][question].ansid-1;
	/* Will scan through all options to see how many c0-o#-c are display:inline-block;*/
	var amountCorrect = 0;
	var amountSelected = 0;
	/* For every option */
	for(var i = 1; i < 5; i++){
		const o_display = document.getElementById("c"+chapter+"-o"+i+"-c").style.display;
		const o_i_text = document.getElementById("c"+chapter+"-o"+i);
		let is_checked = true;
		if(o_display == "none"){
			is_checked = false;
		}
		/* For all correct answers */
		for(var j = 0; j < questions[chapter][question].ansid.length; j++){
			/* Compare option number with all correct answer ids*/	
			const answer_idx_i = questions[chapter][question].ansid[j];

			if(answer_idx_i == i && is_checked){
				o_i_text.style.textDecoration = "underline";
				o_i_text.style.textDecorationColor = "green";
				amountCorrect++;
				break;
			} else if(is_checked){
				o_i_text.style.textDecoration = "underline";
				o_i_text.style.textDecorationColor = "red";
			}
		}
		if(is_checked){
			amountSelected++;
		}
	}
	
	const amountofCorrectAnswers = questions[chapter][question].ansid.length;
	if(amountCorrect == amountofCorrectAnswers && amountSelected == amountofCorrectAnswers){
		statusBtn.innerHTML = "CORRECT";
		statusBtn.style.color= "green";
	} else if(amountSelected > 0){
		statusBtn.innerHTML = "CLOSE";
		statusBtn.style.color= "orange";
	} else{
		statusBtn.innerHTML = "INCORRECT";
		statusBtn.style.color= "red";
	}
}

function selectOption(chapter, option){
	console.log("selected option");
	const optionCheckElement = document.getElementById("c"+chapter+"-o"+option+"-c");
	if(optionCheckElement.style.display == "none"){
		optionCheckElement.style.display = "inline-block";
	} else{
		optionCheckElement.style.display = "none";
	}
}

function changeQuestion(chapter, changeby){
	const statusBtn = document.getElementById("c"+chapter+"-sb");
	statusBtn.innerHTML = "Waiting...";
	statusBtn.style.color= "grey";

	const qsub_q = document.getElementById("q-title-num");
	let qsub_q_val = parseInt(qsub_q.innerHTML)+changeby;
	const num_qs_for_chapter = questions[chapter].length + 1;
	// qsub_q_val is incorrect if 0 or length total q's
	if (qsub_q_val <= 0){
		qsub_q_val = num_qs_for_chapter-1;
	} else if(qsub_q_val >= num_qs_for_chapter){
		qsub_q_val = 1;
	}
	const squb_q_idx = qsub_q_val - 1;
	qsub_q.innerHTML = qsub_q_val;

	const qrow = document.getElementById("c"+chapter+"-qr");
	const orow = document.getElementById("c"+chapter+"-or");
	qrow.style.filter = "none";
	orow.style.filter = "none";

	const question = document.getElementById("c"+chapter+"-q");
	var data = questions[chapter][squb_q_idx].question;
	question.innerHTML = questions[chapter][squb_q_idx].question;
	for(var i = 0; i < 4; i++){
		const option_i = document.getElementById("c"+chapter+"-o"+(i+1));
		option_i.innerHTML = questions[chapter][squb_q_idx].options[i];
		
		option_i.style.textDecoration = "none";
		option_i.style.textDecorationColor = "";
		const optionCheckElement = document.getElementById("c"+chapter+"-o"+(i+1)+"-c");
		optionCheckElement.style.display = "none";
	}
}