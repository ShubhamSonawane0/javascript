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

 function sum(a,b) {
    return (a - b);
    return (a + b);
 }

const result = sum(100, 80);
console.log(result);