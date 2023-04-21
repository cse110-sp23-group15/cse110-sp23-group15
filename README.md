# cse110-sp23-group15

## Team

[Meet the Team](./admin/team.md)

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

