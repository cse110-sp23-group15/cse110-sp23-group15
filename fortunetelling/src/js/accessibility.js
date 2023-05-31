import { Speechify } from './speechify.js';

window.speechifyReady = null;

/**
 * General control of the accessibility switch
 */
async function accessibilitySwitch() {
	// Add event listener to the accessibility switch
	const accessibility = document.getElementsByName('accessibility');
	// Initialize Speechify object
	const speechify = new Speechify(null);
	const voices = await speechify.voices;
	// Select the first voice (default)
	speechify.voice = voices[0];
	accessibility[0].addEventListener('change', function () {
		if (this.checked) {
			speechify.reset();
			console.log('Accessibility On!');

			if (document.URL.includes('index')) {
				speechify.speechify(
					'Welcome to main page of tasty noodle fortune telling site'
				);
				accessElement(speechify);
				speechify.speechify(
					'Press the button and answer the questions to find out what noodle are you'
				);
			} else if (document.URL.includes('questionnaire.html')) {
				speechify.speechify(
					'Answer these questions, green being agree and red being disagree'
				);
				accessElement(speechify);
			} else if (document.URL.includes('about.html')) {
				speechify.speechify('About us, the tasty noodle team');
				accessElement(speechify);
			} else if (document.URL.includes('fortune.html')) {
				speechify.speechify('press the button below to see another noodle');
			} else if (document.URL.includes('profiles.html')) {
				speechify.speechify('Here are the profiles of all the noodles');
				accessElement(speechify);
			} else {
				accessElement(speechify);
			}
		} else {
			console.log('Accessibility Off!');
			speechify.terminate();
		}
	});
}

/**
 * Read all elements containig class 'read'
 * @param {Speechify} speechify The speechify object
 */
function accessElement(speechify) {
	const readText = document.getElementsByClassName('read');
	for (let i = 0; i < readText.length; i++) {
		speechify.speechifyHighlight(readText[i]);
	}
}

// export
export { accessibilitySwitch };
