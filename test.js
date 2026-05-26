function sum(a, b) {
    return a + b;
}
sum(2, 3);

function multiply(a, b) {
    return a * b;
}
multiply(4, 5);

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }   
    return a / b;
}
divide(10, 2);

function subtract(a, b) {
    return a - b;
}
subtract(7, 4);