"use strict";
console.log("helper.js file was loaded");

//genetic pagalbine funkcija kuri parsius duomenis ir grazins

function getData(url) {
  return fetch(url)
    .then((resp) => {
      if (resp.ok === false) {
        throw new Error(`Klaida: ${resp.statusText} code: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => {
      console.log("getData got data ===", data);
      return data;
    })

    .catch((error) => {
      console.warn(error);
    });
}
const todosUrl = "https://jsonplaceholder.typicode.com/todos";
// let rez = getData(todosUrl);
// console.log("rez ===", rez);
getData(todosUrl).then((todoArr) => {
  console.log("todoArr.slice(0, 10) ===", todoArr.slice(0, 10));
});
