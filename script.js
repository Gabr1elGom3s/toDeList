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
    //console.log(todo)

}

// editar to do:
const toggleForms = () =>{
  editForm.classList.toggle('hide');
  todoForm.classList.toggle('hide');
  todoList.classList.toggle('hide');


}

// Eventos

// 01 - adicionar tarefas:
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //conseole.log("enviou uma form")
    const inputValue = todoInput.value;

    if (inputValue) {
      //conseole.log("inputValue")
        saveTodo(inputValue);
    }
});

//04 - Atribuindo função aos botões:

document.addEventListener('click',  (e) =>{
  const targetEl = e.target;
  const parentEl = targetEl.closest('div');

  if(targetEl.classList.contains('finishTodo')){
    //console.log("clicou pra finalizar")
    parentEl.classList.toggle('done');

  }

  //remover tarefa
  if(targetEl.classList.contains('removeTodo')){
    parentEl.remove();
  }

  //editar tarefa
  let todoTitle;
  if(parentEl && parentEl.querySelector('h3')){
    todoTitle = parentEl.querySelector('h3').innerText;

  }
  
  
  
  if(targetEl.classList.contains('editTodo')){
    toggleForms();

    editInput.value = todoTitle
    oldInputValue = todoTitle
  }
  

});