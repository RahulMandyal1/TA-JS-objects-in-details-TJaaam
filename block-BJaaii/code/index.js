class Stack{
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
        return this.stack;
    }
    pop(element){
        this.stack.pop(element);
        return this.stack;
    }
    peek(parm = "empty"){
        if(parm){
            return this.stack[this.stack.length-1];
        }
       return this.stack[parm];
    }
    displayStack(){
        return this.stack.join(" ");
    }
    reverse(){
        return this.stack.reverse();
    }
    
    get length(){
        return this.stack.length;
    }
    isEmpty(){
        if(this.stack.length = 0){
            return true;
        }
        return false;
    }
}

let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true

class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }
    dequeue(element){
        this.queue.shift(element);
        return this.queue;
    }
    peek(parm = "empty"){
        if(parm){
            return this.queue[this.queue[0]];
        }
       return this.queue[parm];
    }
    displayQueue(){
        return this.queue.join(" ");
    }    
    get length(){
        return this.queue.length;
    }
    isEmpty(){
        if(this.queue.length = 0){
            return true;
        }
        return false;
    }
}

let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true