let choices = document.querySelectorAll('.option');
let msgText = document.querySelector('.msg');
let userScore = 0;
let compScore = 0;

const generateComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * options.length);
    return options[i];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        document.querySelector(".user-score").innerText = userScore;
        msgText.innerText = `User wins 🏆. ${userChoice} beats ${compChoice}`;
        msgText.style.background = "green";
    } else {
        compScore++;
        document.querySelector(".comp-score").innerText = compScore;
        msgText.innerText = `Computer wins! 💣. ${userChoice} can't beat ${compChoice}`;
        msgText.style.background = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = generateComputerChoice();
    // Simple native if else method:
    // if(userChoice === compChoice) {
    //     console.log("it's Draw");
    // } else if((userChoice === "rock" && compChoice === "scissors") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissors" && compChoice === "paper")) {
    //     console.log("user wins");
    // } else {
    //     console.log("computer wins");
    // }

    if (userChoice === compChoice) {
        msgText.innerText = "It's Draw! 🏳️. Play Again";
        msgText.style.background = "#ff8c00";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper, scissors
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "rock" ? true : false;
        } else {
            // rock, paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const choiceId = choice.getAttribute('id');
        playGame(choiceId);
    });
});

document.querySelector(".reset-btn").addEventListener('click', () => {
    location.reload();
});