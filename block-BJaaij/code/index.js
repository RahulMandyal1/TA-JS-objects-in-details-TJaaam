
class BookList{
    constructor( readIndex){
        this.bookArr  = [];
        this.readIndex = readIndex;
    }
    add(bookArr){
        this.bookArr = bookArr;
        return this.bookArr;
    }
    getCurrentBook(){
        return this.bookArr[this.readIndex];
    }
    getNextBook(){
        return this.bookArr[this.readIndex+1];
    }
    getPreviousBook(){
        return this.bookArr[this.readIndex-1];
    }
    changeCurrentBook(index){
        this.readIndex = index;
        return this.bookArr[this.readIndex];
    }
}


class Book extends BookList{
    constructor(title,category,author,finishdate,readIndex){
        super(readIndex);
        this.Title = title;
        this.Category = category;
        this.Author = author;
        this.isRead = false;
        this.finishDate = finishdate;
        
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishDate = Date.now();
        return this.isRead;
    }

}
let timeManagement = new Book( 
    "Time ManageMent ",
    "educational","Rahul",
    "5feb", 1
    );
console.log(timeManagement);
console.group(timeManagement.Title);
console.log(`Book category is ${timeManagement.Category}`);
console.log(`Book Author is ${timeManagement.Author}`);
console.log(`Book is Already read ${timeManagement.isRead}`);
timeManagement.markBookAsRead();
timeManagement.add(
    [" alkemist","timemanagement",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
timeManagement.getCurrentBook();
timeManagement.getNextBook();
timeManagement.getPreviousBook();
timeManagement.changeCurrentBook(2);
console.groupEnd();

// secondBook 
let bookTwo = new Book( 
    "Alkemist ",
    "educational","Rahul",
    "10feb", 1
    );
console.log(bookTwo);
console.group(bookTwo.Title);
console.log(`Book category is ${bookTwo.Category}`);
console.log(`Book Author is ${bookTwo.Author}`);
console.log(`Book is Already read ${bookTwo.isRead}`);
bookTwo.markBookAsRead();
bookTwo.add(
    [" alkemist","bookTwo",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
bookTwo.getCurrentBook();
bookTwo.getNextBook();
bookTwo.getPreviousBook();
bookTwo.changeCurrentBook(2);
console.groupEnd();

//thirdBook

let bookThree = new Book( 
    "Alkemist ",
    "educational","Rahul",
    "10feb", 0
    );
console.log(bookThree);
console.group(bookThree.Title);
console.log(`Book category is ${bookThree.Category}`);
console.log(`Book Author is ${bookThree.Author}`);
console.log(`Book is Already read ${bookThree.isRead}`);
bookThree.markBookAsRead();
bookThree.add(
    [ "Alkemist","Learn Share Market ","bookThree",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
bookThree.getCurrentBook();
bookThree.getNextBook();
bookThree.getPreviousBook();
bookThree.changeCurrentBook(2);
console.groupEnd();


// Fourth book 
let bookFourth = new Book( 
    "Learn Share Market ",
    "educational","Rahul",
    "10feb", 1
    );
console.log(bookFourth);
console.group(bookFourth.Title);
console.log(`Book category is ${bookFourth.Category}`);
console.log(`Book Author is ${bookFourth.Author}`);
console.log(`Book is Already read ${bookFourth.isRead}`);
bookFourth.markBookAsRead();
bookFourth.add(
    ["Learn Share Market ","bookFourth",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
bookFourth.getCurrentBook();
bookFourth.getNextBook();
bookFourth.getPreviousBook();
bookFourth.changeCurrentBook(2);
console.groupEnd();
// last book 
let lastBook = new Book( 
    "Master Crypto",
    "educational","Rahul",
    "10feb", 3
    );
console.log(lastBook);
console.group(lastBook.Title);
console.log(`Book category is ${lastBook.Category}`);
console.log(`Book Author is ${lastBook.Author}`);
console.log(`Book is Already read ${lastBook.isRead}`);
lastBook.markBookAsRead();
lastBook.add(
    ["Learn Share Market ","lastBook",
    "shareMarket","cryptoMastery",
    "Make Money",
    "be a digital marketer"
]);
lastBook.getCurrentBook();
lastBook.getNextBook();
lastBook.getPreviousBook();
lastBook.changeCurrentBook(2);
console.groupEnd();