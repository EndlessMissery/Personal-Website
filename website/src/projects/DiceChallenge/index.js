//Random numbers
var randomNumber1 = Math.floor (Math.random() * 6) +1;

var randomNumber2 = Math.floor (Math.random() * 6) +1;

//Random images
var firstImageSrc="images/dice"+randomNumber1+".png";
    document.querySelector(".img1").setAttribute("src",firstImageSrc);

var secondImageSrc="images/dice"+randomNumber2+".png";
    document.querySelector(".img2").setAttribute("src",secondImageSrc);

//Win or draw
var h1Element = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        h1Element.innerHTML = "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        h1Element.innerHTML = "Player 2 wins!";
    } else {
        h1Element.innerHTML = "Draw!";
    }
    