//-------- Function -------------

/*
function sum(a,b) {
    let c = a + b;

}

console.log(sum (1,2));
*/

//  ---------- function Declaration -----------

 /*function sum(a, b) {
    let c = a + b;

    return c;
}

// const sum1 = {}
const sum2 = function(a, b) {
    return a + b;
};

console.log(sum(1, 2));
console.log(sum2(99, 99)); 
*/
// ------------ Function with default value ------------

/* function sum(a,b) {
    return a + b; 
}

console.log(sum(), "sum()");
console.log(sum(1), 'sum(1)'); 
console.log(sum(1,2), 'sum(1,2)');//3   
console.log(sum(1,2,3,4,5,6,7,8,9), 'sum(1,2,3,4,5,6,7,8,9)'); //3
 console.log(sum(5,5), 'sum');//10
*/
 // ------------ function returns ----------

 /* function sum(a,b) {
    let c = a + b;
 }

 sum(); // undefined

 function abc() {
    return 1;
 }
  
 abc(); //1

 function def() {
    return 1;

    return 2;
 }

 def();
 */

 /*function sum(a,b) {

    console.log("bbbb");
    return (a + b);
 }

const result = sum(100, 80);
console.log(result); 
*/
  
/*
function adds(a = 0,b = 0) {
return a + b
}
const ans1 = adds(80, 3);
const ans2 = adds();
const ans3 = adds(80);
 
console.log(ans1);
console.log(ans2);
console.log(ans3);
*/

// ------------ Rest OPERATOR ------------

/*
function admissiontoschool(name, standard, ...info) {
   const student ={
      name: name,
      std: standard,
      address: info[0],
   };
   console.log(info, "info rest operator");

   return student;

}

const shubhamobject = admissiontoschool("arun",9, "navi mumbai", "male", "father");

console.log(shubhamobject); 
*/

//----------------- Pass by values vs pass by reference  ---------------------------
/*
function sum(a, b){
   a = a + 10;
   b = b + 10;

   return a + b;
}

const res1 = sum(1, 2);
console.log(res1, "res1"); //23
*/

/*
let math = {
   marks: 100,
   grades: "A+"
}
let science = {
   marks: 90,
   grades: "A"
}

function summarks(obj1, obj2){
   obj1.marks = 30;
   obj2.marks = 40;

   return obj1.marks + obj2.marks;

}

const result = summarks(math, science);

console.log(result, "result"); //70 

console.log(math.marks + science.marks, 'math + science') //70

*/

// --------------- Pure And Impure ---------------
 
// THIS IS PURE FUNCTION
function sum(a, b) {
   let sum = a + b;

   return sum;
}

// IMPURE FUNCTION 

function sum(a, b) {

   console.log("abcd");

   return a + b;
}