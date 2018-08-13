var letter = require('./letter.js');
var commonWords = [
    "some", "her", "would", "make", "like", "him", "into", "time", "has",
    "look", "two", "more", "write", "go", "see", "number", "no", "way",
    "could", "people", "my", "than", "first", "water", "been", "call",
    "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get",
    "come", "made", "may", "part"
  ];
  var inquirer = require("inquirer");
var getRandomWord = function(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  