// var hello = function () {
//   console.log("hello");
// };
// hello();

setTimeout(() => {
  console.log("hello");
});
Promise.resolve().then(() => console.log("hello2"));

// callstack
