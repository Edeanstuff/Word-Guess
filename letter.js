var inquirer = require("inquirer");
var gArray = ["u"];
function Letter(letterph, guessed) {
    this.letterph = letterph;
    this.guessed = ifGuessed;
    this.storeLetters = function() {
    }
}
function onStart() {
    inquirer.prompt([
        {
          name: "uwu",
          message: "Guess is a letter?"
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
