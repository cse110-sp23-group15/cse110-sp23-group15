/**
 * Class that spechifies text inputs and highlights the text while speaking.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
 */
class Speechify {
	/**
	 * @param {obj} element The DOM element to spechify.
	 */
	constructor(element) {
		this.selectedVoice = null;
		this.text = null;
		this._allVoicesObtained = null;
		this.element = element;
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

	// TODO: Create functions to highlight the DOM element while speaking the text.
	// Make sure to remove the highlight when the speech is done.

	/**
	 * @return {Promise<[]>} Promise that resolves to an array of SpeechSynthesisVoice objects
	 */
	get voices() {
		return this._allVoicesObtained;
	}

	/**
	 * @return {SpeechSynthesisVoice} The selected voice
	 */
	get voice() {
		return this.selectedVoice;
	}

	/**
	 * @param {SpeechSynthesisVoice} voice The voice to be selected
	 */
	set voice(voice) {
		this.selectedVoice = voice;
	}

	/**
	 * @return {Promise<[]>} Promise that resolves to an array of voice names as strings
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
		this.selectedVoice = (await this.voices).find(
			(voice) => voice.name === voiceName
		);
	}

	/**
	 * @param {SpeechSynthesisUtterance} audio The audio to be played
	 * @return {Promise<SpeechSynthesisEvent>} Promise that resolves when the audio is done playing
	 */
	async play(audio) {
		window.speechSynthesis.speak(audio);

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
		this._allVoicesObtained.then((voices) => {
			this.text = text;
			const audio = new SpeechSynthesisUtterance(text);
			audio.voice = this.selectedVoice;

			// TODO: Highlight the text here

			this.play(audio).then(() => {
				// TODO: Remove the highlight here
			});
		});
	}
}

export { Speechify };
