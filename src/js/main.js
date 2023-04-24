const magic8Ball = document.querySelector(".magic-8-ball");
const shakeButton = document.querySelector(".shake-button");
const textInput = document.getElementById("question");
const { getRandomResponse } = require('./magic8Ball.js');
  

/**
  * This function was created by ChatGPT to
  * return the response that was retrieved.
  * backend team must edit this function
  */
function shakeMagic8Ball() {
  const response = getRandomResponse();
  if (textInput.value=="") {
    alert("Our noodle doesn't know what you want to ask if you don't enter anything");
  } else {
    magic8Ball.textContent = response;
  }
}

shakeButton.addEventListener("click", shakeMagic8Ball);
