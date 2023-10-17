const app = document.querySelector(".container");
const addBook = document.querySelector(".container__add");
const containerForm = document.querySelector(".container__form");
const form = document.querySelector(".form");
const containerBooks = document.querySelector(".container__books");
const templateBook = document.getElementById("templateBook");
const fragment = document.createDocumentFragment();

const bookList = [
  {
    id: Date.now(),
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 100,
    read: true,
  },
  {
    id: Date.now() + 100,
    title: "The Hobbit 2",
    author: "J.R.R. Tolkien",
    pages: 150,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.id = Date.now();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

document.addEventListener("DOMContentLoaded", () => {
  if (bookList.length === 0) return;

  showBooks(bookList);
});

function showBooks(list) {
  containerBooks.innerHTML = "";

  list.forEach((book) => {
    const readStatus = book.read ? "Read" : "Not Read";

    const clone = templateBook.content.cloneNode(true);

    clone.querySelector(".container__book").setAttribute("data-id", book.id);

    clone.querySelector(".container__title").textContent = book.title;
    clone.querySelector(".container__author").textContent = book.author;
    clone.querySelector(
      ".container__pages"
    ).textContent = `${book.pages} pages`;
    let read = clone.querySelector(".container__read");
    read.textContent = readStatus;

    if (read.textContent === "Read") {
      read.classList.add("readYes");
    } else {
      read.classList.add("readNo");
    }

    clone.querySelector(".container__read").addEventListener("click", (e) => {
      let parent = e.target.parentElement.parentElement.getAttribute("data-id");

      bookList.forEach((book) => {
        if (book.id === parseInt(parent)) {
          if (book.read) {
            read.classList.remove("readYes");
            read.classList.add("readNo");
            read.textContent = "Not Read";
            book.read = false;
          } else {
            read.classList.remove("readNo");
            read.classList.add("readYes");
            read.textContent = "Read";
            book.read = true;
          }
        }
      });
    });

    clone.querySelector(".container__delete").addEventListener("click", (e) => {
      let parent = e.target.parentElement.parentElement.getAttribute("data-id");

      bookList.forEach((book, index) => {
        if (book.id === parseInt(parent)) {
          console.log("si");
          bookList.splice(index, 1);
        }
      });

      showBooks(bookList);
    });

    fragment.appendChild(clone);
  });

  containerBooks.appendChild(fragment);
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
