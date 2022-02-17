class Person {
    constructor(name,age,gender){
        this.name = name;
        this.age  = age;
        this.gender = gender;
    }
    eat(){
        return('Every living animal Eats  so then i');
    }
    sleep(){
        return('Every living animal Sleep  so then i');
    }
    walk(){
        return('Every living animal Walk  so then i');
    }
}
 class Player extends Person{
     constructor(gameName , name ,age ,gender){
         super(name,age,gender);
         this.sportsName = gameName;
     }
     play(){
         return 'i am a sport perosn and i used to play for my country';
     }
 }
 class Teacher  extends Person{
     constructor( name ,age ,gender,instituteName){
         super(name, age , gender);
         this.instituteName = instituteName;
     }
     teach(){
         return `My job is to teach student`;
     }
 }
 class Artist extends Person{
    constructor( name ,age ,gender,kind){
        super(name, age , gender);
        this.kind = kind;
    }
    createArt(){
        return ' I am a artist and i create Art';
    }
 }
 class Crickter extends Player {
    constructor(playerName ,sportsName, name ,age ,gender){
        super(name,age,gender,sportsName);
        this.playerName = playerName;   
    }
    playCricket(){
        return `I am a profressional crickter`;
    }
 }

 let kolhi  = new Crickter("Virat Kolhi","Cricket","Chiku",31,'M');
 console.log(kolhi);
 kolhi.playCricket();
 kolhi.play();

 let teacher = new Teacher("Sonu Sharma ", 30 , 'M', " MJCM public school leda");
teacher.age;
teacher.instituteName;
teacher.teach();
let artist = new Artist("Vishal" ,"19" , "Male","Singer");
artist.createArt();
artist.age;
artist.gender;
artist.kinds;