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
function viewTasks() {
    if (toDoList.length === 0) {
        console.log("Your to-do list is empty!");
        return;
    }
    console.log("Your To-Do List:");
    toDoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}
// Example Usage
console.log("Welcome to the To-Do List Manager!");
addTask("Learn JavaScript");
addTask("Build a project");
viewTasks();
removeTask(0);
viewTasks();




