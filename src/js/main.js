const magic8Ball = document.querySelector(".magic-8-ball");
const shakeButton = document.querySelector(".shake-button");
const textInput = document.getElementById("question");
import { getRandomResponse } from "./magic8Ball.js";
import { getRandomInt } from "./utils.js";
const min_time = 200;
const max_time = 500;
  

/**
  * This function was created by ChatGPT to
  * return the response that was retrieved.
  * backend team must edit this function
  */
function shakeMagic8Ball() {
  const response = getRandomResponse();
  const timeout = getRandomInt(min_time, max_time);
  if (textInput.value=="") {
    alert("Our noodle doesn't know what you want to ask if you don't enter anything");
  } else {
    setTimeout(function () {
    magic8Ball.textContent = response;
    }, timeout);
  }
}

shakeButton.addEventListener("click", shakeMagic8Ball);
