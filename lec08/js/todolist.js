const todoform = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoform input");

todoform.addEventListener("submit", handleToDoSummit);

function handleToDoSummit(parm) {
    console.log("handleToDoSummit is called");
    parm.preventDefault();
    const curTodo = todoInput.value;
    console.log("todoInput value : " + curTodo);

    todoInput.value = "";
}
