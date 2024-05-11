// //The restart button
const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  window.location.reload();
});
//End of The restart button

//THE MODAL
const modal = document.querySelector("#modal");
const start = document.querySelector("#start");
const playerFirst = document.querySelector("#playerFirst");
const playerSecond = document.querySelector("#playerSecond");
const playerForm = document.getElementById("playerForm");

window.onload = function () {
  modal.style.display = "block";
};

playerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page refresh
  const playerXName = document.getElementById("player1").value;
  const playerOName = document.getElementById("player2").value;
  playerFirst.innerHTML = playerXName;
  playerSecond.innerHTML = playerOName;
  modal.style.display = "none"; 
  startGame();// Hide the modal after form submission
});
//END OF MODAL



//THE GAME
let score1 = document.querySelector("#scoreOne");
let score2 = document.querySelector("#scoreTwo");


let restartBtn = document.getElementById('reset')
let boxes = Array.from(document.getElementsByClassName('cell'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winningblock')

const O_TEXT = "0"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)
let countsPlayed = 0

let playerOneScore = 0
let playerTwoScore = 0

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id
    if(!spaces[id] && countsPlayed < 9){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        if(playerHasWon() !==false){
            // Result.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()
            countsPlayed=10;
            if(currentPlayer == X_TEXT){
                playerOneScore++
                score1.innerText = playerOneScore;
            } else {
                playerTwoScore++
                score2.innerText = playerTwoScore
            }
          
            return   winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
        countsPlayed++;
    }

    if(countsPlayed == 9) {
        boxes.forEach(box => box.style.backgroundColor = winnerIndicator)
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c]
        }
    }
    return false
}

function resetGame(){
    spaces = Array(9).fill(null)
    boxes.forEach(box => box.innerText = "")
    boxes.forEach(box => box.style.backgroundColor = "#211A1D")
    countsPlayed = 0
    currentPlayer = X_TEXT
}


const cont = document.querySelector("#continue");

cont.addEventListener("click", function () {
        resetGame();
        startGame()   
});
