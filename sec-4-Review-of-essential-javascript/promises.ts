// this process takes some time because js sends a http request and wait the response in the meantime js actually keeps running

fetch("https://jsonplaceholder.org/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("test"); // this is executed first
