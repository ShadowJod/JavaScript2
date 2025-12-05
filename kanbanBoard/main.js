let todo = document.querySelector("#todo");
let progress = document.querySelector("#progress");
let done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
let taskData = {};

let targetEle = null;

/* add button logic */

let toggleModalButton = document.querySelector("#toggle-modal");
let modal = document.querySelector(".modal");
let modalBg = document.querySelector(".bg");
let addTaskButton = document.querySelector(".add-task-btn");

toggleModalButton.addEventListener("click", (e) => {
  modal.classList.toggle("active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("active");
});

addTaskButton.addEventListener("click", (e) => {
  let taskTitle = document.querySelector("input").value;
  let taskDes = document.querySelector("textarea").value;

  let taskTemplate = ``;
  if (taskTitle.trim() === "" || taskDes.trim() === "") {
    alert("Enter Correct Task & Description");
  } else {
    let div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
    <h2>${taskTitle}</h2>
            <p>${taskDes}</p>
            <button>Delete</button>`;

    todo.appendChild(div);
    div.addEventListener("drag", (e) => {
      targetEle = div;
    });
    modal.classList.remove("active");
    [todo, progress, done].forEach((col) => {
      const task = col.querySelectorAll(".task");
      const count = col.querySelector(".rightCount");

      count.innerText = task.length;
    });
    document.querySelector("input").value = "";
    document.querySelector("textarea").value = "";
  }
});

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    targetEle = task;
  });
});

function addDragEnterLeave(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    column.appendChild(targetEle);
    column.classList.remove("hover-over");

    [todo, progress, done].forEach((col) => {
      const task = col.querySelectorAll(".task");
      const count = col.querySelector(".rightCount");

      count.innerText = task.length;
    });
  });
}

addDragEnterLeave(todo);
addDragEnterLeave(progress);
addDragEnterLeave(done);
