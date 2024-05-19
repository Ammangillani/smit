// var hello = function () {
//   console.log("hello");
// };
// hello();

// setTimeout(() => {
//   console.log("hello");
// });
// Promise.resolve().then(() => console.log("hello2"));

// callstack
function foo1() {
  var a = "text";
  function foo() {
    var b = "test 1";
    console.log(b);
  }

  foo();
}
