let computerPlay = () => {
    let random = Math.random();
    if (random < 0.3) {
      return "Rock";
    }
    else if (random >= 0.3 && random <= 0.6) {
      return "Paper";
    }
    else {
      return "Scissors";
    }
  }

  let playRound = (playerSelection, computerSelection) => {
    let playerSelectionSanitized = playerSelection.toLowerCase();
    playerSelectionSanitized = playerSelectionSanitized[0].toUpperCase() + playerSelectionSanitized.slice(1);
    
    if (playerSelectionSanitized === computerSelection) {
      return ["You draw!", 0];
    }
    else if (playerSelectionSanitized === "Rock" && computerSelection === "Paper") {
      return ["You lose! Paper beats rock.", -1];
    }
    else if (playerSelectionSanitized === "Rock" && computerSelection === "Scissors") {
      return ["You win! Rock beats scissors.", 1];
    }
    else if (playerSelectionSanitized === "Paper" && computerSelection === "Rock") {
      return ["You win! Paper beats Rock.", 1];
    }
    else if (playerSelectionSanitized === "Paper" && computerSelection === "Scissors") {
      return ["You lose! Scissors beats paper.", -1];
    }
    else if (playerSelectionSanitized === "Scissors" && computerSelection === "Rock") {
      return ["You lose! Rock beats paper.", -1];
    }
    else if (playerSelectionSanitized === "Scissors" && computerSelection === "Paper") {
      return ["You win! Scissors beats paper.", 0];
    }

    else {
        return ["Error! Please spell either rock, paper or scissors.", 0];
    }
  }

  let game = () => {
    console.log("Let's start the game! Pick either 'rock', 'paper' or \n\
    'scissors' by writing it out in the console when prompted. This game \n\
    will last 5 rounds.")

    let score = 0;
    let round = 1
    while (round < 5) {
      const userInput = window.prompt();
      const computerInput = computerPlay();
      const result = playRound(userInput, computerInput);

      score += result[1];

      console.log("Round: " + round + "\n"
      + "User picks: " + userInput + "\n" 
      + "Computer picks: " + computerInput + "\n"
      + result[0]);

      if (Math.abs(score) === 3) { break; };
      if (result[1] !== 0) { round++; };
    }

    return (score > 0 ? "Player wins!" : "Computer wins!");
  }