// let obj = {
//   name: "amman",
//   age: 18,
//   male: false,
//   marks: 19.7,
// };

// console.log(Object.values(obj));
// console.log(Object.keys(obj));

// let a = "Amman";
// a = a + 18;
// console.log(a + 29);
// console.log(typeof a);

// const obj = {
//   name: "amman",
//   age: 18,
//   male: false,
//   marks: 19.7,
// };

// obj.cast = "syed";

// console.log(obj);

// const obj = {
//   word: "meaning",
//   word: "meaning",
//   word: " meaning",
//   word: "meaning",
// };

// const obj = {
//   fname: "amman",
//   lname: "shah",
//   age: 22,
// };

// console.log(obj.fname.);

// let obj = {
//   name: "amman",
//   lname: "amman",
//   marks: 30,
// };

// for (const key in obj) {
//   if (obj.hasOwnProperty.call(obj, key)) {
//     const result = obj[key];
//     console.log(result);
//   }
// }

let checkSyntax = () => {
  let bracketsInput = document.getElementById("bracket").value;
  let stack = [];
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of bracketsInput) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "] ") {
      if (stack.length === 0 || stack.pop() !== brackets[char]) {
        alert("no");
        return;
      }
    }
  }
  if (stack.length === 0) {
    alert("No");
  } else {
    alert("Yes");
  }
};
