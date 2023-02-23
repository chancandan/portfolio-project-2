/** 
 * Decalre two variables to keep track of the 
 * scores of the user and the computer. 
*/

let userScore = 0;
let computerScore = 0;


/** 
 * These lines handle my modal window that appear when the user
 * clicks on the help button. There are 3 event listener lines of
 * code to show or hide the modal when the user interacts with them.
*/

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


/**
 * These lines of code select elements from the HTML page that will
 * display the scores and the rest button. The 'resetButton' element
 * is assigned a click event listener that rests the scores to zero
 * when clicked.
 */

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    userScoreSpan.innerText = "0";
    computerScoreSpan.innerText = "0";
    userScore = 0;
    computerScore = 0;
});


/* Variables decalred for each weapon. */

const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sciss");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");


/** 
* This function generates a random choice for the computer. 
* It add selects a random number between 0 and 4 and then 
* uses it to index into an array of game weapons. 
*/

function getComputerChoice() {
const choices = ['r', 'p', 'sciss', 'l', 'sp'];
const randomNumber = Math.floor(Math.random() * 5);
return choices[randomNumber];
}

/**
 * This function converts the game weapons
 * from their one-letter codes into their
 * full names to later display to the user.
 */

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "sciss") return "Scissors";
    if (letter === "l") return "Lizard";
    return "Spock";
}


/**
 * This next function below is called when the user wins a round. 
 * It receives the user's and computer's choices as parameters. It gets
 * the HTML element that represents the user's choice, increments the user's
 * score, updates the score display on the page, and shows a message with the 
 * result of the round. It will also add a green glow effect to the user's 
 * choice element that will last for 1.5 seconds and then disappear.
 */

function win(userChoice, computerChoice) {
   
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 1500);
}


/**
 * This next function does the same as the win function above but
 * this time will update the device's score when it wins a round.
 * Again, a glow effect is added to the uer's choice element for
 * 1.5 seconds but this time it will be red to represent a loss.
 */

function lose(userChoice, computerChoice) {
    
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 1500);
}


/**
 * This function is called when there is a tie. No updates 
 * are sent to the score board as there was no winner. 
 * A gray glow for 1.5 seconds appears to show this result. 
 */

function tie(userChoice, computerChoice) {
    
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a tie! `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1500);
}


/**
 * This important block of code defines a function called 'game', which takes 'userChoice' as an
 * argument. Inside the 'game' function there is a switch statement that determines the outcome of
 * the game based on the combination of userChoice and computerChoice values. It's a very tidy way
 * of writing this code and keeps it short and neat. If the combination of userChoice and computerChoice 
 * matches one of the cases listed in the switch statement then either the 'win', 'lose' or 'tie' function
 * is called with their respected arguments. The line 'break' is very important to move onto the next section. 
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


/**
 * This function adds event listeners to each of the elements listed within.
 * When one of the elements is clicked it then goes and calls the 'game'
 * function with the corresponding choice.
 */

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

