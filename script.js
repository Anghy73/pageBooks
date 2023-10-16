const form = document.querySelector('#formBook')
const submitBtn = document.querySelector('#submitBtn')
const bookList = document.querySelector('.book__list');
const date = new Date()

const listBooks = [
  {
    id: date.getTime(),
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 100,
    IsRead: false
  }
];

document.addEventListener('DOMContentLoaded', () => {
  if (listBooks.length === 0) return

  showBooks(listBooks)
})


form.addEventListener('click', (e) => {
  element = e.target

  let title = form.querySelector('.form__title').value;
  let author = form.querySelector('.form__author').value;
  let pages = form.querySelector('.form__pages').value;
  let read = form.querySelector('.form__read').value;

  if (element.classList.contains('form__btn')) {
    form.reset()
    addBookToLibrary(title, author, pages, read) 
    showBooks(listBooks)
  }
})

function showBooks(list) {
  list.forEach(book => {
    console.log(book);
    bookList.innerHTML += `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p>${book.IsRead}</p>
    `
  });
}

function Book(title, author, pages, read) {
  this.id = date.getTime()
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${this.id}, ${title}, ${author}, ${pages}, ${read}`
  }
}

function addBookToLibrary(title, author, pages, read) {
  listBooks.push(new Book(title, author, pages, read))
}