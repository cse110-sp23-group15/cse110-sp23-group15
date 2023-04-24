const { getRandomInt } = require("./utils.js");

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

/**
 * @returns {string} Random response from the responses array
 */
function getRandomResponse() {
  return responses[getRandomInt(0, responses.length)];
}

module.exports = { responses, getRandomResponse };
