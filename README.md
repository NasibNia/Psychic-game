<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# You Vs. Me Psychic-game

<!-- Put a description of what the project is -->

Taking first steps into JavaScript Land by learning about:
- functions
- conditional statements
- Javascript interaction with DOM (Document Object Method)
- Dynamically invoking html elements through Javascript code
- event listening
- On keyboard events


# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->

[NASIB in JavaScript Psychic Land](https://nasibnia.github.io/Psychic-game/.)


# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
![wire frame](assets/images/IMG_1663.JPG)



# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->
- HTML
- css
- javascript
- bootstrap


# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```
document.onkeypress = function (event){
         
    userGuess = event.key.toLowerCase();
    document.getElementById("yourGuess").innerHTML = userGuess;
    guessesLeft -=1;
    updateGuessLeft();

    if (userGuess == computerChoice) {
        score++;
        document.getElementById("computerLeter").innerHTML = "YAYYYYYYY;   " + computerChoice +" is correct";
        reset();
    }
    else {
        document.getElementById("computerLeter").innerHTML = "OOOOOPS! Another Guess PLZ!"; 
    }
    updateScore();
}
```


# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- html
- css
- float
- positioning
- javascript
- functions
- conditional Statements
- keyboard events



# Author 
<!-- make a link to the deployed site and have your name as the link -->
Nasibeh Nourbakhshnia
(www.linkedin.com/in/nasibehnourbakhshnia)

# License
Standard MIT License