// about.html onload script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

let memberIndex = 0;
const members = [
	{
		name: 'Mark Lucernas',
		memberImage: '../img/mark-icon.jpeg',
		memberNoodle: '../img/ramen-icon-1.png',
		description: 'Mark is a third year studying computer science and is one of the team leads for our team.'
	},
	{
		name: 'Hieu Pham',
		memberImage: '../img/hieu-icon.jpeg',
		memberNoodle: '../img/ravioli-icon-1.png',
		description: 'Hieu is another one of our team leads and is currently a second year studying computer science.'
	},
	{
		name: 'Xinle Yu',
		memberImage: '../img/henry-icon.jpg',
		memberNoodle: '../img/beef-noodle-soup-icon-1.png',
		description: 'Xinle (Henry) is a sophomore majoring in computer science, and he is a developer on the team.'
	},
	{
		name: 'Aaron Kann',
		memberImage: '../img/aaron-icon.jpg',
		memberNoodle: '../img/mac-and-cheese-icon-1.png',
		description: 'Aaron\'s role on the team is a developer, and he is a second year studying math and computer science.'
	},
	{
		name: 'Steve Yin',
		memberImage: '',
		memberNoodle: '../img/udon-icon-1.png',
		description: 'Steve is a developer on our team, and he is currently a second year majoring in computer engineering.'
	},
	{
		name: 'Darren Yu',
		memberImage: '../img/darren-icon.jpg',
		memberNoodle: '../img/instant-noodles-icon-1.png',
		description: 'Darren is a second year computer science major, and he is the planner as well as developer for the team.'
	},
	{
		name: 'Holly Zhu',
		memberImage: '../img/holly-icon.png',
		memberNoodle: '../img/spaghetti-icon-1.png',
		description: 'Holly is a computer science major with a design minor, and she is the designer and a developer on our team.'
	},
	{
		name: 'Anthony Yao',
		memberImage: '',
		memberNoodle: '../img/pho-icon-1.png',
		description: 'Anthony\'s role on the team is a developer, and he is currently a sophomore majoring in computer science.'
	},
	{
		name: 'Hanson Wang',
		memberImage: '../img/hanson-icon.png',
		memberNoodle: '../img/pad-thai-icon-1.png',
		description: 'Hanson is a math and computer science in his second year, and serves as a developer on the team.'
	}
];

/** Function to update member content */
function updateMember() {
	document.getElementById('current-member').src =
		members[memberIndex].memberImage;
	document.getElementById('member-noodle').src =
		members[memberIndex].memberNoodle;
	document.getElementById('member-name').innerText = members[memberIndex].name;
	document.getElementById('description').innerText =
		members[memberIndex].description;
}

/** Function to select next carousel content */
function nextMember() {
	memberIndex = (memberIndex + 1) % members.length;
	updateMember();
}

/** Function to select previous carousel content */
function prevMember() {
	memberIndex = (memberIndex - 1 + members.length) % members.length;
	updateMember();
}

const memberMenu = document.querySelectorAll('.member-menu img');

memberMenu.forEach((mem, idx) => {
	mem.addEventListener('click', () => {
		document.getElementById('current-member-dt').src = members[idx].memberImage;
		document.getElementById('member-noodle-dt').src = members[idx].memberNoodle;
		document.getElementById('member-name-dt').innerText = members[idx].name;
		document.getElementById('description-dt').innerText =
			members[idx].description;
	});
});

document.querySelector('.member-menu img').click();
updateMember();
