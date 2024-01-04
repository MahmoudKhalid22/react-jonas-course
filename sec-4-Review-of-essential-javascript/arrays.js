"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script_1 = require("./script");
// ---------
// THE ARRAY MAP METHOD
// ---------
const demo = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(demo);
const booksData = (0, script_1.getBooks)();
const titles = booksData.map((book) => book.title);
const essentialData = booksData.map((bookEl) => ({
    title: bookEl.title,
    author: bookEl.author,
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
