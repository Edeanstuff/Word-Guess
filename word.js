var letter = require('./letter.js');
var index = require("./index.js");
var inquirer = require("inquirer");

var choosenword;
var number = 1;
//Math.floor(Math.random() * 5)
var underScore = ["_", "_", "_", "_" , "_ _ _ _","_ _ _ _ _ _", "_ _ _ _ _", "_ _ _"];
var commonWords = [
    "cool", "game", "pillow", "other", "uwu"
  ];
  function getWord() {
    var choosenword= commonWords[1];
    if(number = 1) {
      console.log(underScore[0], underScore[1], underScore[2], underScore[3]);
    }
  }