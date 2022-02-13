

// Without the use of object 

let title = "What is the capital of himachal pradesh ";
let options = ['shimla','kangra','mandi'];
let correctAnswer = 1;
function isAnswerCorrect (index){
    if(index === correctAnswer){
        return true;
    }
    return false;
}
function  getCorrectAnswer(){
    return options[correctAnswer];
}

// With the use of objects 
let questionOne  ={
    title : "What is the capital of himachal pradesh ",
    options : ['shimla','kangra','mandi'],
    correctAnswer  : 1,
    isAnswerCorrect (index){
        if(index === questionOne.correctAnswer){
            return true;
        }
        return false;
    },
    getCorrectAnswer(){
        return options[questionOne.correctAnswer];
    }
}
// testing of the questionOne  with the user Desired Answer and finally giving him the answer of that particular question
console.group(questionOne.title);
console.log(questionOne.options);
console.log(questionOne.isAnswerCorrect(1));
console.log(questionOne.getCorrectAnswer());
console.groupEnd();


// Now  Creating  the  object with the help of function
  function createQuestion (title,options,correctAnswer){
      let question = {};
      obj.title = title;
      obj.options  = options;
      obj.correctAnswer = correctAnswer;
      obj.isAnswerCorrect = function(index){
        if(index === obj.correctAnswer){
            return true;
        }
        return false;
      };
      obj.getCorrectAnswer = function(){
        return obj.options[obj.correctAnswer];
      };
      return question;

  }

  // Now using the this keyword  in the function

  function createQuestion (title,options,correctAnswer){
    let question = {};
   question.title = title;
   question.options  = options;
   question.correctAnswer = correctAnswer;
   question.isAnswerCorrect = function(index){
      if(index === this.correctAnswer){
          return true;
      }
      return false;
    };
   question.getCorrectAnswer = function(){
      return this.options[this.correctAnswer-1];
    };
    return question;

}

// Now calling the function 


let questionOne  = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let questionTwo = createQuestion(
    "What is the capital of himachal pradesh ",
    ['shimla','kangra','mandi'],
    1
);

// Now testing  and Printing in the console 
console.group(questionOne.title);
console.log(questionOne.options);
console.log(questionOne.isAnswerCorrect(1));
console.log(questionOne.getCorrectAnswer());
console.groupEnd();

// Now the  second question 
console.group(questionTwo.title);
console.log(questionTwo.options);
console.log(questionTwo.isAnswerCorrect(0));
console.log(questionTwo.getCorrectAnswer());
console.groupEnd();