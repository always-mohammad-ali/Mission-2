class Parent{
    public familyName : string;
    public name : string;
    public age : number;

    constructor(familyName : string, name : string, age : number){
        this.familyName = familyName;
        this.name = name;
        this.age = age;
    }

    generalIdentity(){
        console.log(`Family name : ${this.familyName} , name : ${this.name} , age : ${this.age}`);
    }
}

class Son extends Parent{
    public school : string;
    constructor(familyName : string, name : string, age : number, school : string){
        super(familyName, name, age);
        this.school = school;
    
    }

    generalIdentity(): void {
        console.log(`Family name : ${this.familyName} , name : ${this.name} , age : ${this.age} and finally school name : ${this.school}`);
    }
}

const p1 = new Parent("chowdhury", "lal chowdury", 55);
p1.generalIdentity();

const s1 = new Son("chowdhury", "vuttu chowdhury", 10, "nsu");
s1.generalIdentity();