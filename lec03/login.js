const loginForm = document.querySelector("#loginform");
const loginInput = document.querySelector("#loginform input");

loginForm.addEventListener("submit",getName);


function getName() {


    const username = loginInput.value;
    alert("username : " + username);

}