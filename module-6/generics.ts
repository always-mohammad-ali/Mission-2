function identity<T>(param : T) : T{
    return param;
}

let student = identity<string>("i am ali");
console.log(student);

let age = identity<number>(15);
console.log(age);