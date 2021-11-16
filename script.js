let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}

const compareGuesses = (user,computer,secret) => {
    if (Math.abs(user-secret) < Math.abs(computer-secret)){
        return true;
    }
    else if (Math.abs(user-secret) > Math.abs(computer-secret)){
        return false;
    }
    else {
        return true;
    }
}

const updateScore = winner => {
    if(winner=='human'){
        humanScore+=1
    }
    else{
        computerScore+=1
    }
}

function advanceRound(){
    currentRoundNumber+=1;
}