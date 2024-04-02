function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var newTask = document.createElement("li");
    newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = "";
}

function removeTask(button) {
    var task = button.parentNode;
    task.parentNode.removeChild(task);
}