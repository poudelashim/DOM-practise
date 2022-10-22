const title = document.querySelector(".header");
title.style.color = "red";
console.log(title);

//Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

//adding elements
ul.append(li);

//modifying the text
li.innerText = "X-MEN";

//modifying attribute and classes

li.classList.add("list-items");

//Remove element
