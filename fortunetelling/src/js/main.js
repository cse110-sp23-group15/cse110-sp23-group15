// WARNING: Main script that applies to all pages

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { accessibilitySwitch } from './accessibility.js';
import { getHoroscope, getDescription } from './genHoroscope.js';
import { Personality } from './personality.js';
import { Speechify } from './speechify.js';
import  transition  from './transition.js';


window.addEventListener('DOMContentLoaded', init);
const H = new highway.Core({
	transitions: {
		default: transition
	}
});
var getLinks = document.querySelectorAll('.navLink');
var Links = Array.from(getLinks);
var stylesheet = document.getElementsByClassName("style");
var homebutton = document.getElementsByClassName("home");
H.on('NAVIGATE_IN', ({to, location}) => {
	if(!(location.href.includes("index.html"))){
		Links[0].href = "profiles.html";
		Links[1].href = "about.html";
		homebutton[0].href = "../../index.html";
		homebutton[1].href = "../../index.html";
	}else{
		Links[0].href = "src/pages/profiles.html";
		Links[1].href = "src/pages/about.html";
		homebutton[0].href = "index.html";
		homebutton[1].href = "index.html";
	}
	if(location.href.includes("index.html")){
		stylesheet[0].href = "./src/css/index.css";
	} else if(location.href.includes("questionnaire.html")){
		stylesheet[0].href = "../css/questionnaire.css";
	} else if(location.href.includes("profiles.html")){
		stylesheet[0].href = "../css/profiles.css";
	} else if(location.href.includes("noodlesResults.html")){
		stylesheet[0].href = "../css/noodlesResults.css";
	} else if(location.href.includes("fortune.html")){
		stylesheet[0].href = "../css/fortune.css";
	} else if(location.href.includes("about.html")){
		stylesheet[0].href = "../css/about.css";
	}
});
/** On load function */
async function init() {
	// --- genHoroscope DEMO

	// console.log(await getHoroscope(1));
	// console.log(await getDescription(1));

	// --- Personality DEMO

	// const answers = [];
	// const personality = new Personality(answers);
	// await personality.evaluatePersonality();
	// console.log(personality.personality);

	// --- Speechify DEMO

	// const speechify = new Speechify();
	// const voices = await speechify.voices;
	//
	// // Selecting voice method 1:
	// const selectedVoice = voices[2];
	// speechify.voice = selectedVoice;
	//
	// // Selecting voice method 2:
	// // const selectedVoiceName = selectedVoice.name;
	// // speechify.selectVoiceName(selectedVoiceName);
	//
	// // NOTE: When debugging in Chrome, we need to create a button to trigger the speech.
	// // Ref: https://stackoverflow.com/a/54266831
	// //
	// // But for Firefox, it works without the button and would speak the text immediately.
	//
	// // UNCOMMENT THIS LINE TO TEST SPEECHIFY
	// // speechify.speechify('Hello world');
	// // speechify.speechify('Hello world');

	// Activate accessibility switch
	accessibilitySwitch();
}
