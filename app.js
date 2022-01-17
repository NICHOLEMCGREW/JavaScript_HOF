console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let plus15 = plus(15);
function plus(number) {
    return (plusNumber) => (plusNumber += number);
}

console.log(plus15(10));
