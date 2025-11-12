function sumOfTwo (num1 : number, num2 : number) : number{
       return num1 + num2;
}

console.log(sumOfTwo(4, 5));

const multiply = (num1 : number, num2 : number): number => num1*num2;

console.log(multiply(4, 5));

const square = (num1 : number ) : number => num1 * num1;
console.log(square(5));

// when a function used inside object, it's called method;

const student = {
    name : "ALi",
    tuition : 0,
    totalTuition(newTutition : number){
         return this.tuition += newTutition;
    }

}

console.log(`Total tuition = `, student.totalTuition(5000));
console.log(`Total tuition = `, student.totalTuition(51000));

const arr : number[] = [5, 4, 3, 2, 1];
const sqrArr : number[] = arr.map((singleElement : number) => singleElement * singleElement);
console.log(sqrArr);