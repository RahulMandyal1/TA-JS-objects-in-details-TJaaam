// using the  function the normal  methods 
 function createUser(name , id ,noOfProject){
     let user ={};
     user.name = name;
     user.id = id;
     user.projectCount = noOfProject;

     user.getProjects = function(){
         return user.projectCount;
     };
     user.changeName = function(newName){
         user.name = newName;
         return user.name;
     };
     user.incrementProject = function(){
         user.projectCount +=1;
         return user.projectCount;
     };
     user.decrementProject = function(){
        user.projectCount +=-1;
        return user.projectCount;
     };
     return user;
 }
 let firstUser = createUser(
     "Rahul",
     1,
     45
 );
 console.group(firstUser.name);
 console.log(firstUser.id);
 console.log(firstUser.getProjects());
 console.log(firstUser.changeName("Vishal"));
console.log(firstUser.incrementProject());
console.log(firstUser.decrementProject());
 console.groupEnd();


 //Now using  the prototypal Method to create object

 function createUser(name , id ,noOfProject){
    let user =Object.create(createUser.prototype);
    user.name = name;
    user.id = id;
    user.projectCount = noOfProject;
    return user;
}

createUser.prototype ={
     getProjects(){
        return this.projectCount;
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
   incrementProject(){
        this.projectCount +=1;
        return this.projectCount;
    },
    decrementProject(){
       this.projectCount +=-1;
       return this.projectCount;
    },
}
let firstUser = createUser(
    "Rahul",
    1,
    45
);
console.group(firstUser.name);
console.log(firstUser.id);
console.log(firstUser.getProjects());
console.log(firstUser.changeName("Vishal"));
console.log(firstUser.incrementProject());
console.log(firstUser.decrementProject());
console.groupEnd();


// - [ ] Using Pseudoclassical Way


function createUser(name , id ,noOfProject){
    this.name = name;
    this.id = id;
    this.projectCount = noOfProject;
}
createUser.prototype ={
    getProjects(){
       return this.projectCount;
   },
   changeName(newName){
       this.name = newName;
       return this.name;
   },
  incrementProject(){
       this.projectCount +=1;
       return this.projectCount;
   },
   decrementProject(){
      this.projectCount +=-1;
      return this.projectCount;
   },
}

let firstUser = new createUser(
    "Rahul",
    1,
    45
);
console.group(firstUser.name);
console.log(firstUser.id);
console.log(firstUser.getProjects());
console.log(firstUser.changeName("Vishal"));
console.log(firstUser.incrementProject());
console.log(firstUser.decrementProject());
console.groupEnd();



// by using  the classical way 


class createUser{
    constructor(name , id ,noOfProject){
        this.name = name;
        this.id = id;
        this.projectCount = noOfProject;
    }
    getProjects = function(){
        return this.projectCount;
    };
    changeName = function(newName){
        this.name = newName;
        return this.name;
    };
   incrementProject = function(){
        this.projectCount +=1;
        return this.projectCount;
    };
    decrementProject = function(){
       this.projectCount +=-1;
       return this.projectCount;
    };
}

let firstUser = new createUser(
    "Rahul",
    1,
    45
);
console.group(firstUser.name);
console.log(firstUser.id);
console.log(firstUser.getProjects());
console.log(firstUser.changeName("Vishal"));
console.log(firstUser.incrementProject());
console.log(firstUser.decrementProject());
console.groupEnd();

