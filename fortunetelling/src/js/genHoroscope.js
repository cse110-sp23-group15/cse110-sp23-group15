// use this to generate a random day on the database to start at
const randomKey = 98370474095984;
const numHoroscopeDays = 660;
const startingPoint = randomKey % numHoroscopeDays;

//for fortunes.html
const dropbtn = document.getElementById("dropbtn");
const noodleButtons = document.getElementsByClassName("noodleButton");
dropbtn.addEventListener("click", buttonFunct);

let noodleIndex = 0;
let noodles = [
	{
		name: 'Noodle 1',
		image: '../img/noodle1.jpg',
	},
	{
		name: 'Noodle 2',
		image: '../img/noodle2.jpg',
	},
	{
		name: 'Noodle 3',
		image: '../img/noodle3.jpg',
	}
];

for (let i = 0; i < noodleButtons.length; i++) {
	noodleButtons[i].addEventListener("click", function (event) {
		// alert("new noodle index: " + i);
		document.getElementById('noodle-image').src =
		noodles[i].image;
		document.getElementById('fortuneText').innerText =
			getHoroscope(i + 1);
			// alert("new noodle index: " + i);
	});
}


function updateNoodle(newNoodleIndex) {
	//import getHoroscope from '../js/genHoroscope.js';
	alert("new noodle index: " + newNoodleIndex + ".");
	noodleIndex = newNoodleIndex;
	document.getElementById('noodle-image').src =
		noodles[newNoodleIndex].image;
	document.getElementById('fortuneText').innerText =
		getHoroscope(newNoodleIndex + 1);
}


// 1. Get the days from start
const getDaysFromStart = function () {
	// alert("getDaysFromStart")
	const date = new Date();
	const currentYear = date.getFullYear();
	const currentMonth = date.getMonth();
	const currentDay = date.getDate();
	const currentDate = new Date(currentYear, currentMonth, currentDay);
	const startingDate = new Date(2023, 4, 8);
	const daysFromStart = Math.floor(
		(currentDate - startingDate) / (1000 * 60 * 60 * 24)
	);
	return daysFromStart;
};

// access the json file in the database folder
//const fs = require('fs');
// import fs from 'fs';
// import { get } from 'http';
//import a json file

import horoscopeJson from './database/horoscopeDb.json' assert { type: "json" };
import noodleDescription from './database/noodleDescriptions.json' assert { type: "json" };
// import { assert } from 'console';
// const { get } = require('http');

/* Function that gets the day's horoscope for a specific sign
/ @param horoscopeSignAsNumber: the number of the sign (1-12)
/ @return: the horoscope for the day as a string
*/
const getHoroscope = function (horoscopeSignAsNumber) {
	// alert('genHoroscope.js');
	const daysFromStart = getDaysFromStart();
	// const horoscopeJson = require('./database/horoscopeDb.json');
	const horoscopeIndex = (startingPoint + daysFromStart) % numHoroscopeDays;
	return horoscopeJson[
		horoscopeIndex + (horoscopeSignAsNumber - 1) * numHoroscopeDays
	]['description'];
};

const getDescription = function (horoscopeSignAsNumber) {
	// const noodleDescription = require('./database/noodleDescriptions.json');
	return noodleDescription[horoscopeSignAsNumber - 1]['personalityDescription'];
};
// test the function for all numbers 1-12
for (let i = 1; i <= 12; i++) {
	console.log('Sign: ' + i + '\n');
	console.log(getDescription(i));
	console.log('\n');
	console.log(getHoroscope(i));
	console.log('\n');
}



function buttonFunct() {
	// alert("Hello World!");
	document.getElementById("myDropdown").classList.toggle("show");
}


// upon loading, call updatenoodle, passing in the noodleIndex from local storage
document.addEventListener("DOMContentLoaded", function (event) {
	let noodleIndex = localStorage.getItem("noodleIndex");
	//typecase noodleIndex to int
	noodleIndex = parseInt(noodleIndex);
	updateNoodle(noodleIndex);
});

	// alert("Hello World!");
	// alert("noodleIndex: " + noodleIndex);
	// alert("noodleIndex: " + localStorage.getItem("noodleIndex"));




//export { getHoroscope, getDescription };