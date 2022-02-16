// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`



// Methods



// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

function Animal(location , legs){
    let animal = Object.create(animalMethods);
    animal.location = location ;
    animal.numberOfLegs = legs;
    return animal;
}

let animalMethods = {
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

let animal  = Animal("Dharmshal",4);
console.dir(animal);
console.log(animal.summary());
console.log(animal.eat());
console.log(animal.changeLocation('jungle'));


// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.
// Properties:
function Dog(name , color){
    let dog= Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}
// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

let dogMethods = {
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

let dog  = Dog("Pochi", "yellowBrown");
console.log(dog.bark());
console.log(dog.changeName("dodo"));
console.log(dog.changeColor("lightYellow"));
console.log(dog.summary());


Object.setPrototypeOf(dog,animal);
console.log(dog.eat());
console.log(dog.changeLocation('alt-campus'));
console.log(`i am ${dog.name} and i live in ${dog.location}`)
// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`



function Cat(name,eyeColor){
    let cat   = Object.create(catMethods);
    cat.name = name;
    cat.colorOfEyes = eyeColor;
    return cat;
}

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

let catMethods = {
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
    
}

let cat = Cat("billi","brown");
cat.meow();
cat.summary();
cat.changeName('kitty');
cat.changeColorOfEyes('red');
cat.summary();

Object.setPrototypeOf(cat.animal);
console.log(cat.location);
console.log(cat.numberOfLegs);
