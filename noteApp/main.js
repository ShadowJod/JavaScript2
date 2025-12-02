let addNote = document.querySelector("#add-note");
let form = document.querySelector("form");
let formpopUp = document.querySelector(".popup");
let wrapper = document.querySelector(".wrapper");
let close = document.querySelector("#close"); 

// all input fields
const imageUrl = form.querySelector("input[placeholder='https://example.com/photo.jpg']");
const fullName = form.querySelector("input[placeholder='Enter full name']");
const homeTown = form.querySelector("input[placeholder='Enter home town']");
const purpose = form.querySelector("textarea[placeholder='e.g., Quick appointment note']");

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
    if(localStorage.getItem("tasks")===null){
        let oldTasks = [];
        oldTasks.push(obj)
        localStorage.setItem("tasks",JSON.stringify(oldTasks))
    }
    else{
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks))
    }

}

createBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let isValid = true;

  // VALIDATIONS
  if (imageUrl.value.trim() === "") { showError(imageUrl, "Please enter Image URL"); isValid = false; }
  if (fullName.value.trim() === "") { showError(fullName, "Please enter Full Name"); isValid = false; }
  if (homeTown.value.trim() === "") { showError(homeTown, "Please enter Home Town"); isValid = false; }
  if (purpose.value.trim() === "") { showError(purpose, "Please enter Purpose"); isValid = false; }

  // CATEGORY VALIDATION + VALUE GETTER
  let selectedCategory = "";
  categoryRadios.forEach(radio => {
    if (radio.checked) {
      selectedCategory = radio.parentElement.innerText.trim();
    }
  });

  if (selectedCategory === "") {
    alert("Please select a Category");
    isValid = false;
  }

  // STOP if not valid
  if (!isValid) return;

  // SAVE TO LOCAL STORAGE
  saveToLocalStorage({
    imageUrl: imageUrl.value,
    fullName: fullName.value,
    homeTown: homeTown.value,
    purpose: purpose.value,
    category: selectedCategory
  });

  // CLOSE POPUP + RESET FORM
  form.reset();
  formpopUp.style.display = "none";
  wrapper.style.display = "flex";
});
