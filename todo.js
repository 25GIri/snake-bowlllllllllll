// Basic Todo List Functionality
const todos = [];

function addTodo(task) {
  todos.push({ task, completed: false });
  console.log(`Added: "${task}"`);
}

function listTodos() {
  console.log("Your Todos:", todos);
}

// Added a new function for feature expansion
function clearTodos() {
  todos.length = 0;
  console.log("All todos cleared.");
}
