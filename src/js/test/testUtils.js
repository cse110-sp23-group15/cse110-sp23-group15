// Test for the main.js file

import { strictEqual, ok } from 'assert';

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

import { getRandomInt } from '../utils.js';

// Test getRandomInt
it('getRandomInt Should return random integer between min (inclusive) and max (exclusive)', () => {
  // Test min inclusivity and max exclusivity
  strictEqual(getRandomInt(0, 0), 0);
  strictEqual(getRandomInt(0, 1), 0);

  // Test that getRandomInt returns an int between 0 (inclusive) and 10 (exclusive)
  for (let i = 0; i < 1000; i++) {
    const randomInt = getRandomInt(0, 10);
    ok(randomInt >= 0 && randomInt < 10)
  }
});
