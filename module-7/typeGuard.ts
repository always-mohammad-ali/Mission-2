type AlphaNumeric = number | string;

const add = (num1 : AlphaNumeric, num2 : AlphaNumeric) =>{
    if(typeof num1 === "number" && typeof num2 === "number"){
          return num1 + num2;
    }
    else{
      return num1.toLocaleString() + num2.toLocaleString();
    }
}

console.log(add(5, 6));
console.log(add("5", 6));
console.log(add("5", "6"));
console.log(add(2, 3));


type NormalUser = {
    name : string;
    
}

type Moderator = {
    name : string;
    position : "moderator";
}

type AdminUser = {
    name : string;
    role : "admin";
}

const findUserType =( user : NormalUser | AdminUser | Moderator)=>{
      if("role" in user){
         console.log(`${user.name} is ${user.role}`);
      }
      else if("position" in user){
        console.log(`${user.name} is ${user.position}`);
      }
      else{
        console.log(`${user.name} is normal user`);
      }
}

findUserType({name : "ali", role : "admin"});
findUserType({name : "hasnat"});
findUserType({name : "nahid", position: "moderator"});