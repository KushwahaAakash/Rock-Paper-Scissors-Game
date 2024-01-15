//  0  Staring of the Game
let userScore = 0;
let compScore = 0;

// 1 Choices for the user and comp Access
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// 6 Access of both of the choices(user and comp)
const userscorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//  3 Computer Choices Selection Function
const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


//  5 Draw Game Function
const drawGame = () => {
    msg.innerText ="Game was Draw Play Again ";
    msg.style.backgroundColor = "#081b31";
};


//  7 Show winner function
const showWinner = (userwin,userchoice,compChoice) => {
    if(userwin ){
        userScore++;
        userscorePara.innerText = userScore;
        msg.innerText =`You Win Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lost ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
};


//  4 Play Game Function
const playGame = (userchoice) => {
    const compChoice = genCompchoice();


    // Possibilities of the Games 
    if (userchoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissors paper
            userwin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // rock scissors
            userwin = compChoice === "scissors" ? false : true;
        } else {
            // rock paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
};


//  2 Choice Selection from User
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
