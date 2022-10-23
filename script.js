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

const titleHeader = document.querySelector(".hero-title");
titleHeader.style.color = "red";

//event listener

// element.addEventListner('click',function);

const buttonTwo = document.querySelector(".btn-2");
function alertBtn() {
  alert("I also Love JS!");
}
buttonTwo.addEventListener("click", alertBtn);

//mouse over

const newBackgroundColor = document.querySelector(".btn-3");

function changeBgColor() {
  newBackgroundColor.style.background = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

// Reveal Event
