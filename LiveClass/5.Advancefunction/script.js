// --------- Normal function vs arrow function ----------

/*
// function declaration
function sum(a, b) {
   return a + b;
}

// Function expression
var sum2 = function (a, b) {
   return a + b;
};

// arrow function

let sum3 = (a, b) => {
   return a + b;
};

const result1 = sum(1, 2); //3
const result2 = sum(1, 20); //21
const result3 = sum3(100, 200); //300

console.log("hello");
console.log(result1, result2, result3);

*/
// 2. MAIN Difference

// 1. this keyword: TODO:
// 2. arguments keyword.

/*
function sum(a, b) {
   console.log(arguments);
   return a + b;
}

sum(100, 201);

const sum2 = (a, b) => {
   console.log(arguments, "arguments in arrow");
   return a + b;
};
 
sum2(100, 201);
*/

// arguments -> 100, 201
// parameters -> a,b

// -------------- Try catch -------------

// throw -> ONLY used WITH error

/*
function sum(a, b) {
   try {
   let c = a + b;
   // google call -> store c (server call) // can give error
   // MOCK the ERROR
   throw new Error("Not reachable");

   return c;
   } catch (error) {
      // handle the error
      // console.log(error);
      alert("hey user there is some error");
   }
}
 
const result = sum(1, 2);
console.log(result, "result"); //3
*/


// ----------- Dangerous parts of Functions ------------

/*
function abc(a, b) {
   console.log(a);
   console.log(b);
}
 
abc(1, 2);
abc("1", "sdasds");
abc([1, 2, 3, 4], {name: "shubham"});

abc(
   () => {
      console.log("a");
   },
   function () {
      console.log("b");
   }
);

*/

// 2. A function can return a function.

/*
function abc() {
   const obj = {
      name: "shubham",
   };

   function sum() {
      console.log("I am sum function and not result");
   }

   return sum;
}

const result = abc();

console.log(result);

//result ();
*/

// ------------- Higher Order Functions --------------
// 1. a function that take a function as parameter
// 2. a function that returns a function as value.


/*
function abc1() {
   const obj = {
      name: "shubham",
   };

   function sum() {
      console.log("I am sum function and not result");
   }

   return sum;
}
function abc1(a, b) {
   console.log(a);
   console.log(b);
}
abc1(
   () => {
      console.log("a");
   },
   function () {
      console.log("b");
   }
);
*/

// Spaceship[]

// HOF

/*
function spaceship(left, right, command) {

   if(command === "left") {
      left();
   } else if (command === "right"){
      right()
   } else {
      console.log("Invalid entry for space ship, EMERGENY MODE ON SPACE SHIP");
   }
}

// Alien

/*
function alienLeft() {
   console.log("MF, ML");
}

function alienRight() {
   console.log("MF, MR");
}

spaceship(alienLeft, alienRight, "left");
spaceship(alienLeft, alienRight, "right");
spaceship(alienLeft, alienRight, "asasad");
*/


// humans

/*
function alienLeft() {
   console.log("ML");
}

function alienRight() {
   console.log("MR");
}

spaceship(alienLeft, alienRight, "left");
spaceship(alienLeft, alienRight, "right");
*/

