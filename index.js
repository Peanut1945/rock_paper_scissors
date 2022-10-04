let compnum = 0
let compvalue = ""
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

}
computerchoice()
console.log(compnum)
console.log(compvalue)