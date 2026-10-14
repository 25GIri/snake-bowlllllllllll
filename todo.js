const todoList = [];

function addTodo(task) {
  todoList.push({ task, completed: false });
}

function removeTodo(index) {
  todoList.splice(index, 1);
}

function toggleTodo(index) {
  todoList[index].completed = !todoList[index].completed;
}

console.log("Todo list initialized.");