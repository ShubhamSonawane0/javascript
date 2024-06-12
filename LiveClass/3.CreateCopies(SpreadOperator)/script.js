 


// --------- SPREAD OPERATOT -----------
// syntax - > ...

const arr = [1, 2, 3, 4, 5];
/*
const arrcopy = arr;

console.log(arr === arrcopy); // true
*/

/*
const arrcopy = [1, 2, 3, 4, 5];

console.log(arr === arrcopy); // false
*/

// ------ Copies way 1 : for loop
const newarray = []; 

for (let i = 0; i < arr.length; i++) {
   const item = arr[i];
   newarray.push(item);
}

console.log(newarray, "newarr");
console.log(arr, "array");

console.log(newarray === arr);

// --------- COPIES Way 2 : spread operator .....

const arr = [1, 2, 3, 4, 5];

const copyarr 