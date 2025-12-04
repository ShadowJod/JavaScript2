let addNote = document.querySelector("#add-note");
let form = document.querySelector("form");
let formpopUp = document.querySelector(".popup");
let wrapper = document.querySelector(".container");
let close = document.querySelector("#close");

// all input fields
const imageUrl = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']"
);
const fullName = form.querySelector("input[placeholder='Enter full name']");
const homeTown = form.querySelector("input[placeholder='Enter home town']");
const purpose = form.querySelector(
  "textarea[placeholder='e.g., Quick appointment note']"
);

// radio buttons
const categoryRadios = form.querySelectorAll("input[name='cat']");

// buttons
const createBtn = form.querySelector(".create");

addNote.addEventListener("click", () => {
  formpopUp.style.display = "flex";
  wrapper.style.display = "none";
});

close.addEventListener("click", () => {
  formpopUp.style.display = "none";
  wrapper.style.display = "initial";
});

function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldtask = [];
    oldtask.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldtask));
  } else {
    let oldtask = localStorage.getItem("tasks");
    oldtask = JSON.parse(oldtask);
    oldtask.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldtask));
  }
}

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    imageUrl.value.trim() !== "" &&
    fullName.value.trim() !== "" &&
    homeTown.value.trim() !== "" &&
    purpose.value.trim() !== ""
  ) {
  } else {
    alert("Fill correct information");
    return
  }

  let isvalid = false;
  let values = "";

  categoryRadios.forEach((e) => {
    if (e.checked) {
      isvalid = true;
      values = e.value;
    }
  });

  saveToLocalStorage({
    imageUrl: imageUrl.value,
    fullName: fullName.value,
    homeTown: homeTown.value,
    purpose: purpose.value,
    value: values,
  });

  if (!isvalid) {
    alert("Please Select a category");
    return
  } else {
    form.reset();
    formpopUp.style.display = "none";
    wrapper.style.display = "flex";
  }
});

function showCard() {
  let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  allTasks.forEach((task) => {
    // Main card div
    const card = document.createElement("div");
    card.className = "card";

    // Image
    const img = document.createElement("img");
    img.src = task.imageUrl.value;
    img.alt = "";
    card.appendChild(img);

    // Name h2
    const h2 = document.createElement("h2");
    h2.textContent = task.fullName;
    card.appendChild(h2);

    // info div
    const info = document.createElement("div");
    info.className = "info";

    // info-left
    const infoLeft = document.createElement("div");
    infoLeft.className = "info-left";

    const p1_left = document.createElement("p");
    p1_left.textContent = "Home town";

    const p2_left = document.createElement("p");
    p2_left.textContent = "Booking";

    infoLeft.appendChild(p1_left);
    infoLeft.appendChild(p2_left);

    // info-right
    const infoRight = document.createElement("div");
    infoRight.className = "info-right";

    const p1_right = document.createElement("p");
    p1_right.textContent = task.homeTown;

    const p2_right = document.createElement("p");
    p2_right.textContent = task.purpose;

    infoRight.appendChild(p1_right);
    infoRight.appendChild(p2_right);

    // info ke andar left + right
    info.appendChild(infoLeft);
    info.appendChild(infoRight);

    // info ko card me daal do
    card.appendChild(info);

    // Buttons div
    const bttn = document.createElement("div");
    bttn.className = "bttn";

    // Button 1
    const btn1 = document.createElement("button");
    btn1.id = "btn1";
    btn1.textContent = "Call";

    // Button 2
    const btn2 = document.createElement("button");
    btn2.id = "btn2";
    btn2.textContent = "Message";

    // Add buttons
    bttn.appendChild(btn1);
    bttn.appendChild(btn2);

    // Buttons ko card me add
    card.appendChild(bttn);

    // Final: card ko body me append
    document.body.appendChild(card);

    wrapper.appendChild(card);
  });
}

showCard();
