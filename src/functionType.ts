// function type javascript
// function functionName(paramater){
//     // logic
// }

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


// function greet(firstName: string, lastName: string, title?: string): string {
//     return `hello ${firstName} ${lastName} . he is a ${title ? title : 'N/A'}`;
// }
// console.log(greet('Md .', 'Sharafat'))
// console.log(greet('Md .', 'Sharafat', 'Engineer'))

// function welcomeMessage(name: string = 'gest'): string {
//     return `hello ${name}`;
// }
// console.log(welcomeMessage())
// console.log(welcomeMessage('sharafat'))


// function add(a: number, b: number, c:number = 0): number {
//     return a + b+c;
// }
// // console.log(add(5,8));

// void 
// function logMessage(message: string): void{
//     console.log("hi", message);
// }
// logMessage('i am a typescript developer')


// never(advanced)
// function throwError() : never{
//     throw new Error('something went wrong');
// }
// throwError()




// arrow function

const add = (a: number, b: number): number => {
    return a + b;
}
// console.log(add(55, 50))



// square
const multiply = (a:number):number =>{
    return a*a;
}
// console.log(multiply(4));
