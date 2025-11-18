function getLength(value : string | (string | number)[]) : number{
    if(typeof value == "string"){
        return value.length;
    }

    return value.length;
}

console.log(getLength("hey hi ho  "));
console.log(getLength([4, 6, 98, 532, 1, 0, -5]));
console.log(getLength(["ali", "hi",".", "said", "mirza kader"]));