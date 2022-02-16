/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let obj ={};
  obj.name = name;
  obj.age = age;
  return obj;
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  greet : function(){
    console.log('Hello');
  }
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let obj = Object.create(null);
  obj.name = name;
  obj.age  = age ;
  return obj
}
var sandra = personFromPersonStore('Sandra', 26);
Object.setPrototypeOf(sandra , personStore);




// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'


/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function(){
  console.log(`hi my name is ${this.name}`);
}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet = function(){
    console.log("Hello");
  }
}


/********* Uncomment this line to test your work! *********/

var simon = new PersonConstructor();
 simon.greet(); // -> Logs 'hello'
/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
   this.name = name ;
   this.age = age ;
}

var mike =  new personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
Object.setPrototypeOf(mike,simon);
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here
PersonConstructor.prototype = {
  introduce(){
    console.log(`Hi my name is ${this.name}`);
  }
}
Object.setPrototypeOf(mike,simon)
// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor(name){
      this.name = name;
  }
  greet(){
      console.log('Hello');
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/
class DeveloperClass  extends PersonClass{
  constructor(name){
       super(name);
  }
  introduce(){
    console.log(`Hello World my name  is ${this.name}`);
  }
}
// add code here

/********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = Object.create(userFunctionStore);



function adminFactory(name, score) {
  // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
