const todoform = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoform input");
const todoList_ul = document.querySelector("#todolist");
const curDate_p = document.querySelector("#cur_date");

todoform.addEventListener("submit", handleToDoSummit);

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

}

function setCurrentDate(date) {
    console.log("setCurrentDate - " + date);
    curDate_p.textContent = date + " 일정";
}