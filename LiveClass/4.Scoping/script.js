

//----------- SCOPING (scope) -----------

// 1. the js file is global itself.
// 2. SCOPE of var => global and Function. (EC -> execution Context)
/*
// Example
var a = 12; 
console.log(a);

if (true) {
   console.log(a, "inside the if block");
}

console.log(a); 


// example 2

var a = 12;
if(true) {
   var a = 99;
   console.log(a, 'answer 1');

}
 
console.log(a, 'answer 2');
*/
// ------- Parsing in js -------
 
// js code cant be executed without on EC 


// parsing in js has 2 phase
// 1. phasing phase
// 2. execution phase


// return keyword
//1. return the value to the below box (below EC)
//2. DESTROY the top most Box (EC).


// example 3;


/*
var a = 12;
console.log(a, "answer 1");

function abc() {
   var a = 100;
   console.log(a, "answer 2");

   return 99;
}

console.log(abc());

console.log(a);

// Answer : 12,100,99,12.
  */

// example 4;

/*
var a = 12;
console.log(a, "answer 1");

function abc() {
   var a = 100;
   console.log(a, "answer 2");

}
const result = abc();
console.log(result);

console.log(a);

// answer : 12, 100, undefined, 12
*/


// example 5;

/*
var a = 99;

var a = 0;
console.log(a);

// answer : 0
*/


// example 6;

/*
var a = 12;
console.log(a,'answer 1');

if(true) {
   var a = 99;
   console.log(a, "answer 2");
}

for (let i = 0; i < 1; i++) {
   var a = 100;
   console.log(a, "answer3");
}

console.log(a, "answer 4");

// answer : (12, 99, 100, 100)
*/

 // example 7;

 /*
 var obj = {
   name: "shubham",
 };

 console.log(obj);

 function user() {
   var obj = {
      name: "deep",
   };
   console.log(obj);
 }
user(); 

 console.log(obj);

 // answer: shubham, deep, shubham
*/


// Example 8;

/*
var a = 12;
console.log(a);

function abc() {
   console.log(a);
   var a = 99;
   console.log(a);
}

abc();

console.log(a);

// answer : 12, undefined, 99, 12

*/  

// example 9;

/*
var a = 12;
console.log(a);

function abc() {
   console.log(a);
}

abc();

console.log(a);

// answer: 12, 12, 12
*/

//  CONCLUSION: var has a execution context as scope


// ------------ LET & CONST ------------------

// let and const has a block scope/

// example 1;

let a = 99;
console.log(a);

if (true) {
   let a = 12;
   console.log(a);
}

console.log(a);

// answer: 99, 12, 99