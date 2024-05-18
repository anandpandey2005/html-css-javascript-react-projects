var timer = 60;
var score = 0;
var hitrn = 0;

document.querySelector("#score").textContent = score;

function bubbble() {
  var clutter = "";
  for (let i = 1; i <= 152; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timer2 = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timer2);
      document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER </h1>`;
    }
  }, 1000);
}

function newHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

function updateScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickdnum = Number(dets.target.textContent);
  if (clickdnum === hitrn) {
    updateScore();
    bubbble();
    newHit();
  }
});
bubbble();
runTimer();
newHit();
