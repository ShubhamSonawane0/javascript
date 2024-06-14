 


// --------- SPREAD OPERATOT -----------
// syntax - > ...
/*
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

/*
const newarray = []; 

for (let i = 0; i < arr.length; i++) {
   const item = arr[i];
   newarray.push(item);
}

console.log(newarray, "newarr");
console.log(arr, "array");

console.log(newarray === arr);
*/

// --------- COPIES Way 2 : spread operator .....

/*
const arr = [1, 2, 3, 4, 5];

const copyarr = [...arr]; 
console.log(arr, "array");

console.log(copyarr === arr);
*/

// Deep copy & Shallow copy 

const person = { 
   name: "arun",
   class: 12,
   address: {
      street: "road 44",
      pincode: 110044,
      houseNumber: "3233-c"
   }
}

const copyperson = {...person}; //shallow copy

copyperson.name = "shubham";
copyperson.address.pincode = 400708;

console.log(person, "person");
console.log(copyperson, "copyperson");


// Trick

const copyperson2 = JSON.parse(JSON.stringify(person));

copyperson2.address.pincode = 111111;
console.log(copyperson2, "copyperson2");
