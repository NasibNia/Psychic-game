var win = 0;
var lose = 0;
var guessesLeft = 10;
var computerChoice;
var userGuess;  


function random_letter() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr( Math.floor(Math.random() * 27), 1);
}

function computerSelectLetter (){
    computerChoice = random_letter();
    console.log(computerChoice);
    return computerChoice;
}

function updateGuessLeft () {
    if (guessesLeft > 0){
        document.getElementById("guessesLeftId").innerHTML = guessesLeft;
    }
    else {
        document.getElementById("guessesLeftId").innerHTML = " NO ";
        document.getElementById("gameover").innerHTML = " GAME OVER! ";
    }
}

function updateScore(){
    document.getElementById("winId").innerHTML = win;
    document.getElementById("loseId").innerHTML = lose;

}

function reset(){
    computerSelectLetter();
    guessesLeft = 10;
    document.getElementById("computerLeter").innerHTML = "New Letter selected by computer!"; 
    document.getElementById("guessesLeftId").innerHTML =  guessesLeft;
    document.getElementById("gameover").innerHTML = " NEW GAME! ";
}

reset();
document.onkeypress = function (event){

    document.getElementById("gameover").innerHTML = "XXXXXX";

    if (guessesLeft >=1){

        userGuess = event.key.toLowerCase();
        document.getElementById("yourGuess").innerHTML = userGuess;
        guessesLeft -=1;
        updateGuessLeft();

        if (userGuess == computerChoice) {
            win++;
            document.getElementById("computerLeter").innerHTML = "YAYYYYYYY;   " + computerChoice +" is correct";
            updateScore();
            reset();
        }
        else {            
            document.getElementById("computerLeter").innerHTML = "OOOOOPS! Another Guess PLZ!"; 
        }
    } else {
        
        lose++;
        updateScore();
        reset();
    }    
};
    

    