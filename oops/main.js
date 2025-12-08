// class Sketch {
//   constructor() {
//     this.character = "doraeomon";
//     this.color = "blue";
//     this.someFnc = function () {
//       console.log("I am Shared function");
//     };
//   }

//   speak() {
//     console.log("hey i am speaking....");
//   }
//   walk() {
//     console.log("hey i am going back by walking...");
//   }
// }


// let sketch1 = new Sketch();

// sketch1.speak();
// sketch1.walk();

// console.log(sketch1);

// function abcd() {
//   console.log(this);
// }

// abcd();

// let obj = {
//   name : 'nikhil',
//   fnc : function () {
//      let defg= ()=>{
//         console.log(this);
//       }
//       defg();
//   }
// }
// obj.fnc();

let obj = {
  name:'nikhil',
};

function abcd() {
  console.log(this);
}

abcd.call(obj);