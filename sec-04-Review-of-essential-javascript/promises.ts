// this process takes some time because js sends a http request and wait the response in the meantime js actually keeps running

fetch("https://jsonplaceholder.org/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("test"); // this is executed first

const posts = async () => {
  const data = await fetch("https://jsonplaceholder.org/posts");
  const post = await data.json();
  console.log(post);
  return post;
};
const p = posts(); // it will be a promise if you want to get data you need asyn/await function again
console.log(p);
console.log("test async await");
