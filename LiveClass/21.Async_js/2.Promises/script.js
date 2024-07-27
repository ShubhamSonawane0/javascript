/**
 * promise is a placeholder for a future value
 
 * state of promise ->
     1. pending -> when you are waiting for the future value
     2. Fulfilled -> when the future value has arrived
     3. Rejected -> when Error happens.
 
*/

// ------------ Promise --------------

/* 
console.log("a");

const promise = fetch("ahdhdkdjkjdj");

console.log(promise);

console.log("b");
*/

// --------- consume --------

/* 
console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log("data", data));

console.log("b");
console.log("c");
*/

// --------- handlers ----------
// .then -> consumes (data)
// .catch -> consumes (error)
// .finally -> consumes (nothing)

// Example:1

/* 
console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    return response.json();
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);
    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
  });

console.log("b");
*/

// ---------- Promise chaining ---------
// Algo
// 1. Whatever data or error we are returning from x level, we will get that data in (x+1)th level

// Example:2`


console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    const data = response.json();
    return data;
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);
    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return undefined;
  })
  .catch((error) => {
    // level 4
    console.log("level 4 error", error);
  })


console.log("b");