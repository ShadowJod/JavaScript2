let upBtn = document.querySelector("#up");
let downBtn = document.querySelector("#down");

let cardContainer = document.querySelector(".cards");
let card = document.querySelector(".card");

let bttn = document.querySelector("#bttn");
let currentCard = card;
let z = 3;

bttn.addEventListener("click", (e) => {
  let ele = e.target.id;
  if (ele === "up") {
    let prev = currentCard.previousElementSibling;
    if (prev === null) return;
    currentCard = prev;
    currentCard.style.zIndex = ++z;
  } else {
    let next = currentCard.nextElementSibling;
    if (next === null) return;
    currentCard = next;
    currentCard.style.zIndex = ++z;
  }
});
