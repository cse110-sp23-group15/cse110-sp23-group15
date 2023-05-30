import { getHoroscope, getNoodleDescription } from './genHoroscope.js';
import { Personality } from './personality.js';
import { Speechify } from './speechify.js';

window.addEventListener('DOMContentLoaded', init);

/** On load function */
async function init() {

	await addQuestions();

	// --- genHoroscope DEMO

	console.log(await getHoroscope(1));
	console.log(await getNoodleDescription(1));

	// --- Personality DEMO

	const answers = [];
	const personality = new Personality(answers);
	await personality.evaluatePersonality();
	console.log(personality.personality);

	// --- Speechify DEMO

	const speechify = new Speechify();
	const voices = await speechify.voices;

	// console.log(voices);

	// Selecting voice method 1:
	const selectedVoice = voices[2];
	speechify.voice = selectedVoice;

	// Selecting voice method 2:
	// const selectedVoiceName = selectedVoice.name;
	// speechify.selectVoiceName(selectedVoiceName);

	// NOTE: When debugging in Chrome, we need to create a button to trigger the speech.
	// Ref: https://stackoverflow.com/a/54266831
	//
	// But for Firefox, it works without the button and would speak the text immediately.

	// UNCOMMENT THIS LINE TO TEST SPEECHIFY
	// speechify.speechify('Hello world');
}

/**
 * Populates the questionnaire page with the questions.
 */
async function addQuestions() {
	const data = await fetch('../js/database/questionnaire.json');
	const questions = await data.json();
	const mainRef = document.querySelector('main');

	let curQuestion;
	
	for (let i = 1; i < questions.length; i++) {
		const newDiv = document.createElement('div');
		const beforeButton = document.querySelector('.submitButton');

		newDiv.innerHTML = `<h2>` + questions[i].description + `</h2>` +
		`<form id="question"><a>Disagree</a><input type="radio" name="disagree" />
		<input type="radio" name="slightly disagree" /><input type="radio" name="neutral" />
		<input type="radio" name="slightly agree" /><input type="radio" name="agree" /><a>Agree</a></form>`;

		newDiv.setAttribute('id', `div${i}`);
		mainRef.appendChild(newDiv);
		newDiv.after(beforeButton);
	}
}

/**
 * Grades the quiz and returns the closest personality.
 */
async function gradeQuiz() {

}