// profiles.html preload script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

let noodleIndex = 0;
localStorage.setItem('noodleIndex', noodleIndex);
const noodles = [
	{
		name: 'Beef Noodle Soup',
		image: '../img/beef-noodle-soup-icon-1.png',
		description: 'Description for Beef Noodle Soup'
	},
	{
		name: 'Bread',
		image: '../img/bread-icon-1.png',
		description: 'Description for Noodle 2'
	},
	{
		name: 'Chicken Noodle Soup',
		image: '../img/chicken-noodle-soup-icon-1.png',
		description: 'Description for Noodle 3'
	},
	{
		name: 'Instant Noodles',
		image: '../img/instant-noodles-icon-1.png',
		description: 'Description for Noodle 3'
	},
	{
		name: 'Lasagna',
		image: '../img/lasagna-icon-1.png',
		description: 'Description for Noodle 3'
	},
	{
		name: 'Mac and Cheese',
		image: '../img/mac-and-cheese-icon-1.png',
		description: 'Description for Noodle 3'
	},
	{
		name: 'Pho',
		image: '../img/pho-icon-1.png',
		description: 'Description for Noodle 3'
	},
	{
		name: 'Ramen',
		image: '../img/ramen-icon-1.png',
		description: 'Description for Noodle 3'
	},
	{
		name: 'Ravioli',
		image: '../img/ravioli-icon-1.png',
		description: 'Description for Noodle 3'
	},
	{
		name: 'Spaghetti',
		image: '../img/spaghetti-icon-1.png',
		description: 'Description for Noodle 3'
	},
	{
		name: 'Udon',
		image: '../img/udon-icon-1.png',
		description: 'Description for Noodle 3'
	}
];

/** Single page update content function */
function singlePageUpdateNoodle() {
	document.getElementById('name').innerText = noodles[noodleIndex].name;
	document.getElementById('description').innerText =
		noodles[noodleIndex].description;
	document.getElementById('selected-noodle-img').src =
		noodles[noodleIndex].image;
	const carouselImages = document.getElementById('carousel').children;
	for (let i = 0; i < carouselImages.length; i++) {
		carouselImages[i].src = noodles[i].image;
	}
}

/** Double page update content function */
function doublePageUpdateNoodle() {
	document.getElementById('carousel-image').src = noodles[noodleIndex].image;
	document.getElementById('name').innerText = noodles[noodleIndex].name;
	document.getElementById('description').innerText =
		noodles[noodleIndex].description;
	document.getElementById('prev-noodle').src =
		noodles[(noodleIndex - 1 + noodles.length) % noodles.length].image;
	document.getElementById('next-noodle').src =
		noodles[(noodleIndex + 1) % noodles.length].image;
	document.getElementById('prev-noodle-name').innerText =
		noodles[(noodleIndex - 1 + noodles.length) % noodles.length].name;
	document.getElementById('next-noodle-name').innerText =
		noodles[(noodleIndex + 1) % noodles.length].name;
}

/**
 * Selects a noodle by index
 * @param {int} index The index of the noodle to select
 */
function selectNoodle(index) {
	noodleIndex = index;
	singlePageUpdateNoodle();
}

/** Function to select next carousel content in double page */
function nextNoodle() {
	noodleIndex = (noodleIndex + 1) % noodles.length;
	doublePageUpdateNoodle();
}

/** Function to select previous carousel content in double page */
function prevNoodle() {
	noodleIndex = (noodleIndex - 1 + noodles.length) % noodles.length;
	doublePageUpdateNoodle();
}

/** Detects window size and decide what page content to use (single or double) */
function checkWindowSize() {
	const singlePageContent = document.getElementById('singlePageContent');
	const doublePageContent = document.getElementById('doublePageContent');

	if (window.innerWidth > 800) {
		// If the window is less than or equal to 800 pixels wide,
		// show the single-page layout and hide the double-page layout.
		singlePageContent.style.display = 'block';
		doublePageContent.style.display = 'none';
	} else {
		// If the window is more than 800 pixels wide,
		// show the double-page layout and hide the single-page layout.
		singlePageContent.style.display = 'none';
		doublePageContent.style.display = 'block';
	}
}

// Call checkWindowSize whenever the window is resized
window.addEventListener('resize', checkWindowSize);

// Call functions before the page loads
singlePageUpdateNoodle();
doublePageUpdateNoodle();
checkWindowSize();
