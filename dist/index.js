"use strict";
// primitive data type
Object.defineProperty(exports, "__esModule", { value: true });
// string
let name = 'sharafat';
name = 'rohoman';
console.log(name);
// number
let age = 20;
age = 25;
console.log(age);
// boolean
let isPassed = true;
isPassed = false;
console.log(isPassed);
// array
// number array
let score = [90, 92, 93, 98];
console.log(score[0]);
// string array
let names = ['sharafat', 'rohoman', 'zafourllah'];
console.log(names);
let score2 = [90, 92, 93, 98, 100];
let names2 = ['sharafat', 'rohoman', 'zafourllah'];
console.log(score2, names2);
// tuples data type
let student = ['sharafat', 20, true];
console.log(student);
console.log(student[1]);
// any
let randomValue = 'sharafat';
randomValue = 10;
randomValue = true;
console.log(randomValue);
// unKnown
let value = 'world';
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
// void
function logMessage() {
    console.log('Logged successfully');
}
// undefine
// let boos ;
let boos = null;
console.log(boos);
// null
// let books = null;
// console.log(books);
let books = undefined;
console.log(books);
//# sourceMappingURL=index.js.map