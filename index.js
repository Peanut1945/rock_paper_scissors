let compnum = 0
let compvalue = ""
let winner = ""
let condition = ""
let playercount = 0
let copmutercount = 0
let play = ""
let end = false


function computerchoice(){
    compnum = Math.random()
    console.log(compnum)
    if(compnum <= 0.3333){
        compvalue = "SCISSORS"
    }else if(compnum >= 0.3333 && compnum <= 0.6666){
        compvalue = "ROCK"
    }else {
        compvalue = "PAPER"
    }
    console.log(compvalue)

}
function comparison(playeroption,computerchoice){
    console.log(playeroption)
    if (playeroption == "ROCK"){
        if (computerchoice == "SCISSORS"){
            winner = "player wins! "
            playercount ++
            condition = "rock beats scissors"
        }else if (computerchoice == "PAPER"){
            winner = "computer wins! "
            copmutercount ++
            condition = "paper beats rock"
        }else{
            winner = "its a tie "
            condition = "rock ties with rock"
        }
    }else if (playeroption == "SCISSORS"){
        if (computerchoice == "PAPER"){
            winner = "player wins! "
            playercount ++
            condition = "scissors beats paper"
        }else if (computerchoice == "ROCK"){
            winner = "computer wins! "
            copmutercount ++
            condition = "rock beats scissors"
        }else{
            winner = "its a tie "
            condition = "scissors tie with scissors"
        }
    }else if (playeroption == "PAPER"){
        if (computerchoice == "ROCK"){
            winner = "player wins! "
            playercount ++
            condition = "paper beats rock"
        }else if (computerchoice == "SCISSORS"){
            winner = "computer wins! "
            copmutercount ++
            condition = "scissors beats paper"
        }else{
            winner = "its a tie "
            condition = "paper ties with paper"
        }
    }

}
function games(){
    for (let i=0;i<=4;i++){
        play = prompt("enter rock paper or scissors")
        play = play.toUpperCase()
        computerchoice()
        compvalue = compvalue.toUpperCase()
        comparison(play,compvalue)
        if (winner == "player wins! "){
            playercount++
        }else if (winner == "computer wins! "){
            copmutercount++
        }
        console.log(winner + condition)
        console.log("player: ", playercount)
        console.log("computer: ", copmutercount)
    }
}
//this function if for adding a winner to the winner in the middle of the page

function appendroundwinner(){
    
    roundAwnser.textContent = winner
    conditionAwnser.textContent = condition
}
function gameover (){
    if(playercount == 5 || copmutercount == 5){
        roundAwnser.textContent = "game over"
        if ( playercount > copmutercount){
            totaleWinnerBox.textContent = "Player wins! well done! re-start to play again"
            console.log("i like the player")
        }
        if ( copmutercount > playercount){
            totaleWinnerBox.textContent = "computer wins! please re-load to try again"
            console.log("ilike the computer")
        }
    }

}

//here are all of my query selectors
const buttons = document.querySelectorAll("button")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const roundAwnser = document.querySelector(".awnser")
const conditionAwnser = document.querySelector(".condition")
const totaleWinnerBox = document.querySelector(".total-winner-box")
//event listeners
buttons.forEach( button => {
    button.addEventListener("mousedown",() => {
        button.classList.add('button-down')

    })
})


rock.addEventListener("mouseup", () => {
    rock.classList.remove("button-down")
    if (playercount <5 && copmutercount <5 ){
        computerchoice()
        comparison("ROCK",compvalue)
        console.log(playercount)
        console.log(copmutercount)
        if (playerScore != playercount){
            playerScore.textContent = playercount
        }
        if (computerScore != copmutercount){
            computerScore.textContent = copmutercount
        }
        if(playercount <6 && copmutercount <6){
            console.log(winner)
        }
        appendroundwinner()
    }
    gameover ()
})
paper.addEventListener("mouseup", () => {
    paper.classList.remove("button-down")
    if (playercount <5 && copmutercount <5){
        computerchoice()
        comparison("PAPER", compvalue)
        console.log(winner)
        if (playerScore != playercount){
            playerScore.textContent = playercount
        }
        if (computerScore != copmutercount){
            computerScore.textContent = copmutercount
        }
        appendroundwinner()
    }
    gameover ()
})
scissors.addEventListener("mouseup", () => {
    scissors.classList.remove("button-down")
    if (playercount <5 && copmutercount <5){
        computerchoice()
        comparison("SCISSORS", compvalue)
        console.log(winner)
        if (playerScore != playercount){
            playerScore.textContent = playercount
        }
        if (computerScore != copmutercount){
            computerScore.textContent = copmutercount
        }
        appendroundwinner()
    }
    gameover ()
})


buttons.forEach( button => {
    button.addEventListener("mouseenter", () => {
        button.classList.add('hover')
    })
})
buttons.forEach( button => {
    button.addEventListener("mouseleave", () => {
        button.classList.remove('hover')
        button.classList.remove("button-down")
    })
})
//im just running initial codes down here pls dont look
//here is am going to make the point counters
const playerScore = document.querySelector(".player-score")
const computerScore = document.querySelector(".computer-score")

playerScore.textContent = playercount
computerScore.textContent = copmutercount
//for the scores
roundAwnser.textContent = "play to see who wins"
conditionAwnser.textContent = condition

totaleWinnerBox.textContent = "winner goes here"

