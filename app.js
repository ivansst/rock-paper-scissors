const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        playerHand.src = `./assets/${this.textContent}.png`;

        //PC Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        computerHand.src = `./assets/${computerChoice}.png`;

        //Determine winner
        compareHands(this.textContent, computerChoice, computerOptions);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice, options) => {
    const winner = document.querySelector(".winner");

    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    }

    if (playerChoice === options[0]) {
      if (computerChoice === options[2]) {
        winner.textContent = "You win!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
      }
    }

    if (playerChoice === options[1]) {
      if (computerChoice === options[0]) {
        winner.textContent = "You win!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === options[2]) {
      if (computerChoice === options[1]) {
        winner.textContent = "You win!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
