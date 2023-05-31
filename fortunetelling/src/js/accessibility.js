import { Speechify } from './speechify.js';

/**
 * General control of the accessibility switch
 */
function accessswitch() {
	const accessibility = document.getElementsByName('accessibility');
	accessibility[0].addEventListener('change', async function () {
		if (this.checked) {
			const speechify = new Speechify(null);
			const voices = await speechify.voices;
			speechify.voice = voices[0];
			if (document.URL.includes('index')) {
				speechify.speechify(
					'Welcome to main page of tasty noodle fortune telling site'
				);
				accessEn();
				speechify.speechify(
					'Press the button and answer the questions to find out what noodle are you'
				);
			} else if (document.URL.includes('questionnaire.html')) {
				speechify.speechify(
					'Answer these questions, green being agree and red being disagree'
				);
				accessEn();
			} else if (document.URL.includes('about.html')) {
				speechify.speechify('About us, the tasty noodle team');
				accessEn();
			} else if (document.URL.includes('fortune.html')) {
				speechify.speechify('press the button below to see another noodle');
			} else if (document.URL.includes('profiles.html')) {
				speechify.speechify('Here are the profiles of all the noodles');
				accessEn();
			} else {
				accessEn();
			}
		}
	});
}

/** read everything with read class */
async function accessEn() {
	const readText = document.getElementsByClassName('read');
	for (let i = 0; i < readText.length; i++) {
		const speechify = new Speechify(readText[i]);
		const voices = await speechify.voices;
		speechify.voice = voices[0];
		speechify.speechifyHighlight();
	}
}

// export
export { accessswitch, accessEn };
