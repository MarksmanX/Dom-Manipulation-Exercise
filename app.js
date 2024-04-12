document.getElementById("container");
document.querySelector("#container");
document.getElementsByClassName("second");
document.querySelector("ol .third");
let section = document.querySelector("#container");
section.innerText = "Hello";
let footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main");
let newLi = document.createElement("li");
newLi.innerText = "four";
let ul = document.querySelector("ul");
ul.appendChild(newLi);
let lis = document.querySelectorAll("ol li");
for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = "green";
}
footer.remove();