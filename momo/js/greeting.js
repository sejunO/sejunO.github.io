const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";
//locastorage에 key:currentUser, value: text => currentValue => input.value
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); // 기본 이벤트 사용 x
    const currentValue = input.value; // 입력값을 currentValue에 저장
    paintGreeting(currentValue); 
    saveName(currentValue);
    
}

function askForName() { // currentUser 가 없을 때 form을 보여주고 입력하면 handleSumit 실행
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // 값을 입력하면 form이 보이지 않게함
    greeting.classList.add(SHOWING_CN); // 값을 입력하면 선언한 h4(greeting)이 보여짐
    greeting.innerText = `Hello ${text}`;
}

function loadname() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadname();

}

init();