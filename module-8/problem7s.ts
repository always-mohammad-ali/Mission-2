function getUniqueValues(arr1 : string[] | number[], arr2 : string[] | number[]): string[] | number[]{
   let uniqueValues : any[] = [] ;

   for(let i = 0; i < arr1.length; i++){
     let exists = false;

      for(let j = 0; j < uniqueValues.length; j++){
          if(arr1[i] === uniqueValues[j]){
            exists = true;
            break;
          }
      }

       if(!exists){
        uniqueValues.push(arr1[i]);
      }

   }

   for(let i = 0; i < arr2.length; i++){
    let exists = false;

    for(let j = 0; j < uniqueValues.length; j++){
        if(uniqueValues[j] === arr2[i]){
            exists = true;
            break;
        }
    }

    if(!exists){
        uniqueValues.push(arr2[i]);
    }
   }

   return uniqueValues;

     
}







const array1 = [1, 2, 3, 4, 5, 6, 6];
const array2 = [3, 4, 5, 6, 7, 8, 9, 100];

console.log(getUniqueValues(array1, array2));


const array3 = ["hey", "hi", "how"];
const array4 = ["how", "are", "you", "man"];
console.log(getUniqueValues(array3, array4));

const array5 = [54, 54, 38, 32];
const array6 = ["hi", "man"];
console.log(getUniqueValues(array5, array6));