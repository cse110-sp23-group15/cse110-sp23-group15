// Accessibility script for text-to-speech functionalities

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { Speechify } from './speechify.js';

/**
 * General control of the accessibility switch
 */
async function accessibilitySwitch() {
	// Add event listener to the accessibility switch

	const accessibility = document.getElementsByName('accessibility');
	// Initialize Speechify object
	const speechify = new Speechify(null);
	const isBrowserSupported = speechify.checkBrowserSupport();
	const voices = await speechify.voices;
	speechify.voice = voices[0]; // Select the first voice (default)
	speechify.reset(); // Reset speechify. Also makes window.speechifyReady = true
	if (localStorage.getItem('accessibility') == null) {
		localStorage.setItem('accessibility', false);
	} else if (localStorage.getItem('accessibility') == 'true') {
		setTimeout(() => {
			accessibility[0].click();
		}, 1);
	}
	accessibility[0].addEventListener('click', function () {
		console.log('event triggered');
		if (!isBrowserSupported) {
			alert('Your browser does not support speech synthesis');
			return;
		}
		if (this.checked) {
			localStorage.setItem('accessibility', true);
			if (!isBrowserSupported) {
				alert('Your browser does not support speech synthesis');
				return;
			} else if (voices.length === 0) {
				alert('No voices installation found');
				return;
			}

			speechify.reset();
			speechify.makeReady();
			console.log('Accessibility On!');
			let time = 0;
			if (document.URL.includes('index')) {
				speechify.speechify(
					'Welcome to main page of tasty noodle fortune telling site'
				);
				speechify.speechify(
					'Press the button and answer the questions to find out what noodle are you'
				);
				time = 8000;
			} else if (document.URL.includes('questionnaire.html')) {
				speechify.speechify(
					'Welcome to the questionnaire page. Answer the questions to find out what noodle are you'
				);
				time = 5000;
			} else if (document.URL.includes('about.html')) {
				speechify.speechify('About us, the tasty noodle team');
				time = 2000;
			} else if (document.URL.includes('fortune.html')) {
				speechify.speechify('press the button below to see another noodle');
				time = 2000;
			} else if (document.URL.includes('profiles.html')) {
				speechify.speechify('Here are the profiles of all the noodles');
				time = 2000;
			} else if (document.URL.includes('noodlesResults')) {
				speechify.speechify('Here is your result!');
				time = 2000;
			}
			setTimeout(function () {
				accessElement(speechify);
				readChoice(speechify);
			}, time);
		} else {
			const readEnabled = document.getElementsByClassName('speechify');
			for (let i = 0; i < readEnabled.length; i++) {
				readEnabled[i].parentNode.replaceChild(
					readEnabled[i].cloneNode(true),
					readEnabled[i]
				);
			}
			localStorage.setItem('accessibility', false);
			speechify.terminate();
			console.log('Accessibility Off!');
		}
	});
}

/**
 * Inject event listeners to elements with class 'speechify' and 'speechify-onload'
 * to enable text-to-speech on mouseover and click and on page load respectively.
 * @param {Speechify} speechify The speechify object
 */
function accessElement(speechify) {
	// Enable speechify on mouseover and click
	const readEnabled = document.getElementsByClassName('speechify');
	for (let i = 0; i < readEnabled.length; i++) {
		readEnabled[i].addEventListener('mouseover', (_) => {
			speechify.reset();
			speechify.speechifyHighlight(readEnabled[i]);
		});

		readEnabled[i].addEventListener('click', (_) => {
			speechify.reset();
			speechify.speechifyHighlight(readEnabled[i]);
		});
	}
}
/**
 * read the selected choice of the user on the questionaire page
 * @param {Speechify} speechify The speechify object
 */
function readChoice(speechify) {
	const choices = document.querySelectorAll('input[type=radio]');
	const choicearray = Array.from(choices);
	for (let i = 0; i < choicearray.length; i++) {
		choicearray[i].addEventListener('click', (_) => {
			speechify.reset();
			speechify.speechify(choicearray[i].getAttribute('class'));
		});
	}
}
// export
export { accessibilitySwitch };
