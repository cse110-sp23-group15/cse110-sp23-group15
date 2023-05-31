/* general control of the accessibility switch
/ @param none
/ @return: none
*/
function accessswitch() {
	const synth = window.speechSynthesis;
	const voiceList = window.speechSynthesis.getVoices();
	const accessibility = document.getElementsByName('accessibility');
	accessibility[0].addEventListener('change', function () {
		console.log('change');
		if (accessibility[0].checked) {
			if (document.URL.includes('index')) {
				const intro = new SpeechSynthesisUtterance(
					'Welcom to main page of tasty noodle fortune telling site'
				);
				intro.rate = 2;
				intro.voice = voiceList[0];
				synth.speak(intro);
				console.log('intro');
			} else if (document.URL.includes('questionnaire')) {
				console.log('question');
			} else if (document.URL.includes('about')) {
				console.log('about');
			} else if (document.URL.includes('fortune')) {
				console.log('fortune');
			} else if (document.URL.includes('profiles')) {
				console.log('profiles');
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
			accessEn();
		} else {
			synth.cancel();
		}
	});
}

/* read everything with read class
/ @param none
/ @return: none
*/
function accessEn() {
	const synth = window.speechSynthesis;
	const readText = document.getElementsByClassName('read');
	const voiceList = window.speechSynthesis.getVoices();
	for (let i = 0; i < readText.length; i++) {
		const text = new SpeechSynthesisUtterance(readText[i].value);
		text.rate = 2;
		text.voice = voiceList[0];
		synth.speak(text);
	}
}

// export
export { accessswitch, accessEn };
