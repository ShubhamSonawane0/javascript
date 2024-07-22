const parentElement = document.getElementById("parent");
const grandparentElement = document.getElementById("grandparent");
const childElement = document.getElementById("child");



// -------------- Bubbling Phase --------------

// Que 1. Click on  Child


/*   childElement.addEventListener("click", (evenObj) => {
    console.log("Child Element Clicked");
});

grandparentElement.addEventListener(
    "click", (evenObj) => {
        console.log("Grandparent Element Clicked");
    }, false
);
*/

// Ans => Child Element Clicked
//        Grandparent Element Clicked

// Que 2. Click on Parent

/* 
childElement.addEventListener("click", (evenObj) => {
    console.log("Child Element Clicked");
});


grandparentElement.addEventListener(
    "click", (evenObj) => {
        console.log("Grandparent Element Clicked");
    }, false
);
*/

// Ans => Grandparent Element Clicked

// Que 3. Click on Parent

/* 
childElement.addEventListener("click", (evenObj) => {
    console.log("Child Element Clicked");
});

parentElement.addEventListener("click", () => {
        console.log("parent Element Clicked");
    }
);

grandparentElement.addEventListener(
    "click", (evenObj) => {
        console.log("Grandparent Element Clicked");
    }, false
);
*/

// Ans => Parent Element Clicked
//        Grandparent Element Clicked


// Que 4. Click on grandParent

/*

childElement.addEventListener("click", (evenObj) => {
    console.log("Child Element Clicked");
});

parentElement.addEventListener("click", () => {
        console.log("parent Element Clicked");
    }
);

grandparentElement.addEventListener(
    "click", (evenObj) => {
        console.log("Grandparent Element Clicked");
    }, false
);

 */

// Ans => Grandparent Element Clicked

/*
 
//  Que 5. Click on Child


childElement.addEventListener("click", () => {
    console.log("Child Element Clicked");
},true 
);

parentElement.addEventListener("click", () => {
        console.log("parent Element Clicked");
    },true
);

grandparentElement.addEventListener(
    "click", () => {
        console.log("Grandparent Element Clicked");
    }, true
);

*/

// Ans => 1.grandparent Element Clicked
// 2. parent Element Clicked
// 3. Child Element Clicked

/* 
childElement.addEventListener("dbclick", () => {
    console.log("Child Element Clicked");
},false 
);

parentElement.addEventListener("click", () => {
        console.log("parent Element Clicked");
    },true
);

grandparentElement.addEventListener(
    "click", () => {
        console.log("Grandparent Element Clicked");
    }, false
);
*/

// Ans =>
// 2. parent Element Clicked
// 3. Child Element Clicked




/* 
let x = false;  

// False = right side
// True = left side

grandparentElement.addEventListener(
    "click", () => {
        console.log("Grandparent Element Clicked");
    },
    x
    );

parentElement.addEventListener("click", () => {
    console.log("parent Element Clicked");
    x = true
},
);
*/

// Ans =>
// 2. parent Element Clicked
// 3. Grandparent Element Clicked