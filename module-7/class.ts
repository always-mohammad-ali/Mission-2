class Animal{
    name : string;
    specis : string;
    age : number;
    sound : string;

    constructor(name : string, specis : string, age : number, sound : string){
        this.name = name;
        this. specis = specis;
        this.age = age;
        this.sound = sound;
    }

    makesound(){
        console.log(`${this.name} is the best animal and its sound is hilarious ${this.sound}`);
    }
}

const dog = new Animal("dog vai", "dog", 15, "bark bark");
dog.makesound();

const cat = new Animal("cat vai", "cat", 32, "mew mew");
cat.makesound();

console.log(cat.age);