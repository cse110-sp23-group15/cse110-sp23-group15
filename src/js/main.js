const magic8Ball = document.querySelector(".magic-8-ball");
const shakeButton = document.querySelector(".shake-button");
const textInput = document.getElementById("question");
import { getRandomResponse } from "./magic8Ball.js";
import { getRandomInt } from "./utils.js";
const min_time = 300;
const max_time = 600;
const speed = 50;
  




/**
  * This function was created by ChatGPT to
  * return the response that was retrieved.
  * backend team must edit this function
  */
function shakeMagic8Ball() {
  magic8Ball.textContent = "";
  const response = getRandomResponse();
  // it might be best if it shakes for a differing amount of time
  const timeout = getRandomInt(min_time, max_time);
  if (textInput.value=="") {
    alert("Our noodle doesn't know what you want to ask if you don't enter anything");
  } else {
    textInput.value = ""; // clear the input
    // I couldn't get the typing effect as a seperate function to work, this is kind of a mess, should be fixed later
    setTimeout(function () {
      var i = 0;
      while (i < response.length) {
        const iteration = i; // this is needed to make sure iteration is the correct value when the function is called
        setTimeout(function () {
          magic8Ball.textContent += response.charAt(iteration);
        }, speed * iteration);
        i++;
      } // end of while loop
    }, timeout);
  }
}

shakeButton.addEventListener("click", shakeMagic8Ball);
