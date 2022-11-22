console.log("TS파일 실행");

// DOM 등록
const todoInputbox = document.getElementsByTagName("form")[0];
const todoList = document.getElementById("todoList");

// 인풋박스에 텍스트 엔터 시 리스트 추가
const handlesubmitAdd = (event) => {
  event.preventDefault();
  // 텍스트를 리스트에 추가
  let inputValue = document.querySelectorAll("input")[0].value;
  const createLi = document.createElement("li");
  createLi.id = "newId";
  createLi.textContent = `${inputValue} `;
  todoList.appendChild(createLi);

  // 삭제 버튼을 추가
  const createButton = document.createElement("button");
  createButton.textContent = "X";
  createLi.appendChild(createButton);
  createButton.addEventListener("click", handleclickDelete);

  // 인풋 텍스창 비우기
  document.querySelectorAll("input")[0].value = "";
};

// 버튼 클릭 시 삭제
const handleclickDelete = (event) => {
  event.target.parentElement.remove();
};

// Form 내부에서 엔터 칠 시 이벤트 등록
todoInputbox.addEventListener("submit", handlesubmitAdd);

localStorage.setItem("local", "local value, value2");

// const setCookie = function (name, value, day) {
//   let date = new Date();
//   date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
//   document.cookie =
//     name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
//   //"user=John; path=/; expires=2022-11-11T10:33:17.000Z"
// };
// setCookie("Cookie", "Cookie value", 1);

// const getCookie = function (name) {
//   let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
//   return value ? value[2] : null;
// };

// console.log(getCookie("Cookie"));
// // 특수 값(공백)은 인코딩 처리해 줘야 합니다.
// let name1 = "my name";
// let value = "John Smith";

// // 인코딩 처리를 해, 쿠키를 my%20name=John%20Smith 로 변경하였습니다.
// document.cookie = encodeURIComponent(name1) + "=" + encodeURIComponent(value);

// console.log(document.cookie); // ...; my%20name=John%20Smith

// const deleteCookie = function (name) {
//   let date = new Date();
//   document.cookie =
//     name + "= " + "; expires=" + date.toUTCString() + "; path=/";
// };
// console.log(deleteCookie("Cookie"));

// console.log(document.cookie);
// document.cookie = "a bc=d dffs;";
// console.log(document.cookie);

// setCookie("a bc", "", -1);
// console.log(document.cookie);
