console.log("hello");

// requirement -> I want hello to be said after 5 sec

// 5000 ms = 5 seconds.

/* 
setTimeout(() => {
    console.log("hello after 5 seconds");
}, 10000);
*/

// Example: 1

/*
console.log("a");

console.log("b");

*/

/*
Answer
a
b
*/

// Example: 2

/* 
console.log("a");

setTimeout(() => {
    console.log("b");
}, 2000);
*/

/*
Answer
a
b """" after 2 sec
*/

// Example: 3

console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");

/*
Answer
a
c
b """" after 2 sec
*/
