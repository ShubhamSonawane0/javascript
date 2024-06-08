//-------- Function -------------


function sum(a,b) {
    let c = a + b;

}

console.log(sum (1,2));


//  ---------- function Declaration -----------

function sum(a, b) {
    let c = a + b;

    return c;
}

// const sum1 = {}
const sum2 = function(a, b) {
    return a + b;
};

console.log(sum(1, 2));
console.log(sum2(99, 99));