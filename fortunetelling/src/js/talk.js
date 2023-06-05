document.addEventListener('DOMContentLoaded', function() {
    const noodlesContainer = document.querySelector('.noodles-container');
const userInputButton = document.getElementById('user-input-button');
const messageOutput = document.getElementById('message-output');
let isFirstClick = true;

userInputButton.addEventListener('click', startConversation);

function startConversation() {
  if (isFirstClick) {
    animateNoodle();
    isFirstClick = false;
  }
  
  updateMessageWithAnimation("Welcome to the Noodle Shop! What would you like today?");
  showButton("Huh?");
  userInputButton.removeEventListener('click', startConversation);
  userInputButton.addEventListener('click', nextStep1);
}

function animateNoodle() {
  noodlesContainer.classList.add('fly-to-center');
}

function nextStep1() {
  updateMessageWithAnimation("Oh I see. You are the special one hehe... This is going to be interesting...");
  showButton("What are you talking about?");
  userInputButton.removeEventListener('click', nextStep1);
  userInputButton.addEventListener('click', nextStep2);
}



function nextStep2() {
  updateMessageWithAnimation("You will know in one sec. Come with me");
  showButton("...");

  // Remove existing event listener
  userInputButton.removeEventListener('click', nextStep2);

  // Animate the noodles
  const noodles = [
    {
      name: 'Beef Noodle Soup',
      image: '/fortunetelling/src/img/beef-noodle-soup-icon-1.png',
      description: 'Description for Beef Noodle Soup'
    },
    {
      name: 'Bread',
      image: '/fortunetelling/src/img/bread-icon-1.png',
      description: 'Description for Noodle 2'
    },
    {
      name: 'Chicken Noodle Soup',
      image: '/fortunetelling/src/img/chicken-noodle-soup-icon-1.png',
      description: 'Description for Noodle 3'
    },
    {
      name: 'Instant Noodles',
      image: '/fortunetelling/src/img/instant-noodles-icon-1.png',
      description: 'Description for Noodle 4'
    },
    {
      name: 'Lasagna',
      image: '/fortunetelling/src/img/lasagna-icon-1.png',
      description: 'Description for Noodle 5'
    },
    {
      name: 'Mac and Cheese',
      image: '/fortunetelling/src/img/mac-and-cheese-icon-1.png',
      description: 'Description for Noodle 6'
    },
    {
      name: 'Pho',
      image: '/fortunetelling/src/img/pho-icon-1.png',
      description: 'Description for Noodle 7'
    },
    {
      name: 'Ramen',
      image: '/fortunetelling/src/img/ramen-icon-1.png',
      description: 'Description for Noodle 8'
    },
    {
      name: 'Ravioli',
      image: '/fortunetelling/src/img/ravioli-icon-1.png',
      description: 'Description for Noodle 9'
    },
    {
      name: 'Spaghetti',
      image: '/fortunetelling/src/img/spaghetti-icon-1.png',
      description: 'Description for Noodle 10'
    },
    {
      name: 'Udon',
      image: '/fortunetelling/src/img/udon-icon-1.png',
      description: 'Description for Noodle 11'
    }
  ];
  

  const noodlesContainer = document.querySelector('.noodles-container');

  noodles.forEach((noodle, index) => {
    const image = document.createElement('img');
    image.src = noodle.image;
    image.alt = noodle.name;
    image.classList.add('flying-noodle');
    noodlesContainer.appendChild(image);

    setTimeout(() => {
      image.style.animation = `fly-out 1s forwards`;
      image.addEventListener('animationend', () => {
        noodlesContainer.removeChild(image);
      });
    }, index * 100);
  });
}
function nextStep3() {

    
    window.location.href = "https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/questionnaire.html";
  }
function updateMessageWithAnimation(message) {
  const characters = message.split('');
  let currentIndex = 0;

  // Clear previous message
  messageOutput.textContent = '';

  const animationInterval = setInterval(() => {
    if (currentIndex >= characters.length) {
      clearInterval(animationInterval);
    } else {
      messageOutput.textContent += characters[currentIndex];
      currentIndex++;
    }
  }, 40);
}

function updateMessage(message) {
  messageOutput.textContent = message;
}

function showButton(text) {
  userInputButton.textContent = text;
}
// Get the container element for the eyes
var eyesContainer = document.querySelector('.eyes-container');

// Get the front side element of the box
var frontSide = document.querySelector('.side.front');

// Calculate the maximum x position within the boundary
var maxX = frontSide.offsetLeft + frontSide.offsetWidth - eyesContainer.offsetWidth;

// Calculate the maximum y position within the boundary
var maxY = frontSide.offsetTop + frontSide.offsetHeight - eyesContainer.offsetHeight;

// Track mouse movement
document.addEventListener('mousemove', function(event) {
	// Get the position of the mouse cursor
	var mouseX = event.clientX;
	var mouseY = event.clientY;

	// Calculate the position relative to the eyes container
	var containerRect = eyesContainer.getBoundingClientRect();
	var containerX = containerRect.left;
	var containerY = containerRect.top;

	// Calculate the position of the eyes inside the container
	var offsetX = mouseX - containerX;
	var offsetY = mouseY - containerY;

	// Restrict the position within the boundary
	var restrictedX = Math.min(Math.max(offsetX, 0)-30, maxX);
	var restrictedY = Math.min(Math.max(offsetY, 0)-60, maxY-80);

	// Update the position of the eyes
	eyesContainer.style.transform = 'translate(' + restrictedX + 'px, ' + restrictedY + 'px)';
});
  });

