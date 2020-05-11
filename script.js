let myLibrary = [];
let addBook = document.querySelector("#addBook");
addBook.addEventListener("click", (e) => {
    displayForm(); //write this function
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read) {
            return title + " by " + author + ", " + pages + " pages, read";
        }
        else {
            return title + " by " + author + ", " + pages + " pages, not read yet";
        }
    }
}

function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.value;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function render() {
    myLibrary.forEach((book) => {
        displayBook(book); //write this function
    });
}

function displayBook(book) {

}

function displayForm() {
    
}