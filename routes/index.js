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
})

// router.get('/game', function(req, res, next){
//   if (req.session.token){
//     next()
//   } else if (req.session.token > 8){
//     res.redirect('/');
//   }
//   res.render("game", {word: underScore, wrong: wrongGuess, token: token})
// })

router.post('/game', function(req, res, next){
  let guess = req.body.guess;
  let guessIndex = word.indexOf(guess);


  console.log('guessIndex: ', guessIndex);

console.log("wordarray", wordArray, underScore, wrongGuess);


  wordArray.forEach(function(char, index){
    if(char == guess){
      underScore[index] = guess;
      req.session.guesses = 8;
      console.log("REQ", req.session);
    }
  })
  if(guessIndex == -1){
    wrongGuess.push(guess)
    // return req.session.guesses - 1;
    // req.session.token = "";
  }
  if (wrongGuess.length > 8){
    res.redirect('/')
  }
  // } else if (wrongGuess.length > 8){
  //   req.session.token = '';
  //   res.redirect('/')
  //   // console.log("REA.SESSION.TOKEN", req.session.token);
  //   console.log("wrongguess", wrongGuess);
  // } else {
  //
  // }

  res.render('game', {word: underScore, wrong: wrongGuess , token: req.session.guesses, })
})
// router.get('/game', function(req, res, next){
//   if (req.session.token){
//     next()
//   } else if (req.session.token > 8){
//     res.redirect('/');
//   }
//
//   }
//   res.render("game", {word: underScore, wrong: wrongGuess })
// })
module.exports = router;
