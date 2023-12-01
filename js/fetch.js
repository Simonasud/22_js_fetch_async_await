"use strict";
console.log("fetch.js file was loaded");

const url = "https://jsonplaceholder.typicode.com/todos";

const els = {
  todosListEl: document.getElementById("todos"),
};

getTodos();

function getTodos() {
  fetch(url)
    .then((resp) => resp.json())
    .then((todoArr) => {
      // console.log("todoArr ===", todoArr);
      const todosToWorkWith = todoArr.slice(0, 6);
      console.table(todosToWorkWith);
      // mainTodoArr = todosToWorkWith;
      printTodosToHtml(todosToWorkWith);
    })
    .catch(console.warn);
}

function printTodosToHtml(todoArr) {
  const htmlTodoArr = todoArr.map((todoObj) => {
    console.log("todoObj ===", todoObj);
    const btnEl = document.createElement("button");
    if (todoObj.completed === true) {
      btnEl.classList.add("bg-success-subtle");
    }
    btnEl.classList.add("list-group-item", "list-group-item-action");

    btnEl.innerHTML = `[id: ${todoObj.id}] <strong>${todoArr.title}</strong> done:${todoObj.completed}`;
    console.log("btnEl  ===", btnEl);
    return btnEl;
  });
  console.log("htmlTodoArr ===", htmlTodoArr);
  els.todosListEl.append(...htmlTodoArr);
}
