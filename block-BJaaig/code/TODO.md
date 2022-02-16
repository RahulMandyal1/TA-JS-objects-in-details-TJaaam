## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // " Hello John " / no error  becuase  everything is syntactically  good  This will return a string Hello John

console.log(user2.sayHello()); // " Hello Arya " / no error  becuase  everything is syntactically  good  This will return a string Hello John

console.log(user.sayHello.call(user2)); //  Hello Arya / this will result into the user2 value becuase  we are explicitely changing the values of the  this by passing  the user2 object and user  2 has a value of of Arya of username so this will prints Hello Arya
console.log(user.sayHello.call(user2, 'Hey')); //'Hey Arya'
//this will result into the user2 value becuase  we are explicitely changing the values of the  this by passing  the user2 object but we are also passing argument message value as 'Hey'
console.log(user.sayHello.apply(user2, ['Hey'])); //'Hey Arya'
// output remains the same above method but here we are passing arguments to the sayHello by apply method in a form of array
console.log(typeof user.sayHello.bind(user2)); // return function Becuase we are returning  type here 
console.log(user.sayHello.bind(user2)()); // 'Hello Arya'
// Here we are Explicitely changing the value  by using bind and no the same line we are calling the function because bind()  method returns a function reference. so we have to call it again
console.log(userSayHello()); // Error // Refernce Error
// becuase we  have not defined userSayHello() function anywhere
console.log(typeof userSayHello.bind(user2));// userSayHello is not defined reference error becasue there is no userSayHello obejct in our code
console.log(userSayHello.bind(user2)()); //  userSayHello is not defined reference error becasue there is no userSayHello obejct in our code
console.log(user3.sayHello()); // sayHello() is not defined error
console.log(userSayHello.apply(user3)); // userSayHello is not defined reference error becasue there is no userSayHello obejct in our code
console.log(userSayHello.call(user3)); // userSayHello is not defined reference error becasue there is no userSayHello obejct in our code
console.log(typeof new MainUser()); // object // Becuase new keyword always return a   obejct
console.log(typeof new MainUser()); // object // Becuase new keyword always return a   obejct
console.log(new MainUser().sayHello()); // 'Hello Tyrion'
console.log(new MainUser().sayHello.call(user)); //   'Hello Arya'
//Explicitely changing the value of this object to user2 obejct 
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output / Welcome John
//Explicitely changing the value of this object to user obejct  and also passing  the argument value of SayHello() as Welcome
```
