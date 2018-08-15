var fs = require('fs');
var word = require("./word.js");
var gArray = ["u"];
var inquirer = require("inquirer");
function onStart() {
    inquirer.prompt([
        {
          name: "uwu",
          message: "Guess a letter?"
        }, 
        
      ]).then(function(answers) {

        if(gArray.indexOf(answers.uwu)=== -1) {
        console.log("uwu whats this");
        gArray.push(answers.uwu);
        console.log(gArray);
        onStart();
          }else {
              console.log("your money declined");
              return;
          }
    });
}
word.getWord();
onStart();

