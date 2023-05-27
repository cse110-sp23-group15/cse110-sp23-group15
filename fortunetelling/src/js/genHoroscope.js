// If we decide to use ES6

import { getJSON } from './utils.js';

// use this to generate a random day on the database to start at
const randomKey = 98370474095984;
const numHoroscopeDays = 660;
const startingPoint = randomKey % numHoroscopeDays;

// 1. Get the days from start
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();
const currentDate = new Date(currentYear, currentMonth, currentDay);
const startingDate = new Date(2023, 4, 8);
const daysFromStart = Math.floor(
	(currentDate - startingDate) / (1000 * 60 * 60 * 24)
);

/**
 * Function that gets the day's horoscope for a specific sign
 * @param {int} horoscopeSignAsNumber the number of the sign (1-12)
 * @return {string} the horoscope for the day as a string
 */
export async function getHoroscope(horoscopeSignAsNumber) {
	const horoscopeIndex = (startingPoint + daysFromStart) % numHoroscopeDays;
	const horoscopeJson = await getJSON('./database/horoscopeDB.json');

	return horoscopeJson[
		horoscopeIndex + (horoscopeSignAsNumber - 1) * numHoroscopeDays
	]['description'];
}
