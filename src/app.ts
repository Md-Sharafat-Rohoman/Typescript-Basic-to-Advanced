// const student1 = {
//     name: 'sharafat rohoman',
//     age: 19,
//     isEnrolled: true,
//     courses: ['javascript', 'typescript', 'react'],
//     score: [84, 95, 80],
//     info: ['sharafat', 19, true]
// }

type student = {
    name: string,
    age: number,
    isEnrolled: boolean,
    courses: string[],
    score: number[],
    info: [string, number, boolean]
}


const student1: student = {
    name: 'sharafat rohoman',
    age: 19,
    isEnrolled: true,
    courses: ['javascript', 'typescript', 'react'],
    score: [84, 95, 80],
    info: ['sharafat', 19, true]

}
// console.log(student1)
function displayStudent(student: student): void {
    console.log(`name: ${student.name}`)
    console.log(`age: ${student.age}`)
    console.log(`courses: ${student.courses.join(', ')}`)
}
console.log(displayStudent(student1))