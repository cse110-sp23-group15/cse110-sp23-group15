// questionnaire.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

// upon loading, call updatenoodle, passing in the noodleIndex from local storage
document.addEventListener('DOMContentLoaded', init);
const QUESTIONS = 10; // Questionnaire Length

/** On load function */
function init() {
	gradeQuiz();
}

/**
 * Grades the quiz and returns the closest personality.
 */
function gradeQuiz() {
	const submitButton = document.querySelector('#submit');

	submitButton.addEventListener('click', function () {
		const link = document.querySelector('#next');
		const answers = document.getElementsByName('qRadio');
		let answerCnt = 0;
		let pnts = 0;

		// Go through each question and tally up the points.
		for (let i = 0; i < answers.length; i++) {
			if (answers[i].checked) {
				const response = answers[i].className;

				if (response == 'negative') {
					pnts += 1;
					answerCnt++;
				} else if (response == 'slightlyNegative') {
					pnts += 2;
					answerCnt++;
				} else if (response == 'neutral') {
					pnts += 3;
					answerCnt++;
				} else if (response == 'slightlyPositive') {
					pnts += 4;
					answerCnt++;
				} else if (response == 'positive') {
					pnts += 5;
					answerCnt++;
				}
			}
		}

		// Makes sure the user has answered all the questions.
		if (answerCnt != QUESTIONS) {
			alert('You have not answered all the questions.');
		} else {
			const hash = pnts % 12;
			localStorage.setItem('myNoodleIndex', hash);
			link.setAttribute('href', './noodlesResults.html');
		}
	});
}
