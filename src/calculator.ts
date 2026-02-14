function add(a: number, b: number): number {
    return a + b;
}
const sub = (a: number, b: number): number => a - b;
const mult = (a: number, b: number): number => a * b;

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Cannot divide by zero')
    }
    return a / b;
}
// function power(base:number, exponent:number=0):number{
//     return Math.pow(base,exponent);
// }
function calculate(operation: string, a: number, b: number = 0) {
    switch (operation) {
        case "+": return add(a, b);
        case "-": return sub(a, b);
        case "*": return mult(a, b);
        case "/": return divide(a, b);
        default: throw new Error('Invalid operation');
    }
}

// console.log("Add :", calculate("+", 4, 3));



type user = {
    name: string,
    age: number,
    isActive?: boolean
}
function showUser( user: user){
    return `hello ${user.name}. he is a ${user.age}. `
}
const user1 = {
    name: 'sharafat rohoman',
    age: 20
}
console.log(showUser(user1));


// products
type products = {
    id:number,
    name: string,
    price: number,
    description: string
}
const item1: products= {
    id: 1,
    name: 'phone',
    price: 15000,
    description: 'tader theke phone kine amar onk valo laglo'
}
function productDetails(user: products){
    return user;
}
console.log(productDetails(item1));