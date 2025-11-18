let user : string[] = ["ali", "novel", "mohon", "nahim"];
user.push("ankon");

//console.log(user);
//console.log(user.length);

let mixedArray : (string | number | boolean)[] = ["ali", 20, true, 54, "mohon"];
//console.log(mixedArray);

let tupleArray : [string, number] = ["kajol", 45];
//console.log(tupleArray);

let tupleArray2 : [string, number, boolean] = ["hey", 54, true];
//console.log(tupleArray2);

let objects : {
    readonly organization : "nsu",
    firstName : string,
    middleName ?: string,
    lastName : string,
    age : number,
    isMarried : boolean
} = {
    organization : "nsu",
    firstName : "ali",
    lastName : "kali",
    age : 45,
    isMarried : false
}

console.log(objects);

