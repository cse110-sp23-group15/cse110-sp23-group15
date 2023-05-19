# Noodle Horoscope

## Dependencies

- [node.js](https://nodejs.org/en/) (v18.\*)
- [JSDoc](https://jsdoc.app/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

```bash
# Install dependencies
cd ./fortunetelling
npm install
```

## Development

[JSDoc pages](./fortunetelling/docs/) for project code documentation.

### Project Structure

```
.
├── index.html
├── node_modules
├── ...
└── src
    ├── css
    │   ├── main.css
    │   └── ...
    ├── img
    │   ├── favicon.ico
    │   ├── icon.png
    │   ├── ramen-icon-1.png
    │   └── ...
    ├── js
    │   ├── database
    │   │   ├── horoscopeDB.json
    │   │   └── ...
    │   ├── genHoroscope.js
    │   ├── main.js
    │   └── ...
    └── pages
        ├── about.html
        ├── profiles.html
        ├── questionnaire.html
        └── ...
```

### Code Linting

It is important to lint and format your code before committing to the
repository. Simply run the following to lint files in the `src` directory:

```bash
# cd ./fortunetelling
npm run format
```

> NOTE: Make sure to fix all linting errors before committing as well because
> merging PRs with linting errors will be blocked by our CI pipeline.

### Testing

More than anything else, testing your code is non-negotiable. It follows that
your code should be testable and that prior to merging PRs, all tests should
pass. To run tests, simply run the following:

```bash
# cd ./fortunetelling
npm run test
```

> NOTE: Failed tests will block merging PRs.

### Manual JSDoc Generation

To generate JSDoc manually, simply run the following (make sure to exclude
output from git commit changes):

```bash
# cd ./fortunetelling
npm run docgen

# Open JSDoc in your browser
open ./docs/index.html
```

> NOTE: This will generate JSDoc in the `./fortunetelling/docs` directory and
> will **NOT** be ignored by git to ensure it is included in the `production`
> branch by the ci/cd pipeline. Make sure to exclude this directory when
> committing changes.

### Environment

#### Recommended setup for dev environment (You can use other method you prefer)

**Requirements:**

- `npm`

**Installation:**

```bash
# Install browser-sync globally
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
