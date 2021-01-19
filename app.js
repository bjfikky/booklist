// CLASSES
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static loadBooks = () => {
        const bookStore = [
            {
                title: 'Book 1',
                author: 'Author 1',
                isbn: 'ISBN12345'
            },
            {
                title: 'Book 2',
                author: 'Author 2',
                isbn: 'ISBN21345'
            },
            {
                title: 'Book 3',
                author: 'Author 3',
                isbn: 'ISBN32345'
            },
            {
                title: 'Book 4',
                author: 'Author 4',
                isbn: 'ISBN42345'
            }
        ];

        bookStore.forEach(book => {
            this.addBookToList(book);
        });
    };

    static addBookToList = (book) => {
        let bookList = document.querySelector('.book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="btn btn-small btn-danger delete">X</a></td>
            `;
        bookList.appendChild(row);
        this.clearFields();
    }

    static submitBook = (event) => {
        event.preventDefault();
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        const book = new Book(title, author, isbn);

        this.addBookToList(book);
    }

    static removeBook = (element) => {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    static clearFields = () => {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// EVENTS
document.addEventListener('DOMContentLoaded', UI.loadBooks());
document.querySelector('.book-form').addEventListener('submit', UI.submitBook);
document.querySelector('.book-list').addEventListener('click', () => UI.removeBook(event.target));