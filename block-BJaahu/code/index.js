
function createQuestion(title,options,correctAnswerIndex){
    let obj = {};
    obj.title = title ;
    obj.options = options;
    obj.correctAnswerIndex = correctAnswerIndex;
    obj.isAnswetCorrect = function(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        return false;
    };
    obj.getCorrectAnswer = function(){
        return this.options[obj.correctAnswerIndex];
    };
    return obj;
}

createQuestion();

let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
     1
);

console.group(firstQuestion.title)
console.log(firstQuestion.options);
console.log(firstQuestion.isAnswetCorrect(0));
console.log(firstQuestion.getCorrectAnswer());
console.groupEnd();


// Now using dunder proto method create methods  for  the objects

// Now we  do not need to deal with an extra variable for creating methods optimizing the Object
let questionMethods  = {
    isAnswetCorrect : function(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        return false;
    },
    getCorrectAnswer : function(){
        return this.options[this.correctAnswerIndex];
    },
};

function createQuestion(title,options,correctAnswerIndex){
    let question = Object.create(questionMethods);
    question.title = title ;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    return question;
}

let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
     1
);

console.group(firstQuestion.title)
console.log(firstQuestion.options);
console.log(firstQuestion.isAnswetCorrect(0));
console.log(firstQuestion.getCorrectAnswer());
console.groupEnd();


//Now again optimizing the object now using a special  property prototype of the function to store the methods so we do not 
// need to deal with an extra variable

function createQuestion(title,options,correctAnswerIndex){
    let question = Object.create(createQuestion.prototype);
    question.title = title ;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    return question;
}
createQuestion.prototype = {
    isAnswetCorrect : function(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        return false;
    },
     getCorrectAnswer:function(){
        return this.options[this.correctAnswerIndex];
    },
}


let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
     1
);

console.group(firstQuestion.title)
console.log(firstQuestion.options);
console.log(firstQuestion.isAnswetCorrect(0));
console.log(firstQuestion.getCorrectAnswer());
console.groupEnd();

// Now finally using  the new keyword  to create now questions

function createQuestion(title,options,correctAnswerIndex){
   this.title = title ;
   this.options = options;
   this.correctAnswerIndex = correctAnswerIndex;

}
createQuestion.prototype = {
    isAnswetCorrect : function(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        return false;
    },
     getCorrectAnswer:function(){
        return this.options[this.correctAnswerIndex];
    },
}

let firstQuestion =  new createQuestion(
    'Where is the capital of Jordan',
     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
     1
);

console.group(firstQuestion.title)
console.log(firstQuestion.options);
console.log(firstQuestion.isAnswetCorrect(0));
console.log(firstQuestion.getCorrectAnswer());
console.groupEnd();

// Now using the class  to crate object and optimize our code 
class createQuestion{
    constructor(title,options,correctAnswerIndex){
       this.title = title ;
       this.options = options;
       this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswetCorrect(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        return false;
    };
     getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    };   
}
 
 
 let firstQuestion =  new createQuestion(
     'Where is the capital of Jordan',
      ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
      1
 );
 
 console.group(firstQuestion.title)
 console.log(firstQuestion.options);
 console.log(firstQuestion.isAnswetCorrect(0));
 console.log(firstQuestion.getCorrectAnswer());
 console.groupEnd();


