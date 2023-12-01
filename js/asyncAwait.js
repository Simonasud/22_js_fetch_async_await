"use strict";
console.log("asyncAwait.js file was loaded");

const baseUrl = "https://123jsonplaceholder.typicode.com";

function getUsers() {
  fetch(`${baseUrl}/users`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data ===", data);
    })
    .catch((err) => console.warn(err));
}
// getUsers();

//async ir await
async function getUsersA() {
  try {
    const resp = await fetch(`${baseUrl}/users`);
    console.log("resp ===", resp);
    const data = await resp.json();
    console.log("data ===", data);
    return data;
  } catch (error) {
    console.warn("getUsersA klaida", error);
    return false;
  }
}
// let rez = getUsersA();
// console.log("rez ===", rez);

getUsersA().then((rez) => console.log(rez));
