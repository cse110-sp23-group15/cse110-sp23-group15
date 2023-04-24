// Test for the magic8Ball.js file

const assert = require('assert');

// Helper function to test functions
const it = (desc, fn) => {
  try {
    fn();
    console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`);
  } catch (error) {
    console.log('\n');
    console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`);
    console.error(error);
  }
};

const { responses, getRandomResponse } = require('../magic8Ball.js');

// Test getRandomResponse
it('getRandomResponse() returns a random response from the responses array', () => {
  // Make response is a string
  assert.strictEqual(typeof getRandomResponse(), 'string');

  // Make sure its a valid response by generating 1000 responses and making sure
  // they are all in the responses array
  for (let i = 0; i < 1000; i++) {
    assert.ok(responses.includes(getRandomResponse()));
  }
});

