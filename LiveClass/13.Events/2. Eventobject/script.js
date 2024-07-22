const buttonElement = document.getElementById("button");

const containerElement = document.getElementById("container");

containerElement.addEventListener("mouseenter", (event) => {
    console.log(event);
});

buttonElement.addEventListener("click", (event) => {
    console.log(event);
});

window.addEventListener("resize" ,(event) => {
    console.log("resize");
});