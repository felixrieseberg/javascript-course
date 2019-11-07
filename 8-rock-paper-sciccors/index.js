/**
 * This method takes in two strings ("rock", "paper", or "scissors").
 *
 * It returns:
 * 0 if it's a tie
 * 1 if "a" wins
 * -1 if "b" wins
 *
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function compete(a, b) {
  // They're the same, it's a tie
  if (a === b) {
    return 0;
  }

  if (a === 'rock') {
    if (b === 'paper') {
      return -1;
    } else if (b === 'scissors') {
      return 1;
    }
  }

  if (a === 'paper') {
    if (b === 'rock') {
      return 1;
    } else if (b === 'scissors') {
      return -1;
    }
  }

  if (a === 'scissors') {
    if (b === 'rock') {
      return -1;
    } else if (b === 'scissors') {
      return 1;
    }
  }

  // We did not get the right input
  throw new Error(`Inputs ${a} and ${b} not recognized`);
}

/**
 * Returns a random hand, either "rock", "paper", or "scissors"
 *
 * @returns {string}
 */
function getRandomHand() {
  // A random number, either 0, 1, or 2.
  // Math.floor() returns the largest integer less than or equal to a given number.
  // Math.random() returns a random number between 0 and 1.
  const randomBetweenZeroAndTwo = Math.floor(Math.random() * 3);
  const hands = [ 'rock', 'paper', 'scissors' ];

  return hands[randomBetweenZeroAndTwo];
}

// Let's play!
const userHand = process.argv[2];
const computerHand = getRandomHand();
const computerPlayed = `Computer played "${computerHand}". `;
const result = compete(userHand, computerHand);

if (result === 0) {
  console.log(computerPlayed + 'It is a tie!');
} else if (result === 1) {
  console.log(computerPlayed + 'You won!');
} else if (result === -1) {
  console.log(computerPlayed + 'You lost!');
}
