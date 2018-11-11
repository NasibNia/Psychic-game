var win = 0;
var lose = 0;
var guessesLeft = 10;
var computerChoice;
var userGuess;
var holdGuessing = false; 
var unmuteBox = true; 


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
    holdGuessing = false;
    computerSelectLetter();
    guessesLeft = 10;
    document.getElementById("computerLeter").innerHTML = "New Letter selected by computer!"; 
    document.getElementById("guessesLeftId").innerHTML =  guessesLeft;
    document.getElementById("gameover").innerHTML = " NEW GAME! ";
}


reset();
document.onkeypress = function (event){

    document.getElementById("gameover").innerHTML = "XXXXXX";
    if (!unmuteBox){
        if (!holdGuessing){
            if (guessesLeft >=1 ){
                userGuess = event.key.toLowerCase();
                document.getElementById("yourGuess").innerHTML = userGuess;
                guessesLeft -=1;
                updateGuessLeft();
        
                if (userGuess === computerChoice) {
                    win++;
                    document.getElementById("computerLeter").innerHTML = "YAYYYYYYY;   " + computerChoice +" is correct";
                    updateScore();
                    document.getElementById("myAudioWin").play();
                    PopUpWin();
                    holdGuessing = true;
                    // pause(1);
                    setTimeout(reset,10000);
                }
                else {            
                    document.getElementById("computerLeter").innerHTML = "OOOOOPS! Another Guess PLZ!"; 
                }
            } else {
                
                lose++;
                PopUplose();
                document.getElementById("myAudioLose").play();
                updateScore();
                holdGuessing = true;
                setTimeout(reset, 7000);
            }
        }    
    }    
};

$("#infoButton").on("click", function() {
    unmuteBox = false;
    //animate:
    var div = $("#infoButton");
    var i = 0;
    // div.animate({width: '100px', opacity: '0.5'}, "fast"); 
    div.fadeOut("fast");
});

function PopUpWin(){
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

function PopUplose(){
    var div = $("#infoButton3");
    div.fadeIn("slow");
    var i = 0;
    while (i<10){
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

