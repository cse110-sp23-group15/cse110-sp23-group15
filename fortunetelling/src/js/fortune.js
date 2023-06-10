// fortune.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { getHoroscope, getNoodleData } from './genHoroscope.js';
import { getLocalStorage } from './utils.js';

// upon loading, call updatenoodle, passing in the noodleIndex from local storage
document.addEventListener('DOMContentLoaded', init);

/** On load function */
async function init() {
	const dropbtn = document.getElementById('dropbtn');
	const noodleButtons = document.getElementsByClassName('noodleButton');
	dropbtn.addEventListener('click', buttonFunct);

	for (let i = 0; i < noodleButtons.length; i++) {
		noodleButtons[i].addEventListener('click', function () {
			updateNoodle(i);
		});
	}

	let noodleIndex = getLocalStorage('myNoodleIndex');
	// typecase noodleIndex to int
	noodleIndex = parseInt(noodleIndex);
	updateNoodle(noodleIndex);
}

/**
 * @param {int} newNoodleIndex The index of the noodle to be displayed
 */
async function updateNoodle(newNoodleIndex) {
	const noodleData = await getNoodleData();
	document.getElementById('noodle-image').src = noodleData[newNoodleIndex].path;
	document.getElementById('noodle-image').alt =
		noodleData[newNoodleIndex].noodleName;
	document.getElementById('fortuneText').innerText = await getHoroscope(
		newNoodleIndex + 1
	);
}

/** Function to toggle dropbown */
function buttonFunct() {
	document.getElementById('myDropdown').classList.toggle('show');
}
