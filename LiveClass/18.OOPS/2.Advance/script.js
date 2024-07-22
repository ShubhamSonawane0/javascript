// Normal Example

/* 
function foo() {
  console.log("hello");
}

foo();


const obj = {
  name: "Shubham",
  class: 12,
  rollNumber: 80,
  hobbies: ["painting", "gaming"],
  func: function () {
    console.log("hello to the func");
  },
};

obj.func();
*/

// ---------- CALL site --------------

/* 
function foo() {}

foo(); // this is a call site

const fooCopy = foo; // this is not a call site.
// i do not see()

fooCopy(); // this is a call site
*/

// ---------- FEAR of this Keyword --------------

// 1. this keyword: context at which the function is called. OR
// on which context the function is called 

/*
I am calling shubham "polietly" -> Context -> polite
I am calling shubham "rudely" -> Context -> rude

IN JS we can only call function and nothing else.


our main agenda for this file would be to understand the context.

whenever you are calling a function you always have a context.

in js context is the keyword
*/

// ---------- 4 Rules of CONTEXT (this) --------------


// 1. Default binding

/* 
function foo() {
  // context - this // window/null (null -> strict mode)
  console.log("hello");

}

foo(); // is this a call site ? YES
// have i given any extra information ? No.
*/

// 2. Implicit Binding

// Example 1:

/* 
const obj = {
  name: "shubham",
  class:12,
  rollNumber:99,
  func: function () {
    console.log("hello");
    console.log(this);
    console.log(this.name);
    console.log(this.rollNumber);
  },
};
obj.func();
*/

// Example 2:
/* 
let obj = {
  name: "shubham",
  rollNumber:12,
  func: function () {
    console.log(this, "context");
    console.log(`hello my name is ${this.name}`);
  },
};

const funcCopy = obj.func;
funcCopy()
*/

// Example 3: Multiple Information

/* 
let obj2 = {
  name: "shubham",
  func: function () {
    console.log(`hello ..... ${this.name}`);
  }
};

let obj1 = {
  name: "sumit",
  rollNumber: 99,
  obj2: obj2,
};

obj1.obj2.func();
*/

// 3. Explicit Binding

/*
   In here user/developer is doing the hard work 


*/

// Example 1: Call

/* 
const obj1 = {
  name: "shubham",
  rollNumber: 99,
  func: function (a,b) {
    console.log("context", this);
    console.log(this.name, a, b);
  }
};

let obj2 = {
  name: "sumit",
  rollNumber: 1,
  
};

obj1.func(1,2);

obj1.func.call(obj2, 22, 222);
*/


// Example 2: Apply

/* 
const obj1 = {
  name: "shubham",
  rollNumber: 99,
  func: function (a,b) {
    console.log("context", this);
    console.log(this.name, a, b);
  }
};

let obj2 = {
  name: "sumit",
  rollNumber: 1,
  
};

obj1.func(1,2);

obj1.func.call(obj2, 22, 222);
obj1.func.apply(obj2, 22, 222);
*/

// Example 3: Bind
 
/* 
const obj = {
  name: "shubham",
  func: function (a, b) {
    console.log(this);
    console.log(`Hello ... ${this.name}`, a, b);
  },

  func2: function () {
    console.log("hello FromFunction 2");
  },
};


const funcCopy = obj.func.bind(obj);

setTimeout(funcCopy, 5000);
setTimeout(obj.func, 5000);
*/

// 4. New Binding

/* 

function car (name, speed, model) {
  this.name = name;
  this.speed = speed;
  this.model = model;
}

const Ferrari = new car("ferrari", 280, "v8");

console.log(Ferrari);

*/

// Example 4.

/* 
let obj = {
  name: "shubham",
  func: function () {
    this.standard = 12;
    console.log(`hello ... ${this.name}`);
  },
};

const object = new obj.func();
console.log(object);

// hello ... undefined
// {standard: 12}
*/

// Example 5.

function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`hello, I'm ${this.name}`);
  };
}

const person1 = new Person("asd");
const person2 = {
  name: "xaxa",
};

person1.sayHello.call(person2);
 








































































