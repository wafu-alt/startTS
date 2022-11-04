console.log("TS파일 실행");

const todoInputbox = document.getElementsByTagName("form")[0];

const todoList = document.getElementById("todoList");
const buttons = document.getElementsByTagName("button")[0];

// 인풋박스에 텍스트 엔터 시 리스트 추가
const handlesubmitAdd = (event) => {
  event.preventDefault();
  // 텍스트를 리스트에 추가
  let inputValue = document.querySelectorAll("input")[0].value;
  const createLi = document.createElement("li");
  createLi.textContent = `${inputValue} `;
  todoList.appendChild(createLi);

  // 삭제 버튼을 추가
  const createButton = document.createElement("button");
  createButton.textContent = "X";
  createButton.addEventListener("click", handleclickDelete);
  createLi.appendChild(createButton);

  window.document.querySelectorAll("input")[0].value = "";
};

// 버튼 클릭 시 삭제
const handleclickDelete = (event) => {
  event.target.parentElement.remove();
};

todoInputbox.addEventListener("submit", handlesubmitAdd);
