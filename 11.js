//classList, add and remove, toggle

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);
sectionTodo.classList.add("bg-dark");
sectionTodo.classList.add("fontStyling");
sectionTodo.classList.remove("fontStyling");
sectionTodo.classList.toggle("fontStyling");

const ans = sectionTodo.classList.contains("bg-dark");
console.log(ans);
