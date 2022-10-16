document.querySelector("button").addEventListener("click", function () {
    var randomImages= ["images/dice1.png", "images/dice2.png","images/dice3.png", "images/dice4.png", "images/dice5.png","images/dice6.png"];
    var randomNumber1 = Math.floor((6 * Math.random()));
    var randomNumber2 = Math.floor((6 * Math.random()));
    document.querySelectorAll(".img")[0].setAttribute("src", randomImages[randomNumber1]);
    document.querySelectorAll(".img")[1].setAttribute("src", randomImages[randomNumber2]);

    if(randomNumber1 === randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Match draw"
    }
    else if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 1 WIN!!!!"
    }
    else
    {
        document.querySelector("h1").innerHTML = "Player 2 WIN!!!!"
    }
} )


