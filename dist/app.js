"use strict";
// const student1 = {
//     name: 'sharafat rohoman',
//     age: 19,
//     isEnrolled: true,
//     courses: ['javascript', 'typescript', 'react'],
//     score: [84, 95, 80],
//     info: ['sharafat', 19, true]
// }
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: 'sharafat rohoman',
    age: 19,
    isEnrolled: true,
    courses: ['javascript', 'typescript', 'react'],
    score: [84, 95, 80],
    info: ['sharafat', 19, true]
};
// console.log(student1)
function displayStudent(student) {
    console.log(`name: ${student.name}`);
    console.log(`age: ${student.age}`);
    console.log(`courses: ${student.courses.join(', ')}`);
}
console.log(displayStudent(student1));
//# sourceMappingURL=app.js.map