// console.log("hello");

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

/* 
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");
*/

/*
Answer
a
c
b """" after 2 sec
*/

// Example: 4

/* 
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");
console.log("d");
console.log("e");
console.log("f");
console.log("g");
console.log("h");
console.log("i");
console.log("j");
*/

/*
Answer
a
c
d
e
f
g
h
i
j
b """" after 2 sec
*/

/* ------------ Algo for event loop --------
1.Executor at SetTimeOut - as soon as Executor sees SetTimeOut
  1.1 Are you Empty ? NO (nothing happens)
  2.2 Are you Empty ? yes (then it asks question from the queuse (macro, micro))

*/

// Example: 5

/* 
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

setTimeout(() => {
    console.log("c");
  }, 500);

  setTimeout(() => {
    console.log("d");
  }, 1000);

  setTimeout(() => {
    console.log("e");
  }, 3000);

  console.log("f");
*/

/*
Answer
a,f,c,d,b,e
 
*/

// Example 6:

/* 
console.log("a");

setTimeout(() => {
    console.log("b");
  }, 0);

  console.log("c");
*/

/*
Answer
a,c,b
*/

// Read settimeout min time is 1ms bec the c++ that implements settimeout forces for 1 ms wait.

// --------------- ClearTimeout -----------------

/* 
const id = setTimeout(() => {
    console.log("hello");
}, 4000);

clearTimeout(id);
*/

// -------------- setinterval --------------

// Example: 6
/* 
console.log("a")

const intervalid = setInterval(() => {
    console.log("hello")
}, 2000);

console.log("b")

setTimeout(() => {
    clearInterval(intervalid);
}, 7000);
*/

// --------- Intelligent question ----------

// Example:7
/*
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
        }, 0);
}
// Answer: 5,5,5,5,5
*/

// Example: 8
/*
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
        }, 0);
}
// Answer: 0,1,2,3,4
*/

// Example: 10

for (var i = 0; i < 5; i++) {
  ((i) =>
  setTimeout(() => {
    console.log(i);
        }, 0))(i);
}



































































