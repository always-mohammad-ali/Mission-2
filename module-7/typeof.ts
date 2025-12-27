type Bird = {
    fly: () => void;
}

type Fish = {
    swim: () => void;
}

function move(animal : Bird | Fish){
    if("fly" in animal){
        animal.fly();
    }else{
        animal.swim();
    }
}

const parrot : Bird = {fly: () =>console.log("parrot is green")};
const goldenFish : Fish = {swim: () => console.log("fish is nice")};