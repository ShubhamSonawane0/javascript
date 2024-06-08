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

//-----------------

const A = 12;
console.log(A);