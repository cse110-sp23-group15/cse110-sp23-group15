// import { readFile } from 'fs/promises';

/**
 * Returns a random int value between min and max
 * @param {int} min Minimum int value (inclusive)
 * @param {int} max Maximum int value (exclusive)
 * @return {int} Random int value between min and max
 */
export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns JSON object from url. Used for testing.
 * @param {string} url path to JSON file
 * @return {json} JSON object in url
 */
export async function getJSON(url) {
	const { default: json } = await import(url, { assert: { type: 'json' } });

	// ALTERNATIVE: Do not use this function under main.js. Use import instead
	// const json = JSON.parse(await readFile(new URL(url, import.meta.url)));
	return json;
}
