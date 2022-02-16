function Animal(location , legs){
    this.location = location ;
    this.numberOfLegs = legs;
}

Animal.prototype = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(newLocation){
        this.location = newLocation;
    },
    summary(){
        return ` I live in ${this.location} and I have ${this.numberOfLegs} legs`;
    }

};

let animal  =  new Animal("Dharmshal",4);
console.dir(animal);
console.log(animal.eat());
console.log(animal.changeLocation('jungle'));
console.log(animal.summary());



// Pseudo classial pattern for dog.
function Dog(name , color){
    Animal.apply(this,["Alt-campus",4]);
    this.name = name;
    this.color = color;
}

Dog.prototype = {
    bark(){
        alert(`I am ${ this.name} and I can bark 🐶`);
    },
    changeName(newName){
        this.name = newName;
    },
    changeColor(newColor){
        this.color =newColor;
    },
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

Object.setPrototypeOf(Dog.prototype , Animal.prototype);

let pochi = new Dog("Pochi ", "BrownYellow");


//pseudo classical pattern for pochi 


function Cat(name,eyeColor){
   this.name = name;
   this.colorOfEyes = eyeColor;
   Animal.apply(this,["Alt-campus",4]);
}

Cat.prototype = {
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName){
        this.name = newName;
    },
    changeColorOfEyes(newColor){
        this.colorOfEyes =newColor;
    },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
};

Object.setPrototypeOf(Cat.prototype , Animal.prototype);

let kitty = new Cat("kitty","brownRed");
