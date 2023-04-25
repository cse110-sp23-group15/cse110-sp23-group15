# cse110-sp23-group15

## Team

[Meet the Team](./admin/team.md)

https://user-images.githubusercontent.com/52873993/233766082-68d85fb7-b46b-48c1-8f39-fa8417b70bdc.mp4

## Development

### Rules

- **Always** make descriptive commit messages
- **Always** document your code with comments along the way
- **Always** pull from the main branch before you start working on a new
  feature.
- **Never** push to the main branch! (except for admin stuff)
    - **Always** create a new branch for each feature you are working on. Name
      the branch after the feature you are working on with your name and project
      scope. For example, if you are working on the `audio` feature for the
      frontend, name the branch `frontend-audio-john`.
    - **Always** create a pull request when you are done with a feature. Assign
      pull request to the team lead or someone else you work with for review
      before merging into the main branch.
- Submit issues for any bugs you find or features you want to add you don't have
  time for or not a priority. Don't forget to assign the issue to someone and
  leave a reasonable amount of description for context and reference.

### Environment

Recommended setup for dev environment. You can use other method you prefer.

**Requirements:**

- `npm`

**Installation:**

```bash
npm install -g browser-sync
```

**Usage:**

```bash
# Make sure you are in the root directory of the project
cd cse110-sp23-group15

# Start live server. Your browser window will auto-open http://localhost:3000
# that watches for all file changes from the current directory recursively and
# auto-reload the page when changes are detected.
browser-sync start --server --files "**/*"
```

See [BrowserSync](https://browsersync.io/) for more details.

### Testing

**Requirements:**

- `node`

**Usage:** Running all test files in `./src/js/test/`

```bash
node ./src/js/test/testAll.js
```

#### Creating Test Cases

Create a new file in `./src/js/test/` with the name of the file you want to test
in `./src/js`. For example, if you want to test `./src/js/utils.js`, create
a new file `./src/js/test/testUtils.js`.

**Make sure to include the following lines at the top of your test file:**

```js
// Test imports
import { strictEqual, ok } from 'node:assert';
import { it } from './helper.js';
```

> **Note:** Use ES6 `import` instead of CommonJS `require`.

Then, you can write your test cases using `assert` and `it`:

```js
// Import functions to test
import { getRandomInt } from '../utils.js';

// Test getRandomInt
it('getRandomInt Should return random integer between min (inclusive) and max (exclusive)', () => {
  // Test that getRandomInt returns an int between 0 (inclusive) and 10 (exclusive)
  for (let i = 0; i < 1000; i++) {
    const randomInt = getRandomInt(0, 10);
    assert.ok(randomInt >= 0 && randomInt < 10)
  }
});
```

See [Node.js Assert](https://nodejs.org/api/assert.html) for more details.

> **Note:** You may exclude testing `./src/js/main.js` since it is the entry
> point of the app and it is not a module. Node.js will throw an error if you
> try to import it since it contains HTML elements.

