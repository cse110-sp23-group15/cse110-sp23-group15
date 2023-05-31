/**
 * Class that spechifies text inputs and highlights the text while speaking.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
 */
class Speechify {
	/**
	 * @param {obj} element The DOM element to spechify.
	 */
	constructor(element) {
		this._voice = null;
		this._allVoicesObtained = null;
		this._element = element;
		this._init();
	}

	/** Load SpeechSynthesis voices */
	_init() {
		this._allVoicesObtained = new Promise(function (resolve, reject) {
			let voices = window.speechSynthesis.getVoices();
			if (voices.length !== 0) {
				resolve(voices);
			} else {
				window.speechSynthesis.addEventListener('voiceschanged', function () {
					voices = window.speechSynthesis.getVoices();
					resolve(voices);
				});
			}
		});
	}

	/**
	 * @return {Promise} Promise that resolves to an array of SpeechSynthesisVoice objects
	 */
	get voices() {
		return this._allVoicesObtained;
	}

	/**
	 * @return {SpeechSynthesisVoice} The selected voice
	 */
	get voice() {
		return this._voice;
	}

	/**
	 * @return {obj} The DOM element to spechify.
	 */
	get element() {
		return this._element;
	}

	/**
	 * @param {SpeechSynthesisVoice} voice The voice to be selected
	 */
	set voice(voice) {
		this._voice = voice;
	}

	/**
	 * @param {obj} element The DOM element to spechify.
	 */
	set element(element) {
		this._element = element;
	}

	/**
	 * @return {Promise} Promise that resolves to an array of voice names as strings
	 */
	async getVoiceNames() {
		return await this.voices.then((voices) => {
			return voices.map((voice) => voice.name);
		});
	}

	/**
	 * @param {string} voiceName The name of the voice to be selected
	 */
	async selectVoiceName(voiceName) {
		this._voice = (await this.voices).find((voice) => voice.name === voiceName);
	}

	/**
	 * @param {SpeechSynthesisUtterance} audio The audio to be played
	 * @return {Promise<SpeechSynthesisEvent>} Promise that resolves when the audio is done playing
	 */
	async play(audio) {
		// Wait for the other audio to finish playing
		while (window.speechSynthesis.speaking) {
			await new Promise((resolve) => setTimeout(resolve, 100));
		}

		console.log('now playing');
		window.speechSynthesis.speak(audio);

		// Return a promise that resolves when the audio is done playing
		return new Promise((resolve) => {
			audio.onend = resolve;
		});
	}

	// TODO: Modify this function to highlight the text under this.element while speaking the text.
	// Make sure to remove the highlight when the speech is done.
	/**
	 * @param {string} text The text to be speechified
	 */
	speechify(text) {
		this._allVoicesObtained.then((_) => {
			const audio = new SpeechSynthesisUtterance(text);
			audio.voice = this._voice;
			this.play(audio);
		});
	}

	/**
	 * Speechify the the innerHTML of an element and highlight the text while speaking.
	 */
	speechifyHighlight() {
		this._allVoicesObtained.then(async (_) => {
			if (!this._element) {
				throw new Error('Speechify: No element selected');
			}

			const audio = new SpeechSynthesisUtterance(this._element.innerHTML);
			audio.voice = this._voice;

			// Wait for the other audio to finish playing
			while (window.speechSynthesis.speaking) {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}

			// Highlight the text while speaking

			this._element.classList.add('speechify-highlight');

			// Remove the highlight when the speech is done
			this.play(audio).then(() => {
				this._element.classList.remove('speechify-highlight');
			});
		});
	}

	/** Cancel all speech audio from the utterance queue */
	reset() {
		window.speechSynthesis.cancel();
	}

	/** Remove all speech audio and text highlights */
	terminate() {
		this.reset();
		// Remove all speechify-highlight classes
		const highlightedElements = document.querySelectorAll(
			'.speechify-highlight'
		);
		highlightedElements.forEach((element) => {
			element.classList.remove('speechify-highlight');
		});
	}
}

export { Speechify };
