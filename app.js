let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

const userScorepar = document.querySelector("#user-score");

const compScorepar = document.querySelector("#comp-score");

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play Again. "
    msg.style.backgroundColor = "#081b31";
    msg.innerHTML += '<i class="fa-regular fa-face-meh"></i>';
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScorepar.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        msg.innerHTML += '<i class="fa-regular fa-face-laugh-beam"></i>';
    }
    else{
        compScore++;
        compScorepar.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
        msg.innerHTML += '<i class="fa-regular fa-face-sad-tear"></i>';
        
    }
}
const gencompChoice = () =>{
    const options = ["stone","paper", "scissor"];
    const rendIdx = Math.floor(Math.random()*3);
    return options[rendIdx];
}
const playGame = (userChoice)=>{
    //generate computer choice
    const compChoice = gencompChoice()
    
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp choices must will be paper or scissor
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice==="rock" ? true : false;
        }
        else{
            //rock, paper
            userWin = compChoice==="rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("Id")
    playGame(userChoice);
    });
});
