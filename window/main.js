// window.addEventListener('dblclick',(e)=>{
//     console.log(e);

// })
// window.addEventListener('contextmenu', function(e) {
//   e.preventDefault(); // default browser menu ko roke
//   console.log("Right click detected!");
// });

let contextmenu = document.querySelector("#contextMenu");
let topDiv = document.querySelector("#top");
let winMenu = document.querySelector("#windowMenu");

let x = 0;
let y = 0;
topDiv.addEventListener("mousemove", (move) => {
  // save last mouse position
  x = move.clientX;
  y = move.clientY;
});

// add right-click listener only ONCE
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  contextmenu.style.display = "flex";
  contextmenu.style.top = `${y + "px"}`;
  contextmenu.style.left = `${x + "px"}`;
});

window.addEventListener("click", () => {
  contextmenu.style.display = "none";
});

let count = 0;
window.addEventListener("keydown", (e) => {
  if (e.code === "MetaLeft") {
    count++;
    if (count % 2 === 0) {
      winMenu.style.display = "none";
    } else {
      winMenu.style.display = "block";
    }
  }
});

document.querySelector("#top").addEventListener("click", () => {
  winMenu.style.display = "none";
});

function updateTime() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Formatting
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").innerText = `${hours}:${minutes}:${seconds}`;

  // document.getElementById('date').innerText =
  //   `${now}`
}

// Update every second
setInterval(updateTime, 1000);
updateTime();

function updateDate() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1; // 0-based hota hai
  const year = now.getFullYear();

  // Format DD/MM/YYYY
  const formatted = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;

  document.getElementById("date").innerText = formatted;
}

updateDate();

let winLogo = document.querySelector("#winLogo");
let winCount = 0;

winLogo.addEventListener("click", () => {
  console.log('Clicked');
  
  if (winCount === 0) {
    winMenu.style.display = "block";
    winCount = 1;
  } else {
    winMenu.style.display = "none";
    winCount = 0;
  }
});
