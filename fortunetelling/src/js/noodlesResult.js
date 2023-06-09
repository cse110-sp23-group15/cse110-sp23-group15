window.addEventListener('DOMContentLoaded', init);

import { getHoroscope, getNoodleData } from './genHoroscope.js';

const SMOKE_ANIMATION_TIME = 1840;
const IMAGE_ANIMATION_TIME = 2900;
const TIME_BEFORE_SMOKE = 2000;
const SMOKE_MAX_COVER_TIME = 700;
const IMAGE_WHEEL_SPINS = 4;
const IMAGE_EXP_MULITPLIER = 1.1;


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
	}, TIME_BEFORE_SMOKE);	

	setTimeout(() => {
		noodleDescription.style.opacity = 1;
		quizResult.style.opacity = 1;
		setDescriptionAndResult();
	}, TIME_BEFORE_SMOKE + SMOKE_MAX_COVER_TIME);

	setTimeout(() => {
		setImageCorrectly();
	}, IMAGE_ANIMATION_TIME + 100);
}

/**
 * Set the noodle image to the corresponding image of the user's quiz result
 */
function setImageCorrectly() {
	const image = document.getElementById('noodleImg');
	const noodle = localStorage.getItem('noodle');
	image.setAttribute('src', noodle);
}

/**
 * Set the noodle description and quiz result to the corresponding text of the user's quiz result
 */
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

/**
 * Animates the image to shuffle through all noodle images
 */
async function spinNoodleWheel() {
	const noodleData = await getNoodleData();
	const spins_around = IMAGE_WHEEL_SPINS;
	const spin_time = NOODLE_ANIMATION_TIME;

	//exponential function 
	const b = IMAGE_EXP_MULITPLIER;
	const a = spin_time / Math.pow(b, spins_around*12);
	
	const image = document.getElementById('noodleImg');
	for (let i = 0; i < spins_around * 12; i++) {
		setTimeout(() => {
			image.setAttribute('src', noodleData[i % 12]['path']);
		}, a * Math.pow(b, i));
	}
}

/**
 * Animates the smoke image exactly once
 */
function doSmokeEffect() {
	const smoke = document.getElementById('smokeImage');
	setTimeout(() => {
		smoke.style.opacity = 0;
	}, SMOKE_ANIMATION_TIME);
	// img.src = img.src + "?";
	smoke.style.opacity = 1;
}