const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
        };
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);

console.log('myLibrary: ', myLibrary);

const displayBooks = myLibrary => {
    const bookListTag = document.getElementById('bookList');
    bookListTag.innerHTML = '';

    myLibrary.forEach(element => {
        const { title, author, read, pages } = element;

        let bookTag = document.createElement('div');
        bookTag.classList.add('bookTag');
        let removeBook = document.createElement('button');

        bookTag.innerHTML = `
        <h2>${title}<h2>
        <p>${author}</p>
        <p>${pages}</p>
        <p>${read}</p>
        
        `;

        bookListTag.appendChild(bookTag);
    });

    // return '123';
};

console.log(displayBooks(myLibrary));

// для вызова модального окна

const button = document.getElementById('addBookButton');
const dialog = document.getElementById('addBookDialog');
dialog.close();

button.addEventListener('click', () => {
    dialog.showModal();
});

window.addEventListener('click', event => {
    if (event.target === dialog) {
        dialog.close();
    }
});

const addBook = document.getElementById('submitButton');

addBook.addEventListener('click', event => {
    event.preventDefault();
    dialog.close();

    const form = document.getElementById('addBookForm'); // Предполагается, что у формы есть id 'addBookForm'
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readCheckbox = document.getElementById('readCheckbox').checked;

    const newBook = new Book(title, author, pages, readCheckbox);

    myLibrary.push(newBook);

    console.log('myLibrary: ', myLibrary);

    displayBooks(myLibrary);

    // Обнуление формы
    form.reset();
});
// export { myLibrary, Book, addBookToLibrary };
