//oop : instance of type guard/ type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta ghumai`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta study koe`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta class nei`);
  }
}

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. teacher");
const person1 = new Person("Mr. Person");

getUserInfo(person1);


class FoodItem{
    public rice : string;
    public meat : string;

    constructor(rice : string, meat : string){
        this.rice = rice;
        this.meat = meat;
    }
}

class Desert extends FoodItem{
    public sweet : string;

    constructor(rice : string, meat : string, sweet : string){
        super(rice, meat);
        this.sweet = sweet;
    }

    desertFav(){
        console.log(`${this.sweet} is so delicious after eating ${this.rice} and ${this.meat}`);
    }
}

class Complimentary extends FoodItem{
    public soup : string;

    constructor(rice : string, meat : string, soup : string){
        super(rice, meat);
        this.soup = soup;
    }

    tastySoup(){
        console.log(`${this.soup} is tasty and yummy as initial dance and then ${this.rice} and ${this.meat} is as main dish`);
    }
}

const d1 = new Desert("polaw", "beef", "rosmalai");
const c1 = new Complimentary("biriyani", "rezala", "sweet");

const isDesert = (item : FoodItem) => {
    return item instanceof FoodItem;
}

const isComplitmentary = (item : FoodItem) =>{
    return item instanceof FoodItem;
}

