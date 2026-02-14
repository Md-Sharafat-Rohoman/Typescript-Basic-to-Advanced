"use strict";
// function type javascript
// function functionName(paramater){
//     // logic
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function functionName(paramater: type): returnType{
//     // logic
// }
// function greet(name: string): string{
//     return `Hello ${name}`;
// }
// console.log(greet('sharafat rohoman'))
// function type signature
// let greetFunction: (name: string) => string;
// greetFunction = function(name: string): string{
//     return `Hi ${name}`;
// }
// console.log(greetFunction('zafourllah'))
function greet(firstName, lastName, title) {
    return `hello ${firstName} - ${lastName} . he is a ${title}`;
}
console.log(greet('Md .', 'Sharafat', 'Engineer'));
//# sourceMappingURL=functionType.js.map