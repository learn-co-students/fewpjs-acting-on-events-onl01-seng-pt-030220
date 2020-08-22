// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
//   });

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

 function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  console.log(leftNumbers)
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerDown() {
    var bottomNumbers = dodger.style.bottom.replace('px', '');
    console.log(bottomNumbers)
    var bottom = parseInt(bottomNumbers, 10)
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 1}px`
    }
  }

  function moveDodgerUp() {
    var upNumbers = dodger.style.bottom.replace('px', '');
    var up = parseInt(upNumbers, 10)
    console.log(up)
    if (up >= 0) {
      dodger.style.bottom = `${up + 1}px`
    }
  }

  document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});