let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.rendered = false;
        this.index; 
    }
    info() {
        return this.title + " by " + this.author + ", " + this.pages + " pages"; //mozda this
    }
}

/*let bookAuthor = null;
let bookTitle = null;
let bookPages = null;
let bookRead = null;*/
let form = document.querySelector(".form");
let inputs = document.querySelectorAll("input");
/* let deleteButton = document.createElement("button");
deleteButton.textContent = "Remove"; */
form.style.display = "none"; //hides the form
let books = document.querySelector(".books");
let book1 = new Book("Harry Potter", "JK Rowling", 264, "read");
let book2 = new Book("Meditations", "Marcus Aurelius", 189, "not read");
myLibrary.push(book1);
book1.index = myLibrary.length -1;
myLibrary.push(book2);
book2.index = myLibrary.length -1;
let submit = document.querySelector("#submit");
let cancel = document.querySelector("#cancel");

cancel.addEventListener("click", (e) => {
    form.style.display = "none";
    clearInputs();
});
submit.addEventListener("click", (e) => {
    addBookToLibrary(); //finish this
    render();
    form.style.display = "none";
    //addButton();
    clearInputs();
    //addDataKeys();
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
/* 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rendered = false;
    this.index;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages";
    }
}
 */

function addBookToLibrary() {
    let title = document.querySelector('[name="title"]').value;
    let author = document.querySelector('[name="author"]').value;
    let pages = document.querySelector('[name="pages"]').value;
    let read = "read";
    /* if (document.querySelector("#r1").checked) {
        read = "read";
    }
    else {
        read = "not read";
    }  */
    //let read = document.querySelector('input[name="read-status"]:checked').value;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    book.index = myLibrary.length -1;
}

function render() {
    myLibrary.forEach((book) => {
        if (!book.rendered) {
        displayBook(book); //write this function
        book.rendered = true;
        }
    });
    addButton();
}
render();

function displayBook(book) {
    let div = document.createElement("div");
    div.textContent = book.info();
    div.setAttribute("data-id", book.index);
    books.appendChild(div);
    div.classList.add("divs");
}
function displayForm() {
    form.style.display = "grid";
}
//let test;
function addButton() {
    let divs = document.querySelectorAll(".divs");
    divs.forEach((div, i) => {
        if(!div.classList.contains("remove")) {
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.setAttribute("data-id", i);
        let toggleRead = document.createElement("button");
        toggleRead.setAttribute("data-id", i);
        toggleRead.textContent = myLibrary[i].read;
        toggleRead.classList.add("toggle");
        div.classList.add("remove");
        deleteButton.classList.add("remove");
        
        deleteButton.addEventListener("click", (e) => {
            //test = +e.target.dataset.id;
             console.log(+e.target.dataset.id)
             console.log(e.target.parentNode);
             //console.log(e.target.parrentNode)
             removeBook(+e.target.dataset.id, e.target.parentNode)
        });
        toggleRead.addEventListener("click", (e) => {
            /* console.log(e.target.dataset.id);
            console.log(e.target.parentNode);
            console.log(e.target.textContent); */
            toggle(+e.target.dataset.id, e.target.parentNode, e.target);
        });
        div.appendChild(toggleRead);
        div.appendChild(deleteButton);
        }
    });
}

function toggle(idx, div, button) {
    if (myLibrary[idx].read == "read") {
        myLibrary[idx].read = "not read";
        button.textContent = "not read";
    }
    else {
        myLibrary[idx].read = "read";
        button.textContent = "read";
    }
    div.firstChild.data = myLibrary[idx].info();
    //displayBook(myLibrary[idx]);
}

let remove = document.querySelectorAll(".remove");
let removeButtons = getRemoveButtons();
function getRemoveButtons() {
    let removeButtons = [];
    for(let i = 0; i < remove.length; i++) {
        if (i % 2 == 1) {
            removeButtons.push(remove[i]);
        }
    }
    return removeButtons;
}


function removeBook(idx, div) {
    //let removeTarget = myLibrary[idx];
    myLibrary.splice(idx, 1);
    div.remove();
    recalibrateIndices();
    resetDataAttributes();
    console.log(myLibrary);
}

function recalibrateIndices() {
    myLibrary.forEach((book, idx) => {
        book.index = idx;
    });
}

function resetDataAttributes() {
    elements = document.querySelectorAll(".remove");
    let toggles = document.querySelectorAll(".toggle");
    buttons = [];
    divs = [];
    elements.forEach((ele, i) => {
         if(i % 2 == 0) {
             divs.push(ele);
         }
         else {
            buttons.push(ele);
         }
    });
    buttons.forEach((button, i) => {
        button.setAttribute("data-id", i);
    });
    divs.forEach((div, i) => {
        div.setAttribute("data-id", i);
    });
    toggles.forEach((button, i) => {
        button.setAttribute("data-id", i);
    });
}

/* function addDataKeys() {
    let removes = document.querySelectorAll(".remove");
    let i = 0;
    let j = 0;
    removes.forEach((element) => {
        if (i < 2) {
            element.setAttribute("data-id", j);
            //element.dataset.key = j;
            i += 1;
        }
        else {
            i = 0;
            j += 1;
            element.setAttribute("data-id", j);
            //element.dataset.key = j;
        }
    });
}
addDataKeys(); */
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