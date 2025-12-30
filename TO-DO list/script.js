const taskInput = document.getElementById("taskInput");
const statusInput = document.getElementById("statusInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const text = taskInput.value.trim();
    const status = statusInput.value;

    if (text === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    const actions = document.createElement("div");
    const completeBtn = document.createElement("button");
    const scheduleBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    span.textContent = text;
    li.className = status;

    completeBtn.textContent = "✔";
    scheduleBtn.textContent = "⏰";
    deleteBtn.textContent = "✖";

    actions.className = "actions";

    actions.appendChild(completeBtn);
    actions.appendChild(scheduleBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    completeBtn.addEventListener("click", () => {
        li.className = "completed";
    });

    scheduleBtn.addEventListener("click", () => {
        li.className = "scheduled";
    });

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    taskInput.value = "";
}
