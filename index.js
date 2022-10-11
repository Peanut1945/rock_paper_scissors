let compnum = 0
let compvalue = ""
let winner = ""
let condition = ""
let playercount = 0
let copmutercount = 0
let play = ""


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
    console.log(computerchoice)
    console.log(playeroption)
    if (playeroption == "ROCK"){
        if (computerchoice == "SCISSORS"){
            winner = "player wins! "
            condition = "rock beats scissors"
        }else if (computerchoice == "PAPER"){
            winner = "computer wins! "
            condition = "paper beats rock"
        }else{
            winner = "its a tie: "
            condition = "rock ties with rock"
        }
    }else if (playeroption == "SCISSORS"){
        if (computerchoice == "PAPER"){
            winner = "player wins! "
            condition = "scissors beats paper"
        }else if (computerchoice == "ROCK"){
            winner = "computer wins! "
            condition = "rock beats scissors"
        }else{
            winner = "its a tie: "
            condition = "scissors tie with scissors"
        }
    }else if (playeroption == "PAPER"){
        if (computerchoice == "ROCK"){
            winner = "player wins! "
            condition = "paper beats rock"
        }else if (computerchoice == "SCISSORS"){
            winner = "computer wins! "
            condition = "scissors beats paper"
        }else{
            winner = "its a tie: "
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


const buttons = document.querySelectorAll("button")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

//event listeners
buttons.forEach( button => {
    button.addEventListener("mousedown",() => {
        button.classList.add('button-down')

    })
})


rock.addEventListener("mouseup", () => {
    rock.classList.remove("button-down")
    computerchoice()
    comparison("ROCK",compvalue)
    console.log(winner)
})
paper.addEventListener("mouseup", () => {
    paper.classList.remove("button-down")
    computerchoice()
    comparison("PAPER", compvalue)
    console.log(winner)
})
scissors.addEventListener("mouseup", () => {
    scissors.classList.remove("button-down")
    computerchoice()
    comparison("SCISSORS", compvalue)
    console.log(winner)
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

