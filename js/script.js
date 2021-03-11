window.onload = (event) => {
	const book = document.querySelector('#book');
	const bookStyle = getComputedStyle(book);
	const index = document.querySelector('#index');
	const indexStyle = getComputedStyle(index);
	if(bookStyle.display  == "inline-block"){
		if(indexStyle.position == "fixed"){
			console.log("hiding index");
			const indexContent = document.querySelector('#index-content');
			//indexContent.style.display = "none";
		} else{
			console.log("book exists but border is wrong");
			console.log(indexStyle.display);
		}
	} else{
		console.log("Not in desktop media (unable to find book left border)");
	}
};

function toggleIndex(){
	console.log("Toggling visibility of index");
	const indexContent = document.getElementById("index-content");
	if(indexContent.style.display == "none"){
		indexContent.style.display = "inline-block";
		console.log("it WASN'T visible, showing it now");
		document.getElementById("book").style.marginLeft = "0";
		document.getElementById("book").style.marginLeft = "200px";
		document.getElementById("hide-index").style.display = "block";
		document.getElementById("show-index").style.display = "none";
		document.getElementById("book").style.borderLeft = "1px solid #333";
	}
	else if(indexContent.style.display == "inline-block"){
		indexContent.style.display = "none";
		console.log("it WAS visible, hiding it now");
		document.getElementById("book").style.marginLeft = "0";
		document.getElementById("book").style.marginLeft = "auto";
		document.getElementById("hide-index").style.display = "none";
		document.getElementById("show-index").style.display = "block";
		document.getElementById("book").style.borderLeft = "";
	}else{
		console.log("neither");
	}
}

/* Access a question by using: questions[chapter][question].question */
const questions = [
	[
		{
			"question": "Which one of these principles isn't among the AWS Leadership Principles?",
			"options": [
				"Customer Obsession",
				"Ownership",
				"Are Right, A Lot",
				"Communicate communicate communicate"
			],
			"ansid": 4
		},
		{
			"question": "question 1",
			"options": [
				"o1 for q1",
				"o2 for q2",
				"o3 for q2",
				"o4 for q2"
			],
			"ansid": 0
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
			"ansid": 0
		},
		{
			"question": "question 1",
			"options": [
				"o1 for q1",
				"o2 for q2",
				"o3 for q2",
				"o4 for q2"
			],
			"ansid": 0
		}
	]
];

/* Going to load in questions for the quiz the same order every time.*/
function loadQuiz(chapter){
	const qsub_q = document.getElementById("q-title-num");
	qsub_q.innerHTML = 0;

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
	
	const statusBtn = document.getElementById("status-btn");
	statusBtn.style.color = "grey";
	statusBtn.innerHTML = "Waiting...";
}

function checkAnswer(chapter){
	const question = parseInt(document.getElementById("q-title-num").innerHTML);
	const statusBtn = document.getElementById("c0-sb");
	
	//const userAnswer = 
	const correctAnswer = questions[chapter][question].ansid-1;
	// if userAnswer (0-3) != correctAnswer, underline selected answers in red.
	// underline correct answer in green.
	// if was correct: statusBtn.innerHTML = "CORRECT"; statusBtn.color=$green;
	// else: statusBtn.innerHTML = "INCORRECT"; statusBtn.color=$red;
}