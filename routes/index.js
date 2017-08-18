const express = require("express");
const router = express('router');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

let word;
let example = "bernadette";
let underS = "__________";
let underScore;
let guess;
let numberOfTurn;

  function random() {
    return words[ Math.floor(Math.random() * words.length)];
  }

router.get('/', function(req, res){

word = random();
let wordArray = word.split("");
console.log("wordArray", wordArray);
let underScore = [];
 for (var i = 0; i < word.length; i ++){
  underScore.push("_");
 }
console.log("word", word);
  res.render("game", {word: underScore})
  console.log(wordArray[3]);
})

router.post('/game', function(req, res){
  let guess = req.body.guess;
  let guessIndex = word.indexOf(guess);


  // if (index !== -1){
  // underScore.splice(wordArray[i], guessArray)

  // }

  console.log('guessIndex: ', guessIndex);
  // underS[index] = guess;
  // console.log('underS ', underS);
  // underScore.splice(index, 1);
})
module.exports = router;
