const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js__greetings");

const user_localStorage = "currentUser",
  showing_className = "showing";

function saveName(text) {
  localStorage.setItem(user_localStorage, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(showing_className);
  form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
  form.classList.remove(showing_className);
  greeting.classList.add(showing_className);
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours <= 12) {
    greeting.innerText = `Good Moning ${text}`;
  } else if (hours >= 12 && hours <= 18) {
    greeting.innerText = `Good Afternoon ${text}`;
  } else if (hours >= 18 && hours <= 24) {
    greeting.innerText = `Good Evening ${text}`;
  } else {
    reeting.innerText = `Good At dawn ${text}`;
  }

  greeting.color = "#fafafa";
}

function loadName() {
  const currentUser = localStorage.getItem(user_localStorage);
  if (currentUser == null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
