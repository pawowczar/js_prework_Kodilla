const  buttonPaper = document.getElementById("button-paper"), buttonRock = document.getElementById("button-rock"), buttonScissors = document.getElementById("button-scissors");

buttonRock.addEventListener("click", function () {
  buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});

buttonScissors.addEventListener("click", function () {
  buttonClicked("nożyce");
});


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + " został kliknięty");

  let computerMove;
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("wylosowana liczba to: " + randomNumber);
  if (randomNumber == "1") {
    computerMove = "kamień";
  } else if (randomNumber == "2") {
    computerMove = "papier";
  } else if (randomNumber == "3") {
    computerMove = "nożyce";
  }

  console.log('Ruch komputera to:' + computerMove);
  /**
   * Describe this function...
   */

  function getMoveName(argMoveId) {
    console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage(
        "Nie znam ruchu o id " +
          argMoveId +
          '. Zakładam, że chodziło o "kamień".'
      );
      return "kamień";
    }
  }
  /**
   * Describe this function...
   */
let playerMove, playerInput;

  function displayResult(argPlayerMove, argComputerMove) {
    
    console.log(
      "wywołano funkcję displayResults z argumentami: " +
        argPlayerMove +
        ", " +
        argComputerMove
    );
  
    if (argPlayerMove == "papier" && argComputerMove == "kamień") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == argComputerMove && true) {
      printMessage("Remis");
    } else {
      printMessage("Przegrywasz :(");
    }
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  }
  playerInput = argButtonName;
  playerMove = playerInput;
  
  displayResult(playerMove, computerMove);
}


