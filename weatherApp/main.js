let apiKey = "8775aa6f20f3a899266ba5a1cc458feb";
let city = "delhi";

function getWeather(city){
    return new Promise((resolve,reject)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}

getWeather('mumbai')
.then(data  => console.log(data))
.catch(err => console.log(err))

// async function getWeather(city) {
//   try {
//     let raw = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     );

//     let data = await raw.json();
//     return data;
//   } catch (err) {
//     return err.message;
//   }
// }

// let inputVal = document.querySelector("input");
// let form = document.querySelector("form");

// let searchCity = "";

// inputVal.addEventListener("input", (e) => {
//   searchCity = e.target.value;
// });

// let data = null;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   getWeather(searchCity.trim())
//     .then((data) => {
//       h3span.innerText = `${data.main.temp} ℃`;
//     })
//     .catch((err) => {
//       alert("City not found ❌");
//       h3span.innerText = "City not found ❌";
//     });
// });

// let h3span = document.querySelector("span");

// h3span.innerText = `${}`;
