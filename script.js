let myLibrary = [];
/*let bookAuthor = null;
let bookTitle = null;
let bookPages = null;
let bookRead = null;*/
let form = document.querySelector(".form");
let inputs = document.querySelectorAll("input");

form.style.display = "none"; //hides the form
let books = document.querySelector(".books");
let book1 = new Book("Harry Potter", "JK Rowling", 264, "read");
let book2 = new Book("Meditations", "Marcus Aurelius", 189, "not read");
myLibrary.push(book1);
myLibrary.push(book2);
let submit = document.querySelector("#submit");
let cancel = document.querySelector("#cancel");
submit.addEventListener("click", (e) => {
    addBookToLibrary(); //finish this
    render();
    form.style.display = "none";
    clearInputs();
});

function clearInputs() {
    inputs.forEach((input) => {
        input.value = "";
    })
}
/* function submitData() {
    let title = document.querySelector('[name="title"]').value;
    let author = document.querySelector('[name="author"]').value;
    let pages = document.querySelector('[name="pages"]').value;
    let read = document.querySelector('[name="read-status"]').value;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
} */
cancel.addEventListener("click", (e) => {
    cancelSubmission(); // finish this
});
let addBook = document.querySelector("#addBook");
addBook.addEventListener("click", (e) => {
    displayForm(); //write this function
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rendered = false;
    this.info = function() {
        if (read == "read") {
            return title + " by " + author + ", " + pages + " pages, read";
        }
        else {
            return title + " by " + author + ", " + pages + " pages, not read yet";
        }
    }
}

function addBookToLibrary() {
    let title = document.querySelector('[name="title"]').value;
    let author = document.querySelector('[name="author"]').value;
    let pages = document.querySelector('[name="pages"]').value;
    let read;
    if (document.querySelector("#r1").checked) {
        read = "read";
    }
    else {
        read = "not read";
    } 
    //let read = document.querySelector('input[name="read-status"]:checked').value;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function render() {
    myLibrary.forEach((book) => {
        if (!book.rendered) {
        displayBook(book); //write this function
        book.rendered = true;
        }
    });
}
render();

function displayBook(book) {
    let div = document.createElement("div");
    div.textContent = book.info();
    books.appendChild(div);
}
function displayForm() {
    form.style.display = "flex";
}
/*
function displayForm() {
    let div = document.createElement("div");
    let d1 = document.createElement("div");
    let d2 = document.createElement("div");
    let d3 = document.createElement("div");
    let d4 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = "Book: "
    let p2 = document.createElement("p");
    p2.textContent = "Author: "
    let p3 = document.createElement("p");
    p3.textContent = "Number of pages: "
    let p4 = document.createElement("p");
    p4.textContent = "Read?: "
    let titleInput = document.createElement("input");
    let authorInput = document.createElement("input");
    let pagesInput = document.createElement("input");
    let readInput = document.createElement("input");
    div.appendChild(d1);
    div.appendChild(d2);
    div.appendChild(d3);
    div.appendChild(d4);
    d1.appendChild(p1);
    d1.appendChild(titleInput);
    d2.appendChild(p2);
    d2.appendChild(authorInput);
    d3.appendChild(p3);
    d3.appendChild(pagesInput);
    d4.appendChild(p4);
    d4.appendChild(readInput);
    form.appendChild(div); 
}
displayForm(); */