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
