
# Wordle Game

Welcome to the Wordle Game! This is a simple web-based word-guessing game inspired by the popular game Wordle. Players have a limited number of guesses to figure out a secret five-letter word.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Demo

You can play the Wordle Game [here](https://rococo-quokka-6131f0.netlify.app/).

## Features

- Interactive UI for guessing words.
- Visual feedback for correct, incorrect, and misplaced letters.
- Easy and Hard difficulty modes.
- Responsive design for mobile and desktop devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management tool for managing game state.
- **Redux-Saga**: Middleware for handling side effects in the application.
- **Ant Design**: A design system for React that provides a set of high-quality components.
- **TypeScript**: A superset of JavaScript that provides static typing.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sh-tajdini/wordle.git
   ```

2. Navigate to the project directory:

   ```bash
   cd wordle
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to http://localhost:3000.

## Usage

Once the game is running, you can start guessing five-letter words. Enter a guess and press the "Enter" key. The game will provide feedback on your guess:

- Green: Letter is in the correct position.
- Yellow: Letter is in the word but in the wrong position.
- Gray: Letter is not in the word at all.
