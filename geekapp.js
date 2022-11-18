// app.js

// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
    // Function to
    const playGame = () => {
      const rockBtn = document.querySelector(".rock");
      const paperBtn = document.querySelector(".paper");
      const scissorBtn = document.querySelector(".scissor");
      const lizardBtn = document.querySelector(".lizard");
      const spockBtn = document.querySelector(".spock");
      const playerOptions = [rockBtn, paperBtn, scissorBtn, lizardBtn, spockBtn];
      const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
  
      // Function to start playing game
      playerOptions.forEach((option) => {
        option.addEventListener("click", function () {
          const movesLeft = document.querySelector(".movesleft");
          moves++;
          movesLeft.innerText = `Moves Left: ${10 - moves}`;
  
          const choiceNumber = Math.floor(Math.random() * 5);
          const computerChoice = computerOptions[choiceNumber];
  
          // Function to check who wins
          winner(this.innerText, computerChoice);
  
          // Calling gameOver function after 10 moves
          if (moves == 10) {
            gameOver(playerOptions, movesLeft);
          }
        });
      });
    };
  
    // Function to decide winner
    const winner = (player, computer) => {
      const result = document.querySelector(".result");
      const playerScoreBoard = document.querySelector(".p-count");
      const computerScoreBoard = document.querySelector(".c-count");
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      if (player === computer) {
        result.textContent = "Tie";
        console.log("Both Chose the same, tie");
      } else if (player == "rock") {
        if (computer == "paper") {
          result.textContent = "Computer Won";
          computerScore++;
          computerScoreBoard.textContent = computerScore;
          console.log("Player Chose rock, Computer chose paper, computer wins");
        } else if (computer == "scissors") {
          result.textContent = "Player Won";
          playerScore++;
          playerScoreBoard.textContent = playerScore;
          console.log("Player Chose rock, Computer chose scissors, player wins");
        } else if (computer == "lizard") {
          result.textContent = "Player Won";
          playerScore++;
          playerScoreBoard.textContent = playerScore;
          console.log("Player Chose rock, Computer chose lizard, player wins");
        } else {
          result.textContent = "Player Won";
          playerScore++;
          playerScoreBoard.textContent = playerScore;
          console.log("Player Chose rock, Computer chose spock, player wins");
        }
      } else if (player == "scissors") {
        if (computer == "rock") {
          result.textContent = "Computer Won";
          computerScore++;
          computerScoreBoard.textContent = computerScore;
          console.log("Player Chose scissors, Computer chose rock, computer wins");
        } else if (computer == "paper") {
          result.textContent = "Player Won";
          playerScore++;
          playerScoreBoard.textContent = playerScore;
          console.log("Player Chose scissors, Computer chose paper, player wins");
        } else if (computer == "lizard") {
          result.textContent = "Player Won";
          playerScore++;
          playerScoreBoard.textContent = playerScore;
          console.log("Player Chose scissors, Computer chose lizard, player wins");
        } else {
          result.textContent = "Computer Won";
          computerScore++;
          computerScoreBoard.textContent = computerScore;
          console.log("Player Chose scissors, Computer chose spock, computer wins");
        }
      } else if (player == "paper") {
        if(computer == "rock"){
          result.textContent = 'Player Won';
          playerScore++;
          playerScoreBoard.textContent = playerScore;
          console.log("Player Chose paper, Computer chose rock, player wins");
      } else if (computer == "scissors") {
          result.textContent = "Computer Won";
          computerScore++;
          computerScoreBoard.textContent = computerScore;
          console.log("Player Chose paper, Computer chose scissors, computer wins");
      } else if (computer == "lizard") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
        console.log("Player Chose paper, Computer chose lizard, computer wins");
      } else{
        result.textContent = 'Player Won';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
        console.log("Player Chose paper, Computer chose spock, player wins");
      }
         } else if (player == "lizard") {
          if (computer == "rock") {
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            console.log("Player Chose lizard, Computer chose rock, computer wins");
          } else if (computer == "paper") {
              result.textContent = 'Player Won';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
              console.log("Player Chose lizard, Computer chose paper, player wins");
          } else if (computer == "scissors") {
              result.textContent = "Computer Won";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
              console.log("Player Chose lizard, Computer chose scissors, computer wins");
          } else {
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            console.log("Player Chose lizard, Computer chose spock, computer wins");
          }
         }
    };
  
    // Function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {
      const chooseMove = document.querySelector(".move");
      const result = document.querySelector(".result");
      const reloadBtn = document.querySelector(".reload");
  
      playerOptions.forEach((option) => {
        option.style.display = "none";
      });
  
      chooseMove.innerText = "Game Over!!";
      movesLeft.style.display = "none";
  
      if (playerScore > computerScore) {
        result.style.fontSize = "2rem";
        result.innerText = "You Won The Game";
        result.style.color = "#308D46";
      } else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = "red";
      } else {
        result.style.fontSize = "2rem";
        result.innerText = "Tie";
        result.style.color = "grey";
      }
      reloadBtn.innerText = "Restart";
      reloadBtn.style.display = "flex";
      reloadBtn.addEventListener("click", () => {
        window.location.reload();
      });
    };
  
    // Calling playGame function inside game
    playGame();
  };
  
  // Calling the game function
  game();
  