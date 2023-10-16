const app = document.querySelector(".container");
const addBook = document.querySelector('.container__add')
const containerForm = document.querySelector('.container__form')
// const createBook = document.querySelector('.form__btn')
const containerBooks = document.querySelector('.container__books');
const date = new Date();

const bookList = [
  {
    id: date.getTime(),
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 100,
    read: true,
  },
  {
    id: date.getTime(),
    title: "The Hobbit 2",
    author: "J.R.R. Tolkien",
    pages: 150,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.id = date.getTime()
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  // this.info = function() {
  //   return `${this.id}, ${title}, ${author}, ${pages}, ${read}`
  // }
}

document.addEventListener("DOMContentLoaded", () => {
  if (bookList.length === 0) return;

  showBooks(bookList);
});

function showBooks(list) {

  containerBooks.innerHTML = ''
  let readStatus = 'Read'

  list.forEach(book => {
    if (book.read === false) {
      readStatus = 'Not read'
    }
    containerBooks.innerHTML += `
      <div class="container__book">
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
          <div class="container__btns">
            <a>${readStatus}</a>
            <a>Delete</a>
          </div>
      </div>
    `
  });
}


addBook.addEventListener('click', () => {
  containerForm.classList.add('active')
})

containerForm.addEventListener('click', (e) => {

  let title = containerForm.querySelector('.form__title').value;
  let author = containerForm.querySelector('.form__author').value;
  let pages = containerForm.querySelector('.form__pages').value;
  let read = containerForm.querySelector('.form__read');
  let status = false
  if (e.target.classList.contains('form__btn')) {
    containerForm.classList.remove('active')

    console.log(title);
    console.log(author);
    console.log(pages);
    if (read.checked) {
      status = true
    }

    addBookToLibrary(title, author, pages, status)
    showBooks(bookList);
    


  }
})


function addBookToLibrary(title, author, pages, read) {
  bookList.push(new Book(title, author, pages, read))
}