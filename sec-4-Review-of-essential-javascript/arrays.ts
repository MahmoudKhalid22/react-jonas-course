import { getBook, getBooks } from "./script";

// ---------
// THE ARRAY MAP METHOD
// ---------
const demo = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(demo);

const booksData = getBooks();
const titles = booksData.map((book: any) => book.title);

const essentialData = booksData.map((bookEl) => ({
  title: bookEl.title,
  author: bookEl.author,

  // you have to options either return object or make the curly brakets between parenthesis
}));

// console.log(titles);
// console.log(essentialData);

// ---------
// THE ARRAY FILTER METHOD
// ---------

// .filter take a callback function and the condition (if it is true then the element will be in filtered array and else the element will be filtered out);

const longBooks = booksData
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
// you can chain two filter methods , it is more effecient to do it with && but this is also works

// console.log(longBooks);

// it is super important
const adventureBooks = booksData
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

// ---------
// THE ARRAY REDUCE METHOD
// ---------
// This method rules the two previous methods all
// the reduce method is most veratile and most powerful of all arrays methods in javascript
// it is called reduce because it reduces all of elements in the array to one element
// the accumulator is the final value that we want the array to boil to
// 0 is the starter value in this case but it can be an array an object ...
const numberOfPagesOfAllBooks = booksData.reduce(
  (acc, book) => acc + book.pages,
  0
);
console.log(numberOfPagesOfAllBooks);

// ---------
// THE ARRAY SORT METHOD
// ---------

// it's an algorithm and here we just explain how can we use it not how it works under the hood

const arr = [1, 6, 32, 7, 9, 4, 77, 34];

// const sortedD = arr.sort((a, b) => a - b);
// it sorts an original array also not take a copy
const sorted = arr.slice().sort((a, b) => a - b);
// .slice() to take a copy of the original array so it isn't modified with sort method
// console.log(arr, sorted);

const sortedBooksByPages = booksData.slice().sort((a, b) => a.pages - b.pages);

sortedBooksByPages.map((book) => console.log(book.title));
// ---------
// WORKING WITH IMMUTABLE ARRAYS
// ---------
// some arrays needs to be immutable (غــير قــابلة لـلـتـغــيــيــر)

//so it's important to know how to delete elements , add elements without mutating the original array

// 1) Add a book object to array
const newBook = {
  id: 6,
  title: "الفردوس المفقود",
  author: "أبو عبدالله",
};

const newBooks = [...booksData, newBook];
console.log(newBooks);

// 2) Delete book from array

const booksAfterDelete = newBooks.filter((book) => book.id !== 6);
console.log(booksAfterDelete);

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
console.log(booksAfterUpdate);
// ---------
// ASYNCHRONOUS JAVASCRIPT: PROMISES
// ---------

// ---------
// ASYNC - AWAIT
// ---------
