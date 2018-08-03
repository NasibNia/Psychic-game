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
            document.getElementById("myAudioWin").play();
            PopUp();
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

$("#infoButton").on("click", function() {
    //animate:
    var div = $("#infoButton");
    var i = 0;
    while (i<5){
        div.animate({opacity: '1'}, "fast");
        div.animate({opacity: '0.3'}, "fast");
        i++;
    }
    div.animate({height: '300px', opacity: '0.5'}, "fast");
    div.animate({width: '300px', opacity: '0.8'}, "fast");
    div.animate({height: '100px', opacity: '1'}, "fast");
    div.animate({width: '100px', opacity: '0.5'}, "fast"); 
    div.fadeOut("fast");
});

function PopUp(){
    var div = $("#infoButton2");
    div.fadeIn("slow");
    var i = 0;
    while (i<20){
        div.animate({opacity: '1'}, "fast");
        div.animate({opacity: '0.3'}, "fast");
        i++;
    }
    div.animate({height: '300px', opacity: '0.8'}, "fast");
    div.animate({width: '300px', opacity: '1'}, "fast");
    div.animate({height: '30%', opacity: '0.8'}, "fast");
    div.animate({width: '50%', opacity: '1'}, "fast"); 
    div.fadeOut("fast");
}
    

    