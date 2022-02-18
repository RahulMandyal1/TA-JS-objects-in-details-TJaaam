let input = document.querySelector('.btn');
let bookName = document.querySelector('#title');
let authorName = document.querySelector('#author');
let isbNumber = document.querySelector('#isbn');
let root = document.querySelector('.rootEle');

class Book  {
    constructor(booktitle , bookAuthor, bookIsbn){
        this.title = booktitle;
        this.Author = bookAuthor ; 
        this.bookIsbn  = bookIsbn;
    }

}
class BookList{
    constructor(){
        this.bookArray = [];
    }
    add(title , writer , isbnumber){
        let book = new Book(title , writer ,isbnumber)
        this.bookArray.push(book);
        this.createUi();
    }
      
    createUi(){
     root.innerHTML = "";
      this.bookArray.forEach((eachbook,index)=>{
        let bookData  = document.createElement('div');
        bookData.classList.add('bookData');
        let bookTitle  = document.createElement('p');
        bookTitle.innerText = eachbook.title;
        let bookAuthor  = document.createElement('p');
        bookAuthor.innerText = eachbook.Author;
        let bookIsbn  = document.createElement('p');
        bookIsbn.classList.add('last-p');
        bookIsbn.innerText = eachbook.bookIsbn;
        let span = document.createElement('span');
        span.innerHTML = `❌`;
        bookData.setAttribute("data-id" ,index);
        span.setAttribute("data-id" , index);
        // Onclick the btn todo gets delete 
        span.addEventListener("click",()=>{
            //  this.bookArray.splice(id , 1);
            //  createUi();
            let id = span.dataset.id;
            let elementIndex = Number(id);
            this.bookArray.splice(elementIndex);
            this.createUi();
        });


       
        bookData.append(bookTitle,bookAuthor,bookIsbn,span);
        root.append(bookData);

      });
    }
}


let addBook = new BookList();

input.addEventListener('click',function(event){
    event.preventDefault();
    const name  = bookName.value;
    const author = authorName.value;
    const isb = isbNumber.value;
    addBook.add(name,author,isb);
    bookName.value = "";
    authorName.value = "";
    isbNumber.value = "";
});
