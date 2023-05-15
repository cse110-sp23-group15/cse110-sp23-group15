# Noodle Horoscope

## Dependencies

- [node.js](https://nodejs.org/en/) (v18.*)
- [JSDoc](https://jsdoc.app/)

## Development

[JSDoc pages](https://cse110-sp23-group15.github.io/cse110-sp23-group15/) for
project code documentation.

### Environment

**Requirements:**

- `npm`

**Installation:**

```bash
# Install dependencies
npm install

# (Optional) Install browser-sync for live server
npm install -g browser-sync
```

#### Recommended setup for dev environment (You can use other method you prefer)

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

