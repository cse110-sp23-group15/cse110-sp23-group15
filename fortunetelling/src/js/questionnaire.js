import { getJSON } from './utils.js';

// upon loading, call updatenoodle, passing in the noodleIndex from local storage
document.addEventListener('DOMContentLoaded', init);

/** On load function */
async function init() {
	await addQuestions();
}

/**
 * Populates the questionnaire page with the questions.
 */
async function addQuestions() {
	const questions = await getJSON('./database/questionnaire.json');
	const mainRef = document.querySelector('main');

	let curQuestion;

	for (let i = 1; i < questions.length; i++) {
		const newDiv = document.createElement('div');
		const beforeButton = document.querySelector('.submitButton');

		newDiv.innerHTML =
			`<h2>` +
			questions[i].description +
			`</h2>` +
			`<form id="question"><a class = "disagree">Disagree</a><input type="radio" name="qRadio" class="negative"/>
		<input type="radio" name="qRadio" class="slightlyNegative"/><input type="radio" name="qRadio" class="neutral"/>
		<input type="radio" name="qRadio" class="slightlyPositive"/><input type="radio" name="qRadio" class="positive"/>
		<a class = "agree">Agree</a></form>`;

		newDiv.setAttribute('id', `div${i}`);
		newDiv.setAttribute('class', 'Question');
		mainRef.appendChild(newDiv);
		newDiv.after(beforeButton);
	}
}

/**
 * Grades the quiz and returns the closest personality.
 */
async function gradeQuiz() {}
