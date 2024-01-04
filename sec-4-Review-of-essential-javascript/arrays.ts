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

// ---------
// WORKING WITH IMMUTABLE ARRAYS
// ---------
