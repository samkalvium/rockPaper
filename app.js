//Making the player's hand functional
const plysHand = document.querySelectorAll(".hand-image");
const showHand = document.querySelector("#image-hand");
const imgArray = ["rock-hand.png", "paper-hand.png", "scissors-hand.png"];
const win = document.querySelector(".winner")
const headi = document.getElementById("headi")
const plyrscr = document.getElementById("plyr-score")
const compscr = document.getElementById("comp-score")


var plyrScore = 0;
var compScore = 0;

plysHand.forEach((el) => {
    el.addEventListener("click", (event) => {
        // console.log(event.target.alt);
        randomImage();
        if (event.target.alt === "Rock") {
            console.log("rock");
            showHand.src = imgArray[0];
        }
        else if (event.target.alt === "Paper") {
            console.log("paper");
            showHand.src = imgArray[1];
        }
        else if (event.target.alt === "Scissors") {
            console.log("scissors");
            showHand.src = imgArray[2];
        }
        plyrscr.textContent = plyrScore;
        compscr.textContent = compScore;
        checkWin()
    });
});

// Generating random images for compter 
function randomImage() {
    const ranIndx = imgArray[Math.floor(Math.random() * 3)]

    const randomImg = document.querySelector("#comp_hand")
    randomImg.src = ranIndx;

    // Updating the score
    if (event.target.alt == "Rock" && ranIndx == imgArray[2]) {
        plyrScore += 1;
        console.log(plyrScore)
    }
    else if (event.target.alt == "Paper" && ranIndx == imgArray[0]) {
        plyrScore += 1;
    }
    else if (event.target.alt == "Scissors" && ranIndx == imgArray[1]) {
        plyrScore += 1;
    }

    if (event.target.alt == "Rock" && ranIndx == imgArray[1]) {
        compScore += 1;
    }
    else if (event.target.alt == "Paper" && ranIndx == imgArray[2]) {
        compScore += 1;
    }
    else if (event.target.alt == "Scissors" && ranIndx == imgArray[0]) {
        compScore += 1;
    }

    console.log(plyrScore)
    console.log(compScore)
}

function checkWin(){
    if(plyrScore >=5){
        win.style.display = "block";
        plysHand.forEach((e) =>{
            e.style.display = "none"
        })
    }
    else if(compScore >=5){
        win.style.display = "block";
        plysHand.forEach((e) =>{
            e.style.display = "none"
        })
        headi.textContent = "Computer won the game"
    }
}

const play = document.getElementById("pay")
play.addEventListener("click",()=>{
    window.location = "game.html"
})

// const letsPlay = document.getElementById("play-button")
// letsPlay.addEventListener("click",() =>{
    // window.location = "game.html";
// })
// 