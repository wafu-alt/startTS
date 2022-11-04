console.log("TS파일 실행");
var todoInputbox = document.getElementsByTagName("form")[0];
var todoList = document.getElementById("todoList");
var buttons = document.getElementsByTagName("button")[0];
// 인풋박스에 텍스트 엔터 시 리스트 추가
var handlesubmitAdd = function (event) {
    event.preventDefault();
    // 텍스트를 리스트에 추가
    var inputValue = document.querySelectorAll("input")[0].value;
    var createLi = document.createElement("li");
    createLi.textContent = "".concat(inputValue, " ");
    todoList.appendChild(createLi);
    // 삭제 버튼을 추가
    var createButton = document.createElement("button");
    createButton.textContent = "X";
    createButton.addEventListener("click", handleclickDelete);
    createLi.appendChild(createButton);
    window.document.querySelectorAll("input")[0].value = "";
};
// 버튼 클릭 시 삭제
var handleclickDelete = function (event) {
    event.target.parentElement.remove();
};
todoInputbox.addEventListener("submit", handlesubmitAdd);
