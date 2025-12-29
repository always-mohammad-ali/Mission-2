class Counter{
    static count : number = 0;


     add(){
        Counter.count++;
        return Counter.count;
    }

}

//console.log(Counter.add()); gives output when function add is static
//console.log(Counter.add());

const a1 = new Counter(); //when function add is not static
console.log(a1.add());
console.log(a1.add());