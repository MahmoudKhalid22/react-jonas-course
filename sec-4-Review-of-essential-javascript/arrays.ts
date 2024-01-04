import { getBook, getBooks } from "./script";

// ---------
// THE ARRAY MAP METHOD
// ---------
const demo = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(demo);

const booksData = getBooks();
const titles = booksData.map((book: any) => book.title);

const essentialData = booksData.map((bookEl) => ({
  title: bookEl.title,
  author: bookEl.author,

  // you have to options either return object or make the curly brakets between parenthesis
}));

console.log(titles);
console.log(essentialData);

// ---------
// THE ARRAY FILTER METHOD
// ---------

// ---------
// THE ARRAY REDUCE METHOD
// ---------

// ---------
// THE ARRAY SORT METHOD
// ---------

// ---------
// WORKING WITH IMMUTABLE ARRAYS
// ---------
