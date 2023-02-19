const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sciss");

function getComputerChoice() {
const choices = ['r', 'p', 'sciss'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rsciss":
        case "pr":
        case "scissp":
          console.log("USER WINS");
          break;
        case "rp":
        case "psciss":
        case "scissr":
          console.log("USER LOSES");
          break;
        case "rr":
        case "pp":
        case "scisssciss":
          console.log("Tie!");
          break;
    }


}

game("c");

function main() {
    rock_div.addEventListener('click', function() {
    game("r");
})

    paper_div.addEventListener('click', function() {
    game("p");
})

    scissors_div.addEventListener('click', function() {
    game("sciss");
})
}

main();