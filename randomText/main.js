let para = document.querySelector("p");
const charc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdrfghijklmnopqrstuvwxyz";
let text = para.innerText;


let iteration = 0;

para.addEventListener("mouseenter",()=>{
   
setInterval(word,50)
})

function word(){
    const str = text
      .split("")
      .map((char, idx) => {
        if(idx<iteration){
            return char;
        }
        return charc.split("")[Math.floor(Math.random() * 52)];
      })
      .join("");

      para.textContent = str;

      iteration+=0.1

      
}
