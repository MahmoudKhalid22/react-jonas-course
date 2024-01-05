"use strict";
// this process takes some time because js sends a http request and wait the response in the meantime js actually keeps running
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
fetch("https://jsonplaceholder.org/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
console.log("test"); // this is executed first
const posts = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.org/posts");
    const post = yield data.json();
    console.log(post);
    return post;
});
const p = posts(); // it will be a promise if you want to get data you need asyn/await function again
console.log(p);
console.log("test async await");
