"use strict";
console.log("asyncPrac.js file was loaded");

const url = "https://jsonplaceholder.typicode.com";

//su atskirom funkcijom parsisiusti naudojant async await ir isconsolinti

//todos - pirmus 10
const baseUrl = "https://jsonplaceholder.typicode.com";

// Separate function to fetch todos
async function fetchTodos() {
  try {
    const response = await fetch(`${baseUrl}/todos`);
    const data = await response.json();
    return data.slice(0, 10); // Limit to the first 10 todos
  } catch (error) {
    console.warn("Error fetching todos", error);
    return false;
  }
}

// Function to get todos using async/await
async function getTodos() {
  try {
    const todos = await fetchTodos();
    console.log("todos ===", todos);
    return todos;
  } catch (error) {
    console.warn("getTodos error", error);
    return false;
  }
}

// Calling the getTodos function
getTodos();

//posts - pirmus 15
async function fetchPosts() {
  try {
    const response = await fetch(`${baseUrl}/posts`);
    const data = await response.json();
    return data.slice(0, 16); // Limit to the first 10 todos
  } catch (error) {
    console.warn("Error fetching posts", error);
    return false;
  }
}

// Function to get todos using async/await
async function getPosts() {
  try {
    const posts = await fetchPosts();
    console.log("posts ===", posts);
    return posts;
  } catch (error) {
    console.warn("getPosts error", error);
    return false;
  }
}
getPosts();
//comments - pirmus 7
async function fetchComments() {
  try {
    const response = await fetch(`${baseUrl}/comments`);
    const data = await response.json();
    return data.slice(0, 8); // Limit to the first 10 todos
  } catch (error) {
    console.warn("Error fetching comments", error);
    return false;
  }
}

// Function to get todos using async/await
async function getComments() {
  try {
    const comments = await fetchComments();
    console.log("comments ===", comments);
    return comments;
  } catch (error) {
    console.warn("getComments error", error);
    return false;
  }
}
getComments();

// sukurti funkcija init() joje
// 1. atspausdinti todos, posts ir comments

async function init() {
  const todos = await getTodos();
  console.log("todos  ===", todos);
  const posts = await getPosts();
  console.log("posts  ===", posts);
  const comments = await getComments();
  console.log("comments ===", comments);
  const oneArrToRuleThemAll = [...todos, ...posts, ...comments];
  console.log("oneArrToRuleThemAll ===", oneArrToRuleThemAll);
}
init();
