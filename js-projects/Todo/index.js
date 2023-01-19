var todos = [];

function getInput() {
  var input = document.querySelector(".input");
  return input.value;
}

function renderTodo(todo) {
  var todoElement = document.createElement("div");
  todoElement.classList.add("item");

  var todoText = document.createElement("div");
  var editBtn = document.createElement("div");
  var deleteBtn = document.createElement("div");
  todoText.classList.add("item_input");
  editBtn.classList.add("editButton");
  deleteBtn.classList.add("deleteButton");

  todoText.textContent = todo;
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";

  todoElement.appendChild(todoText);
  todoElement.appendChild(editBtn);
  todoElement.appendChild(deleteBtn);

  return todoElement;
}

function renderTodos() {
  var container = document.querySelector(".container");
  container.innerHTML = "";
  for (var i = todos.length; i >= 0; i--) {
    var todo = todos[i];
    var todoElement = renderTodo(todo);
    container.appendChild(todoElement);
  }
}

function addTodo() {
  var input = getInput();
  console.log(input);
  todos.push(input);
  renderTodos();
}

(function addTodoBtnListener() {
  var btn = document.querySelector(".addButton");
  btn.addEventListener("click", addTodo);
})();
