const app = document.querySelector(".container");
const containerBooks = document.querySelector('.container__books');
const date = new Date();

const bookList = [
  {
    id: date.getTime(),
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 100,
    IsRead: true,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  if (bookList.length === 0) return;

  showBooks(bookList);
});

function showBooks(list) {

  let readStatus = 'Read'

  list.forEach(book => {
    if (book.IsRead === false) {
      readStatus = 'Not read'
    }
    console.log(book);
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