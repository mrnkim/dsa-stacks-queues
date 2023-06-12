const Stack = require("./stack");

// [H,e,l,l,o] - > [o,l,l,e,h]


function reverse(string) {
  const reversed = new Stack()
  for(let char of string) {
    reversed.push(char)
  }

  let result ="";
  while(reversed.top) {
    result += reversed.pop()
  }
  return result;
}