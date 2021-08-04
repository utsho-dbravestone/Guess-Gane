var wins = 0;
var loses = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function theGame() {
  var numb = getRandomIntInclusive(0, 10);
  var c = 3;
  var Guess = window.prompt("Enter a Guess:- ");
  if (Guess == numb) {
    alert ("YOU GOT ME!!!");
    wins ++;
  } else if (Guess != null) {
    if (Guess > numb) {
      alert ("Guess was too High! ");
      c--;
    } else if (Guess < numb) {
      alert("Guess was too Low! ");
      c--;
    }
    while (Guess != numb && c > 0) {
      alert (c + " Change(s) Left...");
      Guess = window.prompt("Enter a Guess:- ");
      if (Guess > numb && Guess != null) {
        alert ("Guess was too High");
      } else if (Guess < numb && Guess != null) {
        alert("Guess was too Low!");
      } else if (Guess == numb) {
        alert ("YOU GOT ME!!!");
        wins ++;
      } else {
        alert ("You must enterd other than a number!")
        break;
      }
      c--;
    }
    if (c <= 0 && Guess != numb) {
      alert ("No Change Left! YOU LOSE!!!");
      alert ("The secret number was;- " + numb)
      loses ++;
    }
  }
}

function history () {
  alert ("You won " + wins + " matches " + "and lose " + loses + " matches");
}

function credits () {
  alert ("Created by UTSHO D'BRAVESTONE");
}

function reset() {
  loses = 0;
  wins = 0;
  alert ("History Reseated.");
}

function theCP () {
  alert ("Guess a number between 0 and 10. Andet Computer find that number...");
  var numb = getRandomIntInclusive(0, 10);
  var GuessCondition = window.prompt("Computer Astimate " + numb + ". How close it was?");
  while (GuessCondition != "c") {
    if (GuessCondition == "h") {
      GuessCondition = window.prompt("Computer Astimate " + numb-2 + ". How close it was?");
    } else if (GuessCondition == "l") {
      let numb2 = getRandomIntInclusive(numb, 10);
      GuessCondition = window.prompt("Computer Astimate " + numb+2 + ". How close it was?");
    }
  }
  if (GuessCondition == "c") {
    alert ("Computer Got You");
  }
}