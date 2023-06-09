window.addEventListener('DOMContentLoaded', init);

import { getHoroscope, getNoodleData } from './genHoroscope.js';

/**
 * On load function,
 * use localStorage to get the quiz result and display the corresponding noodle
 */
async function init() {
	const noodleDescription = document.getElementById('noodleDescription');
	const quizResult = document.getElementById('quizResult');
	const smoke = document.getElementById('smokeImage');
	noodleDescription.style.opacity = 0;
	quizResult.textContent = "Your personality type is being calculated...";
	smoke.style.opacity = 0;


	spinNoodleWheel();
	
	setTimeout(() => {	
		doSmokeEffect();
	}, 2000);	

	setTimeout(() => {
		noodleDescription.style.opacity = 1;
		quizResult.style.opacity = 1;
		setDescriptionAndResult();
	}, 2700);

	setTimeout(() => {
		setImageCorrectly();
	}, 3000);
}

function setImageCorrectly() {
	const image = document.getElementById('noodleImg');
	const noodle = localStorage.getItem('noodle');
	image.setAttribute('src', noodle);
}

async function setDescriptionAndResult() {
	const noodleDescription = document.getElementById('noodleDescription');
	const quizResult = document.getElementById('quizResult');
	let noodleId = localStorage.getItem('noodleIndex');
	// convert noodleId to int
	noodleId = parseInt(noodleId);
	const noodleData = await getNoodleData();
	noodleDescription.textContent =
		noodleData[noodleId]['personalityDescription'];
	quizResult.textContent = `Congratulations, your personality type is ${noodleData[noodleId]['noodleName']}!`;
}

async function spinNoodleWheel() {
	const noodleData = await getNoodleData();
	const spins_around = 4;
	const spin_time = 2900;

	//exponential function 
	const b = 1.1;
	const a = spin_time / Math.pow(b, spins_around*12);
	
	const image = document.getElementById('noodleImg');
	for (let i = 0; i < spins_around * 12; i++) {
		setTimeout(() => {
			image.setAttribute('src', noodleData[i % 12]['path']);
		}, a * Math.pow(b, i));
	}
}

function doSmokeEffect() {
	const smoke = document.getElementById('smokeImage');
	setTimeout(() => {
		smoke.style.opacity = 0;
	}, 1840);
	// img.src = img.src + "?";
	smoke.style.opacity = 1;
}