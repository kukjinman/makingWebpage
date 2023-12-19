const todoform = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoform input");
const todoList_ul = document.querySelector("#todolist");
const curDate_p = document.querySelector("#cur_date");

todoform.addEventListener("submit", handleToDoSummit);

let DBLists = [];
let CurrentDate;
const DBLIST_KEY = "DBLISTS"

function TodoList(date) {
    this.date = date;
    this.todos = [];
}

function handleToDoSummit(parm) {
    console.log("handleToDoSummit is called");
    parm.preventDefault();
    const curTodo = todoInput.value;
    console.log("todoInput value : " + curTodo);

    todoInput.value = "";

    const todo_cur_li = document.createElement("li");
    const todo_cur_span = document.createElement("span");

    todo_cur_span.innerText = curTodo;

    todo_cur_li.appendChild(todo_cur_span);

    todoList_ul.appendChild(todo_cur_li);

    addNewTodo(CurrentDate, curTodo);

    // save localstorage code
    saveDBListInLocalStorage();
}

function setCurrentDate(date) {
    console.log("setCurrentDate - " + date);
    curDate_p.textContent = date + " 일정";
    CurrentDate = date;
}

function addNewTodo(date, newTodo) {
    console.log("addNewTodo is called");
    curTodoList = new TodoList(date);
    curTodoList.todos.push(newTodo);

    DBLists.push(curTodoList);
}

function saveDBListInLocalStorage() {
    console.log("saveDBListInLocalStorage is called");
    localStorage.setItem(DBLIST_KEY, DBLists);
}
