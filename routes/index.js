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



  function random() {
    return words[ Math.floor(Math.random() * words.length)];
  }

router.get('/', function(req, res){

word = random();
wordArray = word.split("");
console.log("wordArray", wordArray);
underScore = [];
 for (var i = 0; i < word.length; i ++){
  underScore.push("_");
 }
console.log("word", word);
  res.render("game", {word: underScore})
  console.log(wordArray.indexOf());
})

router.post('/game', function(req, res){
  let guess = req.body.guess;
  let guessIndex = word.indexOf(guess);


  console.log('guessIndex: ', guessIndex);

console.log("wordarray", wordArray, underScore);
  wordArray.forEach(function(char, index){
    if(char == guess){
      underScore[index] = guess;
    }
  })
  if(guessIndex == -1){
    wrongGuess.push(guess);
  }

  res.render('game', {word: underScore, wrong: wrongGuess })
})
module.exports = router;

if(wrongGuess.length > 8 ){
  req.session = 0;
  
}
