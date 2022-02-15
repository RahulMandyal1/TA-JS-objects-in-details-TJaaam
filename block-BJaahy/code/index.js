// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }

}
// - Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${width}x ${height}`);
    }
}
// - Create a method inside the class named `calcArea` that will return the area of the square.
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${this.width}x ${this.height}`);
    };
    clacArea(){
        return ` Area of square is ${this.width*this.height}}`;
    }
}
// - Create a `area` getter method using which we can get the area of the square.
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${this.width}x ${this.height}`);
    };
    clacArea(){
        return ` Area of square is ${this.width*this.height}}`;
    };
    get area{
        return this.calcArea();
    }
}
// - Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`.
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${this.width}x ${this.height}`);
    };
    clacArea(){
        return ` Area of square is ${this.width*this.height}}`;
    };
    get area(){
        return `${this.width*this.height}`;
    };
    set area(value){
        let side = Math.sqrt(value);
        this.width = side;
        this.height = side;
    };
 }
// - Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${this.width}x ${this.height}`);
    };
    clacArea(){
        return ` Area of square is ${this.width*this.height}`;
    };
    get area(){
        return `${this.width*this.height}`;
    };
    set area(value){
        let side = Math.sqrt(value);
        this.width = side;
        this.height = side;
    };
     static isEqual(obj1,obj2){
        let area = obj1.width * obj1.height;
        let area2 = obj2.width * obj2.width;
        if(area === area2){
            return true;
        }
        return false;
    }
 }
// - Create two instance of the `Square` class
let firstInstance = new Square(20,10);
let secondInsatance = new Square(22,22);
// - Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
firstInstance.area;
secondInsatance.area;
firstInstance.area;
secondInsatance.area;

// - Check the `isEqual` method and pass the two instance you created above.
Square.isEqual(firstInstance,secondInsatance);
// ## User Class
class User {
  
}
// - Create a `User` class that accepts `firstName` and `lastName` property
class User{
    constructor(firstName,lastName);
}
// - Create a getter method named `fullName` that will return the full name of the person.
class User{
    constructor(firstName,lastName);
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`
class User{
    constructor(firstName,lastName);
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName (fullname){
        let name = fullname.split(" ");
        this.firstName = name[0];
        this.lastName = name [1];
    }
}
// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    };
    set fullName (fullname){
        let name = fullname.split(" ");
        this.firstName = name[0];
        this.lastName = name [1];
    };
    nameContains(name){
        if(typeof(name)=== 'string'&&name.length>1){
            return true;
        }
        return false;
    };
}
// - Create two instance of the `User` class
let userOne = new User("Rahul","Thakur");
let userTwo = new User("Vishal","Thakur");
// - Check by using the `fullName` setter method with name bigger than 5 characters.
userOne.fullName = "Vishu Thakur";

// - Check by using the `fullName` setter method with name less than 5 characters.
userTwo.fullName  = "Akash Singh";
// - Check the `fullName` using getter
userOne.fullName;
userTwo.fullName;
// - Check the `nameContains` method
userOne.nameContains("Rahul");
userTwo.nameContains("");