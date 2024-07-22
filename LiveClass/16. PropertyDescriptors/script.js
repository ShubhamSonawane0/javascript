

/**
 we can go ahead and do CRUD operation on the properties of an object
 
 */

// OBJECT Operation


/* 
const obj = {
  name: "shubham",
  age: 21,
  rollNumber: 15,
  
};

obj.name = "utkarsh";

delete obj.rollNumber;

obj.adharcard = "123456789123";
*/


/*
    Agenda:
    1. We want to protect object and our properties from getting changed.

 */

// ------------ Property Descriptor ---------------

/* 
    const obj = {
      name: "shubham",
      age: 21,
      rollNumber: 15,

    }

const nameDescription = Object.getOwnPropertyDescriptor(obj, "name");
console.log(nameDescription);

*/


// ------------ BEFORE THE CHANGE IN Property Descriptor ---------------

/*
const obj = {
  name: "shubham",
  age: 21,
  rollNumber: 15,

};
console.log(obj, "before any change");

// Writable ->
obj.name = "utkarsh";

console.log(obj, "Writable");

// Enumerable ->
for (let key in obj){
  console.log(key, "Enumerable");
}

// Configurable ->

delete obj.name;
console.log(obj, "Configurable");

*/

// ---------- OBJ After property descriptor ---------------
const obj = {
  name: "shubham",
  standard: 21,
  rollNumber: 15,
}
const nameDescription = Object.getOwnPropertyDescriptor(obj, "name");
console.log(nameDescription);
// 1.------------- Writable ----------------

/* 
Object.defineProperty(obj, "name", {
writable: false,
});

obj.name = "utkarsh";
console.log(obj, "after writable false");
*/

// 2.-------------- Enumerable ----------------

/*
for (let key in obj) {
  console.log(key + " :: :: " + obj[key]);
}

Object.defineProperty(obj, "name", {
  enumerable: false,
});

console.log("------");
 
for (let key in obj) {
  console.log(key + " :: :: " + obj[key]);
}
*/

// 3. ------------- Configurable ------------

/* 
Object.defineProperty(obj, "name", {
  configurable: false,
  });
  
delete obj.name;

console.log(obj, "obj after delete");
*/


// ----------- FEW MORE THINGS TO KNOW -------------
// 1. Object.freeze

/* 
Object.freeze(obj);

obj.name = "asdaass";
obj.rollNumber = 66666666;
obj.standard = -1000000;

obj["adharcard"] = "12121212";

delete obj.name;

console.log(obj);
*/

// Properties -> writable false ..
















































































