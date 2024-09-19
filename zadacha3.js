// 3. Библиотека
// Условие:
// Создайте класс Book, который будет представлять книгу с такими свойствами:
// title — название книги.
// author — автор книги.
// pages — количество страниц.

// Создайте класс Library, который управляет коллекцией книг. 
//Этот класс должен иметь следующие методы:
// addBook(book) — добавляет книгу в библиотеку.
// findBooksByAuthor(author) — возвращает все книги данного автора.
// listAllBooks() — выводит список всех книг в библиотеке.

// Создайте класс LibraryUser, который может:
// Брать книгу на время (borrowBook(book)).
// Возвращать книгу в библиотеку (returnBook(book)).
// Каждый пользователь может одновременно иметь не более 3 книг. 
//Если он пытается взять больше — программа должна выдавать ошибку.

// Ожидаемый результат:
// Пользователь может брать книги из библиотеки и возвращать их.
// Можно искать книги по автору и выводить список всех доступных книг.
// Ограничение на количество взятых книг работает корректно.

class Book {
    constructor(title, author, pages) {
      this.title = title
      this.author = author
      this.pages = pages
    }
  }
  
  class Library {
    constructor() {
      this.library = []
    }
    addBook(book) {
      this.library.push(book)
      
    }
    findBooksByAuthor(author) {
      let authors = []
      for (let j = 0; j < this.library.length; j++) {
        if (this.library[j].author == author) {
          authors.push(this.library[j])
    }
  }
    console.log(authors)
      }
  
    listAllBooks() {
      console.log(this.library)
    }
  
  }
  
  class LibraryUser {
    constructor(name) {
      this.name = name;
      this.counter_book = []
    }
    borrowBook(book) {
      if (this.counter_book.length >= 3) {
        throw new Error("На этом сервере запрещено брать 3 книг одновременно.");
      }
      this.counter_book.push(book);
      console.log(this.name, 'взял книгу')
    }
    returnBook(book) {
      const index = this.counter_book.indexOf(book);
      if (index === -1) {
        throw new Error("вы не брали эту книгу.");
      }
      this.counter_book.splice(index, 1);
    }
  }
  
  const book1 = new Book('Степной волк', 'Герман Гессе', 300)
  const book2 = new Book('Игра в бисер', 'Герман Гессе', 250)
  const book3 = new Book('Сиддхарта', 'Герман Гессе', 399)
  const book4 = new Book('как быть клоуном', 'я', 399)
  const library = new Library()
  const user = new LibraryUser('пес')
  
  
  console.log(library)
  library.addBook(book1)
  library.addBook(book2)
  library.addBook(book3)
  library.addBook(book4)
  console.log(library)
  library.findBooksByAuthor('Герман Гессе')
  library.listAllBooks()
  user.borrowBook(book1)
  console.log(user.counter_book)
  user.returnBook(book1)
  console.log(user.counter_book)
  user.borrowBook(book1)
  user.borrowBook(book2)
  user.borrowBook(book3)
  user.borrowBook(book4)
  