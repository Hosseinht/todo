// Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// Event Listeners
todoButton.addEventListener("click", addTodo)

// Functions
function addTodo(event) {
    event.preventDefault();
    // prevent submit form when click on button
    console.log(event);

    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = "hey";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>"
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)

    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("delete-btn");
    todoDiv.appendChild(trashButton);

    //Append To List
    todoList.appendChild(todoDiv)
}

