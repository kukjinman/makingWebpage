const loginForm = document.querySelector("#loginform");
const loginInput = document.querySelector("#loginform input");
const greetingHeader = document.querySelector("#greeting");

loginForm.addEventListener("submit", getName);


function getName(parm) {

    parm.preventDefault();

    const username = loginInput.value;
    loginForm.style.display = "none";

    greetingHeader.innerHTML = "안녕하세요! " + username + "님";

    localStorage.setItem("myusername", username);

}

const stored_username = localStorage.getItem("myusername");

if (stored_username === null) {
    //stored_username이 없을 때

}
else {
    //stored_username이 있을 때
    loginForm.style.display = "none";
    greetingHeader.innerHTML = "안녕하세요! " + stored_username + "님";

}