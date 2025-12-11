// window.addEventListener('dblclick',(e)=>{
//     console.log(e);

// })
// window.addEventListener('contextmenu', function(e) {
//   e.preventDefault(); // default browser menu ko roke
//   console.log("Right click detected!");
// });

let contextmenu = document.querySelector('#contextMenu')
let topDiv = document.querySelector("#top");

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
  contextmenu.style.display = 'flex';
  contextmenu.style.top = `${y + 'px'}`
  contextmenu.style.left = `${x + 'px'}`
});


window.addEventListener('click', () => {
    contextmenu.style.display = 'none';
});


window.addEventListener('keydown',(e)=>{
    
    if(e.code === 'MetaLeft'){
        console.log('connect');
    }    
})  