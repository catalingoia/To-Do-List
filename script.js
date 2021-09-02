//selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo_item");
  todoDiv.appendChild(newTodo);
  if (todoInput.value === "") {
    return null;
  }
  const completedButton = document.createElement("button");
  completedButton.innerText = "Completed";
  completedButton.classList.add("complete_btn");
  todoDiv.appendChild(completedButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete_btn");
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "delete_btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem");
  }
}
