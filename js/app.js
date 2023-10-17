const app = document.querySelector(".container");
const addBook = document.querySelector(".container__add");
const containerForm = document.querySelector(".container__form");
const form = document.querySelector(".form");
const containerBooks = document.querySelector(".container__books");
const divError = document.querySelector(".divError");
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
  this.id = date.getTime();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function() {
  //   return `${this.id}, ${title}, ${author}, ${pages}, ${read}`
  // }
}

document.addEventListener("DOMContentLoaded", () => {
  if (bookList.length === 0) return;

  showBooks(bookList);
});

function showBooks(list) {
  containerBooks.innerHTML = "";

  list.forEach((book) => {
    const readStatus = book.read ? "Read" : "Not Read";

    // TODO: usar templates fragment cloneNode

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
    `;
  });
}

addBook.addEventListener("click", () => {
  containerForm.classList.add("active");
});

containerForm.addEventListener("click", (e) => {
  if (e.target === containerForm) {
    e.stopPropagation();
    containerForm.classList.remove("active");
    form.reset();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = form.querySelector(".form__title").value;
  let author = form.querySelector(".form__author").value;
  let pages = form.querySelector(".form__pages").value;
  let read = form.querySelector(".form__read").checked;

  containerForm.classList.remove("active");
  form.reset();
  addBookToLibrary(title, author, pages, read);
  showBooks(bookList);
});

function addBookToLibrary(title, author, pages, read) {
  bookList.push(new Book(title, author, pages, read));
}
