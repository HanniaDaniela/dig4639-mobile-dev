
class Pet {
    constructor(props) {
        this.props = props;
    }
    getName() {
        return this.props.name;
    }
    getSpecies() {
        return this.props.species;
    }
    getSpeech() {
        return "I make this sound";
    }
    getIdentity = () => {
        console.log(this);
    }
    //get sum = (a,b) => a + b
    getSum = (a,b) => {
        return a + b;
    }
}

class Cat extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "cat";
    }
    getSpeech() {
        return super.getSpeech() + "Meow!";
    }
}
class Dog extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "dog";
    }
    getSpeech() {
        return super.getSpeech() + "Ruff Ruff!";
    }
}
function sayName(pet) {
    console.log(`My name is ${pet.getName()}, and I am a ${pet.getSpecies()}`);
    console.log(`${pet.getSpeech()}`);
}

var myPet = new Cat({name:"Yoongi"});
sayName(myPet);
myPet.getIdentity();
//assign the method getIdentity to the variable myidentity
var myIdentity = myPet.getIdentity;
//call the new function using the myIdentity variable 
myIdentity();
var myDog = new Dog({name:"Holly"});
sayName(myDog);
console.log(myDog.getSum(10,20))