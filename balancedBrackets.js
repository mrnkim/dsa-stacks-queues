// (hi [there]) -> true    stack: [1  (2

const Stack = require("./stack");

function balancedBrackets(string) {
  const openBrackets = ["{", "[", "("];
  const closeBrackets = ["}", "]", ")"];

  let stack = new Stack();
  let lookingForIdx = 0;

  for (let char of string) {
    if (openBrackets.includes(char)) {
      stack.push(char);
      lookingForIdx = openBrackets.indexOf(char);
    } else if (
      closeBrackets.includes(char) &&
      closeBrackets.indexOf(char) === lookingForIdx
    ) {
      stack.pop();
      lookingForIdx = openBrackets.indexOf(stack.peek());
    }
  }

  return stack.isEmpty();
}
