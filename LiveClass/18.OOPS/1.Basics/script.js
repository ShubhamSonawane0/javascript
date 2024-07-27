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

/* 
const shubhamperson = {
  name: "Shubham",
  age: 21,
}
*/

// Way 2: class

/* 
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
*/

// ------------ BEFORE CLASS KEYWORD (BEFORE ES6) SCHEMA (CONSTRUCTOR FUNCTION)

// Way 3: Constructor Function

/* 
function PersonFunction(name, age) {
  this.name = name;
  this.age = age;
  this.residence = "Delhi";
}

const arunpersonc = new PersonFunction("arun", 30);
const anamikapersonc = new PersonFunction("anamika", 20);

console.log(arunpersonc);
console.log(anamikapersonc)
*/

/*
   Having look Constructor function and classes
   we can conclude everything is same execept the methods

   Methods in Constructor Function -> own Methods.
   Methods in Class -> NOT own Methods 
 */

// ------------------ Inheritance ------------

// Example 1:

/* 
class Parent {
  property = 12;

  constructor() {}
}

class Child extends Parent {
  name;
  toys;

  constructor(name, toys) {
    super();
    this.name = name;
    this.toys = toys;
  }
}

const child1 = new Child("ch", 100);

console.log(child1);
*/

// Example 2:

/* 
class Student {
  name;
  standard;

  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
  }

  markAttandance() {
    console.log(`hey there ${this.name} is Present :: Normal Attandance`);
    }

    grades() {
      console.log(`grade are nice`);
    }
  }

  const shubhamstudent = new Student("shubham", 2);
  const akashstudent = new Student("akash", 3);

  shubhamstudent.markAttandance();
  akashstudent.markAttandance();

//  Child Class

class SportCaptain extends Student {
  favTool;

  constructor(name, standard, tool) {
    super(name, standard);
    this.favTool = tool;
  }
}

const viratkohli = new SportCaptain("viratkohli", 12, "bat");
console.log(viratkohli);

*/

// Example 2:

/* 
class Student {
  name;
  standard;

  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
  }

  markAttandance() {
    console.log(`hey there ${this.name} is Present :: Normal Attandance`);
    }

    grades() {
      console.log(`grade ${this.name} are nice`);
    }
  }
//  Child Class

class SportCaptain extends Student {
  constructor(name, standard, tool) {
    super(name, standard);
    this.favTool = tool
}

markAttandance() {
  console.log(`hey there ${this.name} is Present :: Sport Captain Attandance`);
}

routine() {
  console.log("ROUTINE of regrous things");
}

}

const viratkohli = new SportCaptain("viratkohli", 12, "bat");
console.log(viratkohli);

viratkohli.markAttandance();
viratkohli.routine();
viratkohli.grades();
*/

// ------------- Inheristance in 2015 before ES5 ----------------

// see advance part of oops.

// -------- Private Properties -----------

// Way 1:

/* 
class star {
  name;
  weight;
  years;

  constructor(name, weight, years) {
    this.name = name;
    this.weight = weight;
    this.years = years;
  }

}

const sun = new star("star", 1000000, 460);

console.log(sun);


Object.defineProperty(sun, "weight", {
  writable: false,
});

sun.weight = 55555555;
console.log(sun);
*/

// Way 2: using private property -> Best way do above things

/* 
class star {
  name;
  weight;
  years;

  constructor(name, weight, years) {
    this.name = name;
    this.weight = weight;
    this.years = years;
  }

}

const andromedaSun = new star("andromeda", 8888888, 100);

andromedaSun.name = "NORMAL sun";

console.log(andromedaSun);
*/

// ---------------- Instance Vs Static Properties ----------------

/* 
class Circle {
  radius

  constructor(r) {
    this.radius = r;
  }

  // NORMAL METHOD

  draw() {
    console.log("draw circle of", this.radius);
  }

    // STATIC METHOD

    static parse() {
      console.log(`hello this is static parse`);
    }
  
}

const c1 = new Circle(100);
console.log(c1);
c1.draw();

// c1 is INSTANCE OF CIRCLE CLASS.
// draw, radius these are instance properties.


Circle.parse();
// Circle.draw(); // this will not work
*/

// --------------- check instance -----------

console.log(c1 instanceof Circle);


