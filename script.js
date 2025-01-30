let userScore = 0 ;
let botScore = 0 ;

const choice =  document.querySelectorAll(".imgDiv");
const msgPrint = document.querySelector("#msg");
const userScorePara = document.querySelector("#User");
const botScorePara = document.querySelector("#Bot");

const genCompChoice = () => {
    const options = ["img1","img2","img3"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const drawGame = () => {
    console.log("Draw Game");
    msgPrint.innerText = "DRAW game!";
    msgPrint.style.backgroundColor ="black";
}
const showWinner = (userWin,choice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msgPrint.innerText = "You Win!";
        msgPrint.style.backgroundColor = "green";
    }else{
        botScore++;
        botScorePara.innerText = botScore;
        console.log("you lose");
        msgPrint.innerText = "You Lose!";
        msgPrint.style.backgroundColor ="red";
    }
}
const playGame = (choice) => {
    console.log("user choice = ",choice);
    const compChoice = genCompChoice();
    console.log("Comp choice =",compChoice);

    if(choice === compChoice){
        drawGame();
    }else{
        let userWin = true ;
        if(choice === "img1"){
            // img2,img3
            userWin = compChoice === "img2" ? true :false;
        }else if(choice === "img2"){
            userWin = compChoice === "img3" ? true :false ;
        }else{
            userWin = compChoice === "img1" ? true :false ;
        }
        showWinner(userWin);
    }
};

choice.forEach((imgDiv) => {
    imgDiv.addEventListener("click", () => {
        const imgId = imgDiv.getAttribute("id");
        playGame(imgId);
    });
});
