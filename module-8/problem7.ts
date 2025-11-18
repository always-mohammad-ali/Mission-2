function getUniqueValues(arr1: string[] | number[], arr2: string[] | number[]): string[] | number[] {
    const unique: any[] = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === arr1[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            unique.push(arr1[i]);
        }
    }
    
    for (let i = 0; i < arr2.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === arr2[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            unique.push(arr2[i]);
        }
    }
    
    return unique;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

const array3 = ["a", "b", "c", "hey", "hi"];
const array4 = ["b", "c", "d", "hi"];
console.log(getUniqueValues(array3, array4));