const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let todos = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function delTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodo();
}

function showTodo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", delTodo);
    list.appendChild(span);
    list.appendChild(btn);
    todoList.appendChild(list);
}

function todoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newObject = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newObject);
    showTodo(newObject);
    saveTodo();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null){
    const parse = JSON.parse(savedTodo);
    todos = parse;
    parse.forEach(showTodo);
}

const data = [{"text":"a","id":1739107299940},{"text":"b","id":1739107300467},{"text":"c","id":1739107300923}];
function todoFilter(data){return data.id !== 1739107299940};
data.filter(todoFilter);