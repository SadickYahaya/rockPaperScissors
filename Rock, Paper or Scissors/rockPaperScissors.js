const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" || userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error");
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else if (randomNumber === 2) {
      return "scissors";
    } else {
      console.log("Error");
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
     if (userChoice === "bomb") {
      return "User Won";
    }
    if (userChoice === computerChoice) {
      return "It was a tie";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Won";
      } else {
        return "You Won";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "You Won";
      } else {
        return "Computer Won";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Won";
      } else {
        return "You Won";
      }
    }
  };
  
  const playGame = () => {
     const userChoice = getUserChoice('Bomb');
     const computerChoice = getComputerChoice();
     console.log('You played: ' + userChoice);
     console.log('The computer played:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };
   
  playGame();
  
  
  