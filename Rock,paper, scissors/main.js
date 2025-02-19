let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let arr = [rock,paper,scissors];
let counterUser = 0;
let counterComputer = 0;

function onClick(event){
    let randomNum = Number(Math.round(Math.random() * 2));
    if(arr[randomNum] == rock){
        if(event == paper){
            counterUser++
            alert('You won');
        }
        else if(event == rock){
            alert('Draw');
        }
        else{
            counterComputer++
            alert('You lost');
        }
    }
    else if(arr[randomNum] == paper){
        if(event == paper){
            alert('Draw');
        }
        else if(event == rock){
            counterComputer++
            alert('You lost');
        }
        else{
            counterUser++
            alert('You won');
        }
    }
    else{
        if(event == paper){
            counterUser++
            alert('You won');
        }
        else if(event == rock){
            counterComputer++
            alert('You lost');
        }
        else{
            alert('Draw');
        }
    }
    userScore.innerHTML = counterUser;
    computerScore.innerHTML = counterComputer;
}