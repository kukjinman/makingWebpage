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

function clearTodoItems() {
    console.log("clearTodoItems is called");

    while (todoList_ul.firstChild) {
        todoList_ul.removeChild(todoList_ul.firstChild)
    }

}

function displayTodoItem(todo_obj_) {
    console.log("displayTodoItem is called");

    const todo_cur_li = document.createElement("li");
    const todo_cur_span = document.createElement("span");
    const todo_remove_btn = document.createElement("button");

    todo_cur_li.id = todo_obj_.id;
    todo_cur_span.innerText = todo_obj_.text;
    todo_remove_btn.innerText = "X";
    todo_remove_btn.addEventListener("click", deleteTodo)


    todo_cur_li.appendChild(todo_cur_span);
    todo_cur_li.appendChild(todo_remove_btn);

    todoList_ul.appendChild(todo_cur_li);

}

function handleToDoSummit(parm) {
    console.log("handleToDoSummit is called");
    parm.preventDefault();

    const cur_todos_obj = {
        id: Date.now(),
        text: todoInput.value
    }

    console.log("todos obj id: " + cur_todos_obj.id + " text: " + cur_todos_obj.text);

    todoInput.value = "";

    displayTodoItem(cur_todos_obj)

    addNewTodo(CurrentDate, cur_todos_obj);

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

    curTodoList = DBLists.find(list => list.date === date)
    if (!curTodoList) {
        curTodoList = new TodoList(date);
        DBLists.push(curTodoList);

    }
    curTodoList.todos.push(newTodo);


}

function deleteTodo(event) {
    console.log("deleteTodo is called");

    const cur_li = event.target.parentElement;
    console.log(" cur li id : " + cur_li.id);


    // localstorage 선택된 li요소와 같은 id를 가진 todos_obj를 지워줄겁니다.

    DBLists.forEach(todolist => {
        todolist.todos = todolist.todos.filter(cur_todos_obj => cur_todos_obj.id !== parseInt(cur_li.id))
    })

    //li요소를 화면상에서 제거

    cur_li.remove();

    saveDBListInLocalStorage()

}

function saveDBListInLocalStorage() {
    console.log("saveDBListInLocalStorage is called");
    localStorage.setItem(DBLIST_KEY, JSON.stringify(DBLists));
}

function loadcurrentTodo() {
    console.log("loadcurrentTodo is called");

    // 기존의 화면에 display된 item clear 코드
    clearTodoItems()

    // DBLists 가져와서 초기화 해주는 부분
    const savedDBLists = localStorage.getItem(DBLIST_KEY)

    if (savedDBLists !== null) {
        DBLists = JSON.parse(savedDBLists)
    }
    console.log(DBLists)

    // DBLists 화면에 출력하기
    if (!DBLists) {
        return
    }

    DBLists.forEach(tlist => {
        if (tlist.date === CurrentDate) {
            tlist.todos.forEach(displayTodoItem)

        }
    })


}


function loadTodoInit() {
    console.log("loadTodoInit is called");

    // 날짜 가져와서 초기화 해주는 부분
    var today = new Date();
    var formattedToday = today.toISOString().split('T')[0];
    console.log(formattedToday);
    setCurrentDate(formattedToday);

    loadcurrentTodo();

}

loadTodoInit()