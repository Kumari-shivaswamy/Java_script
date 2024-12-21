// todoManager.js

const toDoList = [];

function addTask(task) {
    toDoList.push(task);
    console.log(`Task added: "${task}"`);
}

function removeTask(index) {
    if (index < 0 || index >= toDoList.length) {
        console.log("Invalid task number.");
        return;
    }
    const removedTask = toDoList.splice(index, 1);
    console.log(`Task removed: "${removedTask[0]}"`);
}

