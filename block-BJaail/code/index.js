let input = document.querySelector('.btn');
let bookName = document.querySelector('#title');
let authorName = document.querySelector('#author');
let isbnNumber = document.querySelector('#isbn');
let root = document.querySelector('.showContent-container');

class Book  {
    constructor(booktitle , bookAuthor, bookIsbn){
        this.title = booktitle;
        this.Author = bookAuthor ; 
        this.bookIsbn  = bookIsbn;
    }
    add(title , writer , isbnumber){
        this.bookArr.push(title,writer,isbnumber);
        this.createUi();
    }
    show(){
        return this.bookArr;
    }
    makeUi(){
        let bookData  = document.createElement('div');
        let bookTitle  = document.createElement('p');
        bookTitle.innerText = this.title;
        let bookAuthor  = document.createElement('p');
        bookAuthor.innerText = this.Author;
        let bookIsbn  = document.createElement('p');
        bookIsbn.innerText = this.bookIsbnl
        let button  = document.createElement('❌');
        bookData.append(bookTitle,bookAuthor,bookIsbn,button);
        root.append(bookData);
    }
    createUi(){
        this.bookArr.forEach(eachBook=>{
            eachBook.makeUi();
        })
    }
}
class bookList{
    constructor(){
        this.bookArray = [];
    }
}


let addBook = new Book();

input.addEventListener('click',function(event){
    event.preventDefault();
    addBook.add(bookName.value , authorName.value ,isbnNumber.value);
    
});
console.log(addBook.show());