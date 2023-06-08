/**
 * This script provides an interactive story-telling or conversation experience 
 * on a website with a noodle shop theme. It triggers upon DOM content load and 
 * handles user interaction through button clicks, displaying messages, 
 * animating elements, and changing event listeners dynamically.
 */

document.addEventListener('DOMContentLoaded', function() {
  const noodlesContainer = document.querySelector('.noodles-container');
  const userInputButton = document.getElementById('user-input-button');
  const messageOutput = document.getElementById('message-output');
  let isFirstClick = true;

  userInputButton.addEventListener('click', startConversation);

  /**
   * Handles the first user interaction.
   * Animates the noodle on first click and displays a message.
   */
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

  /**
   * Adds a CSS class to animate the noodle.
   */
  function animateNoodle() {
    noodlesContainer.classList.add('fly-to-center');
  }

  /**
   * Handles the second stage of the interaction.
   * Displays a message and prepares for the next user interaction.
   */
  function nextStep1() {
    updateMessageWithAnimation("Oh I see. You are the special one hehe... This is going to be interesting...");
    showButton("What are you talking about?");
    userInputButton.removeEventListener('click', nextStep1);
    userInputButton.addEventListener('click', nextStep2);
  }

  /**
   * Handles the third stage of the interaction.
   * Displays a message, animates noodles, and prepares for the next user interaction.
   */
  function nextStep2() {
    updateMessageWithAnimation("You will know in one sec. Come with me");
    showButton("...");

    // Remove existing event listener
    userInputButton.removeEventListener('click', nextStep2);
    userInputButton.addEventListener('click', nextStep3);
    
    // Animate the noodles
    // ...
  }

  /**
   * Handles the final stage of the interaction.
   * Redirects the user to a different webpage.
   */
  function nextStep3() {
    window.location.href = "https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/questionnaire.html";
  }

  /**
   * Updates the displayed message with a typing animation.
   * @param {string} message - The message to display.
   */
  function updateMessageWithAnimation(message) {
    // ...
  }

  /**
   * Updates the displayed message.
   * @param {string} message - The message to display.
   */
  function updateMessage(message) {
    messageOutput.textContent = message;
  }

  /**
   * Updates the displayed text on the button.
   * @param {string} text - The text to display on the button.
   */
  function showButton(text) {
    userInputButton.textContent = text;
  }

  // Other functions and event listeners
  // ...


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
	var restrictedY = Math.min(Math.max(offsetY, 0)-50, maxY-60);

	// Update the position of the eyes
	eyesContainer.style.transform = 'translate(' + restrictedX + 'px, ' + restrictedY + 'px)';
});
  });

