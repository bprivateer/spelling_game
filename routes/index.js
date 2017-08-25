const express = require("express");
const router = express('router');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

let word;
let example = "bernadette";
let underS = "__________";
// let underScore;
let guess;
let numberOfTurn;
let wordArray;
let underScore = [];
let wrongGuess = [];
// let wrongCount = [];
let numGuess;

  function random() {
    return words[ Math.floor(Math.random() * words.length)];
  }

router.get('/', function(req, res){

word = random();
wordArray = word.split("");
console.log("wordArray", wordArray);
underScore = [];
wrongGuess = [];
 for (var i = 0; i < word.length; i ++){
  underScore.push("_");
 }
console.log("word", word);
  res.render("game", {word: underScore})
})


router.post('/game', function(req, res, next){
  let guess = req.body.guess;
  let guessIndex = word.indexOf(guess);


  console.log('guessIndex: ', guessIndex);

  console.log("wordarray", wordArray, underScore, wrongGuess, numGuess);

  wordArray.forEach(function(char, index){
    if(char == guess){
      underScore[index] = guess;
      console.log("REQ", req.session);
    }

  });
  if(guessIndex == -1){ // checks to see if guess is incorrect
    // numGuess = 7 - wrongGuess.length;
    console.log("COUTN WROG", numGuess);

let sameGuessWrong = wrongGuess.indexOf(guess);
    if(sameGuessWrong == -1){ // checks to see if theyve guessed wrong more than once
      wrongGuess.push(guess)
      numGuess = 8 - wrongGuess.length;

    } else {

    }
  }
  if (wrongGuess.length >= 8){

    res.redirect('/')
  }


  res.render('game', {word: underScore, wrong: wrongGuess, count: numGuess,})
  return false
})



module.exports = router;
