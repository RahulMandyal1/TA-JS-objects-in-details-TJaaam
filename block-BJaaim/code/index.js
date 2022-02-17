class QuestionMethods {
    constructor(title,options,correctAnswer){
        this.title  = title;
        this.options =options;
        this.correctAnswer =correctAnswer ;
    }
    isCorrect(answer){
        this.createUi();
        if(quiz.allQuestion[activeIndex[this.options[this.correctAnswer]]] === answer ){
            return true;
        }
        return false;
    }
    getCorrectAnswer(){
        this.createUi();
        return quiz.allQuestion[activeIndex[this.options[this.correctAnswer]]];
    }
    createUi(){
        let quiz  = new Quiz;
        quiz.allQuestion.push(this);
        // quiz.forEach((eachquestion,index) =>{
        //     console.log(eachquestion);
        //     quiz.activeIndex = index ; 
        //     console.log(quiz);
        // })
        return quiz.allQuestion;
        
    }
}


class Quiz {
    constructor(){
        this.allQuestion = [];
        this.activeIndex ;
        this.score ; 
    }
    nextQuestion(){
        return allQuestion[activeIndex+1];
    }
}
let question = new QuestionMethods(
         "Capital of Himachal pradesh is",
         ["shimla","kinnaur","una"],
         0
);
let question2 = new QuestionMethods(
    "Capital of Himachal pradesh is",
    ["shimla","kinnaur","una"],
    0
);
let question3 = new QuestionMethods(
    "Capital of Himachal pradesh is",
    ["shimla","kinnaur","una"],
    0
);
console.log(question);