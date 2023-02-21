let userScore = 0;
let computerScore = 0;

const modal = document.querySelector(".modal");
const helpBtn = document.querySelector("#help");
const closeBtn = document.querySelector(".close");

helpBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");// not used anywhere????????????
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sciss");

function getComputerChoice() {
const choices = ['r', 'p', 'sciss'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
   
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}



function lose(userChoice, computerChoice) {
    
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function tie(userChoice, computerChoice) {
    
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a tie! `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rsciss":
        case "pr":
        case "scissp":
          win(userChoice, computerChoice);
          break;
        case "rp":
        case "psciss":
        case "scissr":
          lose(userChoice, computerChoice);
          break;
        case "rr":
        case "pp":
        case "scisssciss":
          tie(userChoice, computerChoice);
          break;
    }


}

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