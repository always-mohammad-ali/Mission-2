function formatValue(input :any){

      if(typeof input == "string"){
         const makeUpperCase = input.toUpperCase();
        return console.log(makeUpperCase);
      }
      
      if(typeof input == "number"){
        const multiple = 10 * input;
        return console.log(multiple);
      }
      

      if(typeof input == "boolean"){
        if(input == false){
            console.log(true);
        }
        else if(input == true){
            console.log(false);
        }
      }
     
}

formatValue("hey mongolia man lets get life ha ha etai bastobota");
formatValue(10);
formatValue(false);
formatValue(true);
formatValue(5);
formatValue(false);
formatValue("hello sir ji")




