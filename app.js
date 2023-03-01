let counter = 1;
let history = [];
let name = prompt("Please, enter your name");
let playerStats = {};
// let playAgain = prompt("Do you want to play again?");

function guessOnce() {
  let correctNumber = Math.floor(Math.random() * 11);
  let guessANumber = Number(prompt("Guess a number"));
  console.log(guessANumber);

  console.log(correctNumber);

  while (guessANumber != correctNumber) {
    if (guessANumber < correctNumber) {
      history.push(guessANumber);
      counter++;
      alert(`Sorry ${name}, Guess Higher`);
      guessANumber = prompt("Guess Again");
    } else if (guessANumber > correctNumber) {
      history.push(guessANumber);
      counter++;
      alert(`Sorry ${name}, Guess Lower`);
      guessANumber = prompt("Guess Again");
    }
  }

  // if (guessANumber == correctNumber) {
  history.push(guessANumber);
  alert(`That\'\s correct ${name}! Your previous guesses were ${history}!`);
  previousScore(name, history);
  resetGame();
  playAgain();

  // }
}

function resetGame() {
  history = [];
}
function playAgain() {
  let again = prompt("Do you want to play again? yes or no");
  if (again.toLowerCase() == "yes" || again.toLowerCase() == "y") {
    guessOnce();
  } else {
    return;
  }
}

function previousScore(name, history) {
  let attempts = history.length;
  if (!playerStats[name]) {
    playerStats[name] = attempts;
    alert(`Your new high score is ${attempts}`);
  } else if (attempts < playerStats[name]) {
    playerStats[name] = attempts;
    alert(
      `Your new highscore is ${attempts}. You beat beat your previous high score`
    );
  } else {
    alert(`You didn't beat your high score of ${playerStats[name]}`);
  }
}
guessOnce();
console.log(history);
