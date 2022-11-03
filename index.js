console.log("TS파일 실행");
var todoInputbox = window.document.getElementsByTagName("form")[0];
console.log(document.getElementById("todoList"));
var todoList = document.getElementById("todoList");
var handlesbmit = function (event) {
    event.preventDefault();
    var inputValue = window.document.querySelectorAll("input")[0].value;
    var createLi = window.document.createElement("li");
    createLi.textContent = inputValue;
    todoList.appendChild(createLi);
    window.document.querySelectorAll("input")[0].value = "";
};
todoInputbox.addEventListener("submit", handlesbmit);
