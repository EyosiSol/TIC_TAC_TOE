//The restart button
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
  modal.style.display = "none"; // Hide the modal after form submission
});
//END OF MODAL
