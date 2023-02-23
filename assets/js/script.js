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

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    userScoreSpan.innerText = "0";
    computerScoreSpan.innerText = "0";
    userScore = 0;
    computerScore = 0;
});

const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sciss");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");


function getComputerChoice() {
const choices = ['r', 'p', 'sciss', 'l', 'sp'];
const randomNumber = Math.floor(Math.random() * 5);
return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "sciss") return "Scissors";
    if (letter === "l") return "Lizard";
    return "Spock";
}

function win(userChoice, computerChoice) {
   
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 1500);
}



function lose(userChoice, computerChoice) {
    
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 1500);
}

function tie(userChoice, computerChoice) {
    
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a tie! `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1500);
}


/* 
Code to determine which weapon thrumps another
*/
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rsciss":
        case "rl":
        case "pr":
        case "psp":
        case "scissl":
        case "scissp":
        case "lsp":
        case "lp":
        case "spsciss":
        case "spr":
          win(userChoice, computerChoice);
          break;
        case "scissr":
        case "lr":
        case "rp":
        case "spp":
        case "lsicss":
        case "psciss":
        case "spl":
        case "pl":
        case "scisssp":
        case "rsp":
          lose(userChoice, computerChoice);
          break;
        case "rr":
        case "pp":
        case "scisssciss":
        case "ll":
        case "spsp":
          tie(userChoice, computerChoice);
          break;
    }


}

function main() {
    rock_div.addEventListener('click', function() {
    game("r");
});
    paper_div.addEventListener('click', function() {
    game("p");
});
    scissors_div.addEventListener('click', function() {
    game("sciss");
});
    lizard_div.addEventListener('click', function() {
    game("l");
});
    spock_div.addEventListener('click', function() {
    game("sp");
});
}

main();

