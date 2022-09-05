const todoForm = document.querySelector('#todo-form')
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)) 
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(toDos);
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    
    li.id = newTodo.id;
    li.classList.add('todo-list', 'lay-row');

    const span = document.createElement('span');
    span.innerText = newTodo.text;

    const button = document.createElement('button');
		button.innerText = "❌";
    button.classList.add('todo-del');
    button.addEventListener('click',deleteTodo)


    li.appendChild(span);
    li.appendChild(button);

    todoList.append(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener('submit',handleToDoSubmit)