/** general control of the accessibility switch
 */
function accessswitch() {
	const synth = window.speechSynthesis;
	const voiceList = window.speechSynthesis.getVoices();
	const accessibility = document.getElementsByName('accessibility');
	accessibility[0].addEventListener('change', function () {
		if (this.checked) {
			if (document.URL.includes('index')) {
				const intro = new SpeechSynthesisUtterance(
					'Welcom to main page of tasty noodle fortune telling site'
				);
				intro.rate = 2;
				intro.voice = voiceList[0];
				synth.speak(intro);
				console.log('intro');
				accessEn();
				const end = new SpeechSynthesisUtterance(
					'press the button and aswer the questions to find out what noodle are you'
				);
				end.rate = 2;
				end.voice = voiceList[0];
				synth.speak(end);
			} else if (document.URL.includes('questionnaire.html')) {
				console.log('question');
				const intro = new SpeechSynthesisUtterance(
					'Answer these questions, green being agree and red being disagree'
				);
				intro.rate = 2;
				intro.voice = voiceList[0];
				synth.speak(intro);
				console.log('intro');
				accessEn();
			} else if (document.URL.includes('about.html')) {
				console.log('about');
				const intro = new SpeechSynthesisUtterance(
					'About us, the tasty noodle team'
				);
				intro.rate = 2;
				intro.voice = voiceList[0];
				synth.speak(intro);
				console.log('intro');
				accessEn();
			} else if (document.URL.includes('fortune.html')) {
				console.log('fortune');
				accessEn();
				const end = new SpeechSynthesisUtterance(
					'press the button below to see another noodle'
				);
				end.rate = 2;
				end.voice = voiceList[0];
				synth.speak(end);
			} else if (document.URL.includes('profiles.html')) {
				console.log('profiles');
				const intro = new SpeechSynthesisUtterance(
					'Here are the profiles of all the noodles'
				);
				intro.rate = 2;
				intro.voice = voiceList[0];
				synth.speak(intro);
				accessEn();
			} else {
				const intro = new SpeechSynthesisUtterance(
					'Welcom to main page of tasty noodle fortune telling site'
				);
				intro.rate = 2;
				intro.voice = voiceList[0];
				synth.speak(intro);
				accessEn();
				console.log('intro');
			}
		} else {
			synth.cancel();
		}
	});
}

/** read everything with read class */
function accessEn() {
	console.log('function');
	const synth = window.speechSynthesis;
	const readText = document.getElementsByClassName('read');
	const voiceList = window.speechSynthesis.getVoices();
	console.log(readText.length);
	for (let i = 0; i < readText.length; i++) {
		const text = new SpeechSynthesisUtterance(readText[i].innerHTML);
		console.log(readText[i].innerHTML);
		text.rate = 2;
		text.voice = voiceList[0];
		synth.speak(text);
	}
}

// export
export { accessswitch, accessEn };
