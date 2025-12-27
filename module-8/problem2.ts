function getLength(value : string | (string | number)[]) : number{
    if(typeof value == "string"){
        return value.length;
    }

    return value.length;
}

console.log(getLength("hey hi ho  "));
console.log(getLength([4, 6, 98, 532, 1, 0, -5]));
console.log(getLength(["ali", "hi",".", "said", "mirza kader"]));


function getValueLength(value : string | (number | string)[]) : string {

    if(typeof value == "string"){
        return `it is string bro and its length is ${value.length} and ${value}`; 
        
    }
     
    return `it may string array or number array and its length is ${value.length} and ${value}`
   
    
}

console.log(getValueLength("hello good morning, you have a nice looking eye"));
console.log(getValueLength([45, 32, 5444]));
console.log(getValueLength(["an", "up"]));
console.log(getValueLength([3, 4, 1, 3,2,4,4]));