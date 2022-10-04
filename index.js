let compnum = 0
let compvalue = ""
let winner = ""
let condition = ""
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
            winner = "player wins!"
            condition = "rock beats scissors"
        }else if (computerchoice == "PAPER"){
            winner = "computer wins! "
            condition = "paper beats rock"
        }
        else{
            winner = "its a tie: "
            condition = "paper ties with paper"
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
            condition = "rock ties with rock"
        }
    }

}
let play = prompt("enter rock paper or scissors")
play = play.toUpperCase()
computerchoice()
console.log(compnum)
console.log(compvalue)
compvalue = compvalue.toUpperCase()
comparison(play,compvalue)
console.log(winner + condition)