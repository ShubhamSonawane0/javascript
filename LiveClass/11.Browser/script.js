// CRUD -> Creation , Reading , Update

// -----------SELECTORS (GET THE ELEMENT) -------

// 1.getElementById.

// const temp = "0.6"

// const headingElement = document.getElementById("heading");
// console.dir(headingElement); // prints key value pair

// headingElement.innerText = temp
// headingElement.style.color = "yellow";

// const headingElement = document.getElementById("heading");

// // 2.getElementByTagName.

// const headingElementlist = document.getElementsByTagName("heading2");
// console.log(headingElementlist)

// // 3.getElementByClassName.

// const cricketClassElement = document.getElementsByClassName("cricket")
// console.log(cricketClassElement)

// // CSS SELECTORS

// // 4.querySelector -> it takes a css selector and gives back top most element

// const divContainerElement = document.querySelector("#conatainer")
// console.log(divContainerElement)

// // 5. querySelectorAll -> it takes a css selector and gives back List of Elements
// const divContainerElementList = document.querySelectorAll("#conatainer")

// -------------- Editing Update -------------

// const divContainerElement = document.getElementById("container");
// console.dir(divContainerElement);

// 1.innerHtml -> Dangerous; do not use this directly.
// divContainerElement.innerHTML = `<h1><u><i>asdffhhjjfh</i></u></h1>`

// 2. innerText -> the format is preserved.
// divContainerElement.innerText = `asdffhhjjfh
// 2nd line
// 3rd line
// 4th line
// `;

// 3.textContent -> the formatting is not preserved

// divContainerElement.textContent = `asdffhhjjfh
// 2nd line
// 3rd line
// 4th line
// `;

// ----------- Handle style -------------

// 4. style

// divContainerElement.style.backgroundColor = "yellow"

// 5. Classname or classlist -> Element Class
// divContainerElement.classList.add("red");

// divContainerElement.className = "cricket "

// ------------ Deleting ------------

// const ContainerElement = document.getElementById("container");

// ContainerElement.remove();

// ------------ CREATE AN ELEMENT ------------

/* 
   1. Create the element
   2. Edit the element
   3. Attach the element to the DOM
*/

// 1. Create an element.

/*
// step 1
const divContainerNewElement = document.createElement("div");

// step 2
divContainerNewElement.innerte = `hey there I am Created`;
divContainerNewElement.classList.add("red");

// step 3
const bodyElement = document.body;
bodyElement.append(divContainerNewElement);
*/

// Question: You have to add people inside the list.

// Way1 -> append
/*
const listElement = document.getElementById("list");

const utkarshElement = document.createElement("li");
utkarshElement.innerText = "Utkarsh"

const animeshElement = document.createElement("li");
animeshElement.innerText = "Animesh"

listElement.append(utkarshElement);
listElement.append(animeshElement);
*/

// Way2 -> innerHtml
// const listElement = document.getElementById("list");
// listElement.innerHTML = listElement.innerHTML + `<li>Animesh1</li>\n` + `<li>Utkarsh1</li>\n`
// console.dir(listElement);


/*
// ---------- Ways of Insertion ----------
const listElement = document.getElementById("list");
// 1. Append

const zebraStudentElement = document.createElement("list")
zebraStudentElement.innerText = "Zebra";
listElement.append(zebraStudentElement)


// 2. Prepend
const zeroStudentElement = document.createElement("list")
zeroStudentElement.innerText = "Zebra 0";
listElement.prepend(zeroStudentElement)

// 3. After

const footerElement = document.createElement("footer")
footerElement.innerText = "END OF LIST";

listElement.after(footerElement)


// 4. Before

const headerElement = document.createElement("header")
headerElement.innerText = "Start of the list";

listElement.before(headerElement)

*/


// --------- performance ----------





// Fragments