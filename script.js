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

  todoInput.value = '';
  todoInput.focus();
};

const toggleForms = () => {
  editForm.classList.toggle('hide');
  todoForm.classList.toggle('hide');
  todoList.classList.toggle('hide');
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll('.todo');

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector('h3');

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
    }
  });
};

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener('click', (e) => {
  const target = e.target;
  const parent = target.closest('div');

  if (target.classList.contains('finishTodo')) {
    parent.classList.toggle('done');
  }

  if (target.classList.contains('removeTodo')) {
    parent.remove();
  }

  let todoTitle;

  if (parent && parent.querySelector('h3')) {
    todoTitle = parent.querySelector('h3').innerText;
  }

  if (target.classList.contains('editTodo')) {
    toggleForms();
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
});

cancelEditBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});
