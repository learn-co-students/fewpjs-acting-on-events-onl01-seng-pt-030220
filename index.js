// Your code here

//////////////////////LEARN SOLUTION/////////////////////////

// var dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";

// function moveDodgerLeft() {
//   var leftNumbers = dodger.style.left.replace('px', '');
//   var left = parseInt(leftNumbers, 10)
//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`
//   }
// }

// function moveDodgerRight() {
//   var leftNumbers = dodger.style.left.replace('px', '');
//   var left = parseInt(leftNumbers, 10)
//   if (left > 0) {
//     dodger.style.left = `${left + 1}px`
//   }
// }

// document.addEventListener('keydown', function(e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft()
//   }
// })

// document.addEventListener('keydown', function(e) {
//   if (e.key === "ArrowRight") {
//     moveDodgerRight()
//   }
// })

//////////////////////////MICAH SOLUTION/////////////

// let dodger = document.querySelector('#dodger')

// function moveDodgerLeft(mnum = 1){
//   let numStr = dodger.style.left.replace('px', '')
//   let num = parseInt(numStr)

//   if(num > 0){
//     dodger.style.left = `${num - mnum}px`
//   }
// }

// function moveDodgerRight(mnum = 1){
//   let numStr = dodger.style.left.replace('px', '')
//   let num = parseInt(numStr)

//   if(num < 360){
//     dodger.style.left = `${num + mnum}px`
//   }
// }

// document.addEventListener('keydown', function(e){
//   if( e.key === "ArrowLeft"){
//     moveDodgerLeft(1)
//   }else if(e.key === "ArrowRight"){
//     moveDodgerRight(1)
//   }
// })

///////////////////////MY SOLUTION//////////////////////

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});