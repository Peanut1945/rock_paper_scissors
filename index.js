let compnum = 0
let compvalue = ""
let winner = ""
let condition = ""
let playercount = 0
let copmutercount = 0
let play = ""


function computerchoice(){
    compnum = Math.random()
    if(compnum <= 0.3333){
        compvalue = "scissors"
    }else if(compnum >= 0.3333 && compnum <= 0.6666){
        compvalue = "rock"
    }else {
        compvalue = "paper"
    }

}
function comparison(playeroption,computerchoice){
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

games()