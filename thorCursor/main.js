let img = document.querySelector("img");

document.querySelector("body").addEventListener('mousemove',
    (e)=>{
        img.style.left = e.x + "px";
        img.style.top = e.y + "px";
        
    }
)
