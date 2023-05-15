---
title: ESlint for code linting
status: proposed
date: 2023-05-15
deciders: Mark Lucernas, Hieu Pham
consulted: Akshay Prabhu
informed: Everyone
---

# ESlint for code linting

## Context and Problem Statement

- We need to lint our code using standard rules.
- Easy no-brainer setup
- Can be automated
- Easily integrated with popular IDEs

## Considered Options

- ESlint
- Prettier
- Manual lintint

## Decision Outcome

TODO

### Consequences

TODO

## Pro

### ESlint

[ESlint](https://eslint.org/)

- Pro: Mark has experience with ESlint
- Pro: Can be automated
- Pro: Can be integrated with IDEs
- Pro: Can be integrated with git hooks (git pre-commit hook)
- Pro: Can be integrated with CI/CD pipelines

### Prettier

[Prettier](https://prettier.io/)

- Pro: Can be automated
- Pro: Can be integrated with IDEs
- Pro: Can be integrated with git hooks (git pre-commit hook)
- Pro: Can be integrated with CI/CD pipelines

### Manual linting

- Pro: No additional setup
- Pro: Forces us to write good readable code
- Con: Super tedious and may not be consistent among developers

## More Information

- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

