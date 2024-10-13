// Определение типа Book
type Book = {
    title: string;
    author: string;
    pages: number;
    read: boolean;
};

// Класс для создания книг
class Book {
    title: string;
    author: string;
    pages: number;
    read: boolean;

    constructor(book: Book) {
        this.title = book.title;
        this.author = book.author;
        this.pages = book.pages;
        this.read = book.read;
    }

    // Метод для получения информации о книге
    info() {
        return `${this.title} от ${this.author}, ${this.pages} страниц, ${this.read ? 'прочитано' : 'еще не прочитано'}`;
    }
}

// Создание новой книги
const theHobbit = new Book({
    title: 'Хоббит',
    author: 'Дж.Р.Р. Толкин',
    pages: 295,
    read: false,
});

// Вывод информации о книге
console.log(theHobbit.info());
