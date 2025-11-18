function formatValue(input: string | number | boolean): string | number | boolean{
    if(typeof input === "string"){
        return input.toUpperCase();
    }

    if(typeof input === "number"){
        return input * 10;
    }

    return !input;

}

console.log(formatValue("hello man, you are nice"));
console.log(formatValue(10));
console.log(formatValue(true));
console.log(formatValue(false));