import { getHoroscope, getDescription } from './genHoroscope.js';

const dropbtn = document.getElementById('dropbtn');
const noodleButtons = document.getElementsByClassName('noodleButton');
dropbtn.addEventListener('click', buttonFunct);

let noodleIndex = 0;
const noodles = [
	{
		name: 'Noodle 1',
		image: '../img/noodle1.jpg'
	},
	{
		name: 'Noodle 2',
		image: '../img/noodle2.jpg'
	},
	{
		name: 'Noodle 3',
		image: '../img/noodle3.jpg'
	}
];

for (let i = 0; i < noodleButtons.length; i++) {
	noodleButtons[i].addEventListener('click', function (event) {
		// alert("new noodle index: " + i);
		document.getElementById('noodle-image').src = noodles[i].image;
		document.getElementById('fortuneText').innerText = getHoroscope(i + 1);
		// alert("new noodle index: " + i);
	});
}

/**
 * @param {int} newNoodleIndex The index of the noodle to be displayed
 */
async function updateNoodle(newNoodleIndex) {
	// import getHoroscope from '../js/genHoroscope.js';
	noodleIndex = newNoodleIndex;
	document.getElementById('noodle-image').src = noodles[newNoodleIndex].image;
	document.getElementById('fortuneText').innerText = await getHoroscope(
		newNoodleIndex + 1
	);
	// alert('new noodle index: ' + newNoodleIndex + '.');
}

/** Function to toggle dropbown */
function buttonFunct() {
	// alert("Hello World!");
	document.getElementById('myDropdown').classList.toggle('show');
}

// upon loading, call updatenoodle, passing in the noodleIndex from local storage
document.addEventListener('DOMContentLoaded', function (event) {
	let noodleIndex = localStorage.getItem('noodleIndex');
	// typecase noodleIndex to int
	noodleIndex = parseInt(noodleIndex);
	updateNoodle(noodleIndex);
});
