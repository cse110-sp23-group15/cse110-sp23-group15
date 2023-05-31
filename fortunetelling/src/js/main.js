import { accessswitch } from './accessibility.js';
import { getHoroscope, getDescription } from './genHoroscope.js';
import { Personality } from './personality.js';
import { Speechify } from './speechify.js';

window.addEventListener('DOMContentLoaded', init);

/** On load function */
async function init() {
	// --- genHoroscope DEMO

	console.log(await getHoroscope(1));
	console.log(await getDescription(1));

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
	// speechify.speechify('Hello world');

	accessswitch();
}
