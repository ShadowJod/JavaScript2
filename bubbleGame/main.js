function makeBubble() {
  let clutter = "";
  let pnlbtm = document.querySelector(".panelbttm");

  for (let i = 0; i <= 125; i++) {
    let num = Math.floor(Math.random() * 10);
    clutter += ` <div class="elem">${num}</div>`;
  }

  pnlbtm.innerHTML = clutter;
}
var timer = 60;
var score = 0;
var hitrun = 0
function runTimer() {
  let tmr = document.querySelector("#timer");
  tmr.textContent = timer;
  let intr = setInterval(() => {
    timer--;
    tmr.textContent = timer;
    if (timer === 0) {
      clearInterval(intr);
      document.querySelector(".panelbttm").innerHTML = 
      "<h1> Game Over </h1>";
    }
  }, 1000);
}
function hitCount() {
  hitrun = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrun;
}
function scoreUpdate() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
makeBubble();

function main(){
    document.querySelector(".panelbttm").addEventListener("click",(e)=>{
    var clickedNumber = Number(e.target.textContent);
    if(clickedNumber === hitrun){
        scoreUpdate();
        hitCount();
    }
})
}

runTimer();
hitCount();
main();




