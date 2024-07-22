

/* 
    What do we do in the Browser?

    Click, DoubleClick, Hover, Scroll
    Changing the screen size etc .......


    Every Action is nothing but an event of its own type.


    // Role of 


*/


const buttonElement = document.getElementById("button");

// ---------- Mouse Events ----------

buttonElement.addEventListener("click", () => {

    // console.log("clicked Me!!!");
    alert("button clicked");

});

const containerElement = document.getElementById("container");
containerElement.addEventListener("mouseover", () => {
    containerElement.style.backgroundColor = "purple";
});

containerElement.addEventListener('mouseout', () => {
    containerElement.style.backgroundColor = "white";
});

containerElement.addEventListener("click", () => {
    containerElement.style.backgroundColor = "yellow";
});



// --------------- Keyboard Events ------------

// 1. Keydown
const inputboxElement = document.getElementById("inputbox");

inputboxElement.addEventListener("keydown", (event) => {
const key = event.key;

if (key === "a") {
    containerElement.style.background = "red";
}
});


// Window
window.addEventListener("resize" ,(event) => {
    console.log("resize");
});