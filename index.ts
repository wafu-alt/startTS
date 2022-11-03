console.log("TS파일 실행");
const todoInputbox = window.document.getElementsByTagName("form")[0];
console.log(document.getElementById("todoList"));
const todoList = document.getElementById("todoList");
const handlesbmit = (event) => {
  event.preventDefault();
  let inputValue = window.document.querySelectorAll("input")[0].value;
  const createLi = window.document.createElement("li");
  createLi.textContent = inputValue;
  todoList.appendChild(createLi);
  window.document.querySelectorAll("input")[0].value = "";
};

todoInputbox.addEventListener("submit", handlesbmit);
