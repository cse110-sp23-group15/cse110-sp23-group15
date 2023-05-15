# Use vanilla CSS instead of a CSS framework

## Context and Problem Statement

- We need to style our web app with mobile-first responsive design.
- We don't want extra bloat from a CSS framework.
- We want to use our own custom styles but also benefit from general styling
  from a CSS framework.

## Considered Options

- [Tailwind CSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- Vanilla CSS

## Decision Outcome

Chosen option: "Vanilla CSS", because it reduces bloat and allows us to use our
own custom styles. Although it means more work intially, it reduces the amount
of debugging and refactoring we have to do later on since we will design our own
framework from the ground up.

