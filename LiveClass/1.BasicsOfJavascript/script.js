/*
console.log("hey there");


// 1;

//var math = 100;
//var physics = 60;

//var sum = physics + math;

//console.log(sum);

let math = 20;

math = 80;

console.log("math Marks:", math);

let a = 99;

a = 0;
console.log("a:", a);

let score = 350;

var commentary1 = "hey india score is 300";
let commentary2 = `hey india score is ${score}`;

console.log(commentary1);
console.log(commentary2);

// objects (object, arrays, function)

var shubham = {
    name: "shubham",
    age: 22,
    rollnumber: 44,
    isadult: true,
    address: {
         pincode: 400708, 
         steet: 53,
         distict: "thane"
    },
    subjects: ['math', "physics"],
}

let array = [1, 2, 3, 4, 5, 6];

console.log(array);  
console.log(shubham);

//------------------ typeof Keywords ----------------------------------

const marks = 12;
const typeofmarks = typeof marks;
console.log("typeofmarks", typeofmarks); // number

const thesunishot = true;
const Thesunishot = typeof thesunishot;
console.log("Thesunishot", Thesunishot); // boolean

const number = "a";
const Number = typeof number;
console.log("ABC", Number); // string

let weather;
console.log(typeof weather, "weather"); // undefined

let school = null;
console.log(typeof school, "school"); // object

//--------------------primitives & non-primitives --------------------------

//-------primitives---------
// number
// boolean
// big int
// null
// undefined
// string

//-------non-primitives---------

// object
// function
// arrays

//---------------------conversion---------------
// note: string + anythings = string

console.log("abc" + "dd")
console.log(1 + "abc");
console.log(1 + "1");
console.log("" + [1, 2, 3, 4]);
console.log("" + {});
console.log("abc" + null);
console.log("abc" + undefined);


const x = 2;
console.log("abc" + x);

//---------string with (-. *, /);---------

const mult = "3" * "3";
const divide = "6" / "3";
const minus = "3" - "1";
const remainder = "103" % "50";

console.log(mult, "mult"); // 9
console.log(divide, "divide"); // 2
console.log(minus, "minus"); // 2
console.log(remainder, "remainder"); // 3 

//--------------Arrays--------

const arrays = [1, 2, 3, 4, 5, 6];
console.log(arrays.length);
 
//-------- push ------

const arr = [1, 2, 3, 4, 5]

const newlengthofarr = arr.push(6);
console.log(arr);
*/

// 2.POP -> removing the element from the last
const arr = [1, 2, 3, 4, 5];
 /*
 console.log(arr, "original array");
const popedvalue = arr.pop();
console.log(popedvalue, "poped value");
console.log(arr, "array after popping");
*/

// 3.Shift -> removing the element from the start.

/*
console.log(arr,"before shift");
const shiftedvalue = arr.shift();
console.log(shiftedvalue, "shifted val");
console.log(arr, "after shift");
*/


// 4.unShift -> add elements in the start of the array
console.log(arr,"before shift");
const newlengthofarr = arr.unshift(1);
console.log(newlengthofarr, "new length");
console.log(arr, "after shift");


//----------------- parsing in javascript -------------

/*
let A = 12;
console.log(A);
*/

// --------------------- Hoisting -------------------

// variable declarations and function declaration are HOISTED

// Hoisting means to bring variable and function declaration to top.
/*
const result = sum(1, 2)
console.log(result)

console.log(a);

function sum(a,b) {
    return a + b
}

var a = 99; 
*/

// --------- Basic operation (assignment, Operator) -------- 

console.log(1 + 20); //21

console.log(Math.pow(2, 3)); //8

// modulus ... % .

console.log(101 % 3); //2
console.log(5 % 2); //1
console.log(10 % 5); //0

//--------------- Comparisions ------------------

console.log(1 > 2); // false
console.log(1 < 2); //true

console.log(1 <= 2); //true
console.log(1 >= 2); //false

console.log(1 == 2); //false
console.log(1 != 2); //true

// ===, !==

console.log(1 === 2); //false
console.log(1 !== 2); //true
console.log(1 === "1"); //false

// -------------- Basic Programming -------------

// conditions;
/*
// 1. if - else
if(money) {
// than do this true part
// iphone
} else {
    // if your condition is false
    // cheap chinese phone.

}
*/
// Ternary statement.

// (condition) ? buy iphone : cheap chinese phone.

// 2. switch statement

/*
switch (condition) {
    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;

    default:
        console.log("apart from value 1 and 2");
        break;
}

*/

// --------------- Loops ------------------\
/*
let arr = [12, 19, 18, 4, 6, 9]

let lengthofarray = arr.length; //6
0 - 5
*/
// 1. for loop;

/*
for (let i = 0; i < lengthofarray; i++){
    const item = arr[i];
    console.log(item); 
}
*/

// 2. while loop

/*
let i = 0;
while(i < lengthofarray) {
console.log(arr[i], "while loop");

i++;
}

*/

// 3. for In - (keys)
// for In loop is for the objects({}, []) and its properties. (Object keys)

/*
const obj = {
    name: "shubham",
    class:12,                         
    address: "airoli",
};

for (const key in obj) {
    const value = obj[key];
    console.log(key + " : " + value);
}

*/

// 4. For of -> (values)
// Iterable objects -> Arrays by default iterable objects.
// if your object has symbol(Symbol.iterator) then your object is iterable object.
/*
for (const item of arr) {
    console.log(item, "for of loop");
}

*/
  
/*
let obj = {
    name: "shubham",
    class: 12,
};
for (const item of obj) {
    console.log(item, "for of loop");
}
*/

// ------------- Advance Parts of variable ---------------

let name = "shubham";
var a = 12;

function abc() {
  var a = 99  
}