//array, objects

let names : string[] = ["ali", "rahim", "novel"];
names.push("butto");
console.log(names);

let mixedArray : (string | number)[] = ["pen", 2, "boook", 4];
console.log(mixedArray);

let booleanValue = true;
booleanValue = false;
console.log(booleanValue);

//special type of array-- tuple

let firstTuple : [string, number] = ["Age: " , 17];
console.log(firstTuple);

let another : [number, number, string] = [5, 7, "12"];
console.log(another);

//lets go objects
let objects : {
    organization : "NSU"; //LITERAL TYPE, WHEN A DISTINCTIVE VALUE ASSIGNED
    firstName : string;
    middleName ? : string;
    lastName : string;
    age : number;
} = {
    organization : "NSU",
    firstName : "Mohammad",
   // middleName : "zinnah", 
    lastName : "Ali",
    age : 20
}

objects.age = 4;
console.log(objects);

let student : {
   readonly orga : "nsu";
    name : string;
    id : number;
    sec : number;
} = {
    orga : "nsu",
    name : "salimullah",
    id : 2512,
    sec : 9
}

console.log(student.orga);