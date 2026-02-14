"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
// function power(base:number, exponent:number=0):number{
//     return Math.pow(base,exponent);
// }
function calculate(operation, a, b = 0) {
    switch (operation) {
        case "+": return add(a, b);
        case "-": return sub(a, b);
        case "*": return mult(a, b);
        case "/": return divide(a, b);
        default: throw new Error('Invalid operation');
    }
}
function showUser(user) {
    return `hello ${user.name}. he is a ${user.age}. `;
}
const user1 = {
    name: 'sharafat rohoman',
    age: 20
};
console.log(showUser(user1));
const item1 = {
    id: 1,
    name: 'phone',
    price: 15000,
    description: 'tader theke phone kine amar onk valo laglo'
};
function productDetails(user) {
    return user;
}
console.log(productDetails(item1));
//# sourceMappingURL=calculator.js.map