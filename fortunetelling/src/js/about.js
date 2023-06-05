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
		description: 'Description for Mark Lucernas'
	},
	{
		name: 'Hieu Pham',
		memberImage: '../img/hieu-icon.jpeg',
		memberNoodle: '../img/ravioli-icon-1.png',
		description: 'Description for Hieu Pham'
	},
	{
		name: 'Xinle Yu',
		memberImage: '../img/henry-icon.jpg',
		memberNoodle: '../img/beef-noodle-soup-icon-1.png',
		description: 'Description for Xinle Yu'
	},
	{
		name: 'Aaron Kann',
		memberImage: '',
		memberNoodle: '../img/mac-and-cheese-icon-1.png',
		description: 'Description for Aaron Kann'
	},
	{
		name: 'Steve Yin',
		memberImage: '',
		memberNoodle: '../img/udon-icon-1.png',
		description: 'Description for Steve Yin'
	},
	{
		name: 'Darren Yu',
		memberImage: '../img/darren-icon.jpg',
		memberNoodle: '../img/instant-noodles-icon-1.png',
		description: 'Description for Darren Yu'
	},
	{
		name: 'Holly Zhu',
		memberImage: '../img/holly-icon.png',
		memberNoodle: '../img/spaghetti-icon-1.png',
		description: 'Description for Holly Zhu'
	},
	{
		name: 'Anthony Yao',
		memberImage: '',
		memberNoodle: '../img/pho-icon-1.png',
		description: 'Description for Anthony Yao'
	},
	{
		name: 'Hanson Wang',
		memberImage: '',
		memberNoodle: '../img/pad-thai-icon-1.png',
		description: 'Description for Hanson Wang'
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
