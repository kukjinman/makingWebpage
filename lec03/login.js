const loginForm = document.querySelector("#loginform");
const loginInput = document.querySelector("#loginform input");
const greetingHeader = document.querySelector("#greeting");

loginForm.addEventListener("submit", getName);


function getName(parm) {

    parm.preventDefault();

    const username = loginInput.value;
    loginForm.style.display = "none";

    greetingHeader.innerHTML = "안녕하세요! " + username + "님";

}