const todoform = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoform input");
const todoList_ul = document.querySelector("#todolist");

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
