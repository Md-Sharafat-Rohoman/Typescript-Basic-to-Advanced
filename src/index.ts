// primitive data type

// string
let name: string = 'sharafat';
name = 'rohoman'
console.log(name)


// number
let age: number = 20;
age = 25;
console.log(age)

// boolean
let isPassed: boolean = true;
isPassed = false;
console.log(isPassed)



// array
// number array
let score: number[] = [90, 92, 93, 98];
console.log(score[0])
// string array
let names: string[] = ['sharafat', 'rohoman', 'zafourllah'];
console.log(names);

let score2: Array<number> = [90, 92, 93, 98, 100]
let names2: Array<string> = ['sharafat', 'rohoman', 'zafourllah'];
console.log(score2, names2);



// tuples data type
let student: [string, number, boolean] = ['sharafat', 20, true];
console.log(student);
console.log(student[1]);


// any
let randomValue: any = 'sharafat';
randomValue = 10;
randomValue = true;
console.log(randomValue);

// unKnown
let value: unknown = 'world';
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}


// void
function logMessage(): void {
    console.log('Logged successfully');
}

// undefine
// let boos ;
let boos: null = null;
console.log(boos);

// null
// let books = null;
// console.log(books);
let books: undefined = undefined;
console.log(books);