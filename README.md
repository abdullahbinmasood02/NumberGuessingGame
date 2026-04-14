# Number Guessing Game

A browser-based number guessing game built with vanilla JavaScript and Tailwind CSS v4.

## Features

- Random number generated between 1 and 20 on each round
- Real-time feedback indicating whether the guess is too high or too low
- Score tracking that decrements on each incorrect guess
- High score persistence across rounds within the same session
- Automatic round reset on win or loss with a 3-second countdown

## Tech Stack

- HTML5
- Tailwind CSS v4 (via CLI)
- Vanilla JavaScript (ES6+, strict mode)

## Getting Started

### Prerequisites

- Node.js installed

### Installation

```bash
npm install
```

### Development

Run the Tailwind CSS watcher to compile styles on file change:

```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

Then open `index.html` in a browser.

## Project Structure

```
starter/
  index.html       # Main HTML file
  script.js        # Game logic
  input.css        # Tailwind CSS entry point
  package.json     # Dependencies
```
