// Test all files in the js directory prepended with 'test'

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Get all files in the js directory that start with 'test' excluding this file
const testFiles = fs.readdirSync(path.join(__dirname, './'))
  .filter(
    file => file.startsWith('test') &&
    file.endsWith('.js') &&
    file !== path.basename(__filename)
  );

console.log('Test files:');
console.log(testFiles);
console.log('Running tests...');

testFiles.forEach(file => {
  exec(`node ${file}`, (err, stdout, stderr) => {
    if (err) {
      console.log(`Error in ${file}:`);
      console.log(err);
    } else if (stderr) {
      console.log(`Error in ${file}:`);
      console.log(stderr);
    } else {
      console.log(`Success in ${file}:`);
      console.log(stdout);
    }
  });
});
