# To-Do List Manager

A simple JavaScript program to manage a to-do list from the console. Add, remove, and view tasks with ease.

## Usage
1. Add a task using `addTask(task)`.
2. Remove a task using `removeTask(index)`, where `index` starts from 0.
3. View all tasks using `viewTasks()`.

### Example
```javascript
addTask("Learn JavaScript");
addTask("Build a project");
viewTasks(); 
removeTask(0);
viewTasks();

Output Example
Welcome to the To-Do List Manager!
Task added: "Learn JavaScript"
Task added: "Build a project"
Your To-Do List:
1. Learn JavaScript
2. Build a project
Task removed: "Learn JavaScript"
Your To-Do List:
1. Build a project

