const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const editForm = document.querySelector('#editForm');
const editInput = document.querySelector('#editInput');
const cancelEditBtn = document.querySelector('#cancelEditBtn');

 
let oldInputValue;

 

const saveTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

 

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

 

    const editBtn = document.createElement('button');
    editBtn.classList.add('editTodo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

 

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeTodo');
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todo.appendChild(removeBtn);


    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finishTodo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    todoList.appendChild(todo);


    todoInput.value = ''
    todoInput.focus();

}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);
    }
});