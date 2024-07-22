const colorpalletElement = document.getElementById("colorpallet");
const containerElement = document.getElementById("container");

const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const purpleElement = document.getElementById("purple");
const blueElement = document.getElementById("blue");
const yellowElement = document.getElementById("yellow");

containerElement.addEventListener("click", (eventObj) => {
  const element = eventObj.target;
  const color = element.id;

  colorpalletElement.style.background = color;
});
