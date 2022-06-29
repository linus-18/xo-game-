let title = document.querySelector(".title ");
let turn = "x";
let square = [];
function winner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementByIda("item" + i).innerHTML;
  }
  if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
    console.log(done);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";
  }
  winner();
}
