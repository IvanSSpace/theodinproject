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

    myLibrary.forEach((element, index) => {
        const { title, author, read, pages } = element;

        let bookTag = document.createElement('div');
        bookTag.classList.add('bookTag');

        bookTag.innerHTML = `
        <h2>${title}<h2>
        <p>${author}</p>
        <p>${pages}</p>
        <div class="readStatusCheckBoxContainer">
            <p>${read ? 'read' : 'not read yet'}</p>
            <input class="readCheckBox" data-index="${index}" type="checkbox" ${read ? 'checked' : ''} />
        </div>
        <button class="removeButtons" data-index="${index}">remove</button>
        `;

        bookListTag.appendChild(bookTag);
    });

    const removeButtons = document.querySelectorAll('.removeButtons');
    removeButtons.forEach(button => {
        button.addEventListener('click', event => {
            const index = event.target.dataset.index;
            myLibrary.splice(index, 1);
            // можно ли здесь достать data-index?
            displayBooks(myLibrary);
            console.log(index);
        });
    });

    const editReadStatusAll = document.querySelectorAll('.readCheckBox');
    console.log(editReadStatusAll);

    editReadStatusAll.forEach(checkbox => {
        checkbox.addEventListener('click', event => {
            const index = parseInt(event.target.dataset.index);
            myLibrary[index].read = event.target.checked;

            // Обновляем только текст статуса для этой конкретной книги
            const statusText = event.target.parentElement.querySelector('p');
            statusText.textContent = event.target.checked
                ? 'read'
                : 'not read yet';

            console.log(
                `Статус чтения книги ${myLibrary[index].title} изменен на: ${event.target.checked ? 'прочитано' : 'не прочитано'}`
            );
        });
    });
    // readCheckBox

    // const editReadStatus = () => {
    // нужно так же по какому то индексу менять сзначение
    // сначала просто добавь чекбокс который можно менять и на него надень эту функцию прямо в листенер
    // }

    // 1 найти каждую кнопку через forEach 2 дать ей листенер с функцией removeBook
    // 3 создать функцию remove book которая по id из data-index удаляет элемент и
    // снова отобразить displayBooks(myLibrary)

    // return '123';
};

document.button;

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
