// Test all files in the js/test directory prepended with 'test'

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Get absolute path to test directory
const dirname = path.dirname(__filename);

// Get all files in the test directory that start with 'test' excluding this file
const testFiles = fs.readdirSync(dirname)
  .filter(
    file => file.startsWith('test') &&
    file.endsWith('.js') &&
    file !== path.basename(__filename)
  );

console.log('Test files:');
console.log(testFiles);
console.log('Running tests...\n');

testFiles.forEach(file => {
  exec(`node ${dirname}/${file}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error in ${file}:`);
      console.error(err);
    } else if (stderr) {
      console.error(`Error in ${file}:`);
      console.error(stderr);
    } else {
      console.log(`Success in ${file}:`);
      console.log(stdout);
    }
  });
});
