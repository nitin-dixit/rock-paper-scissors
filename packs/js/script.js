function computerPlay() {
  let options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
}

// let computerSelection = computerPlay();
// let playerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ["Oh! it's a tie :(", 0];
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return [`You Lose! ${computerSelection} beats ${playerSelection}.`, -1];
    } else {
      return [`You Won! ${playerSelection} beats ${computerSelection}.`, 1];
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      return [`You Lose! ${computerSelection} beats ${playerSelection}.`, -1];
    } else {
      return [`You Won! ${playerSelection} beats ${computerSelection}.`, 1];
    }
  } else {
    //player selection === scissor
    if (computerSelection === "rock") {
      return [`You Lose! ${computerSelection} beats ${playerSelection}.`, -1];
    } else {
      return [`You Won! ${playerSelection} beats ${computerSelection}.`, 1];
    }
  }
}

function game() {
  //play for 5 rounds
  let playerPoints = 0,
    computerPoints = 0,
    result = "",
    resultPoints = 0;
  for (let index = 0; index < 5; index++) {
    [result, resultPoints] = playRound(computerPlay(), computerPlay());
    if (resultPoints === 1) {
      playerPoints++;
    } else if(resultPoints === -1) {
      computerPoints++;
    }

    console.log(`${result} [You:${playerPoints} | Comp:${computerPoints}]`);
  }

  if (playerPoints > computerPoints) {
    console.log("Hurray! you won 😁");
  } else {
    console.log("Oh oh! you lost to a fucking machine 😆");
  }
}

game();
