let colors : string[] = ["red", "green"];
let moreColor : string[] = ["blue", "yello"];
let mostColor : string[] = ["violate", "blue"];
 
console.log(colors);

 colors = [...colors, ...moreColor, ...mostColor];
 console.log(colors);

let friend : string[] = ["habib", "kawsar"];
console.log(friend[1], ...friend);

const student = {name:"hassan", id:"54"};
const student2 = {nick : "kamal", mobile:"43"};

let totalStudent = {...student, ...student2};
console.log( totalStudent);



//rest operator
const allCOlors = (...colors: string[]) =>{
    colors.forEach((color : string) =>
     console.log(`favourtite color is ${color}`)
    )
};

allCOlors("pumpkin", "joy");



