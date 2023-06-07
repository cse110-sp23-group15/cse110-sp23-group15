// questionnaire.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { getJSON } from './utils.js';
import { getHoroscope, getNoodleData } from './genHoroscope.js';

// upon loading, call updatenoodle, passing in the noodleIndex from local storage
document.addEventListener('DOMContentLoaded', init);
const QUESTIONS = 10;

/** On load function */
async function init() {
	await addQuestions();
	await gradeQuiz();
}

/**
 * Populates the questionnaire page with the questions.
 */
async function addQuestions() {
	const questions = await getJSON('./database/questionnaire.json');
	const mainRef = document.querySelector('main');

	for (let i = 0; i < questions.length; i++) {
		const newDiv = document.createElement('div');
		const beforeButton = document.querySelector('.submitButton');
		const footer = document.querySelector('.footer');

		newDiv.innerHTML =
			`<h2 class="speechify speechify-onload">` +
			questions[i].description +
			`</h2>` +
			`<form id="question"><a class = "disagree">Disagree</a><input type="radio" name="qRadio" class="negative"/>
		<input type="radio" name="qRadio" class="slightlyNegative"/><input type="radio" name="qRadio" class="neutral"/>
		<input type="radio" name="qRadio" class="slightlyPositive"/><input type="radio" name="qRadio" class="positive"/>
		<a class = "agree">Agree</a></form>`;

		newDiv.setAttribute('id', `div${i}`);
		newDiv.setAttribute('class', 'Question');
		mainRef.appendChild(newDiv);
		newDiv.after(footer);
		newDiv.after(beforeButton);
	}
}

/**
 * Grades the quiz and returns the closest personality.
 */
async function gradeQuiz() {
	const noodleData = await getNoodleData();
	const submitButton = document.querySelector('#submit');

	submitButton.addEventListener("click", function() {
		const link = document.querySelector('#next');
		const answers = document.getElementsByName('qRadio');
		let answerCnt = 0;
		let pnts = 0;

		for (let i = 0; i < answers.length; i++) {
			if (answers[i].checked) {
				let response = answers[i].className;

				if (response == "negative") {
					pnts += 1;
					answerCnt++;
				} else if (response == "slightlyNegative") {
					pnts += 2;
					answerCnt++;
				} else if (response == "neutral") {
					pnts += 3;
					answerCnt++;
				} else if (response == "slightlyPositive") {
					pnts += 4;
					answerCnt++;
				} else if (response == "positive") {
					pnts += 5;
					answerCnt++;
				}
			}
		}

		if (answerCnt != QUESTIONS) {
			alert('You have not answered all the questions.');
		} else {
			let hash = pnts % 12;
			localStorage.setItem('noodle', noodleData[hash]["path"]);
			localStorage.setItem('noodleIndex', hash);
			link.setAttribute('href','./noodlesResults.html');
		}
	});
}
