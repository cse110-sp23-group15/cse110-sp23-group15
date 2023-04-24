const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "Outlook not so good.",
    "My sources say no.",
    "Very doubtful."
  ];
  
  const magic8Ball = document.querySelector(".magic-8-ball");
  const shakeButton = document.querySelector(".shake-button");
  const textInput = document.getElementById("question");
  
  //function to retrieve random response from responses
  function getRandomResponse() {
    const index = Math.floor(Math.random() * responses.length);
    return responses[index];
  }
  
  /**
   * This function was created by ChatGPT to
   * return the response that was retrieved.
   * backend team must edit this function
   */
  function shakeMagic8Ball() {
    const response = getRandomResponse();
    if (textInput.value==""){
      alert("Please enter a value");
    }else{
      magic8Ball.textContent = response;
    }
  }
  
  shakeButton.addEventListener("click", shakeMagic8Ball);