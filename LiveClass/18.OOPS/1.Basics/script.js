



/*
   OOPS -> object oriented programming

   In oops language prime focus is object (Creation, Manupulation, Destruction)

   In scripting language (JS) the prime focus is Functions.

   JS is a function language.

   JS has less support of oops.

   // Main things is oops and paradimes (Way Of Life)


// OOPS:

1. Object
2. Class
3. Inheritance
4. Polymorphism
5. Encapsulation
6. Abstraction
*/


// ----------- How to Create object in javascript ------------

// Way 1.
const shubhamperson = {
  name: "Shubham",
  age: 21,
}


// Way 2: class

class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
 
const arunperson = new Person('arun', 30);

console.log(arunperson);



