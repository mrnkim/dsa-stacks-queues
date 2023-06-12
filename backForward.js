const Stack = require("./stack");

const backward = new Stack();
const forward = new Stack();

function loadNewPage(nextURL) {
  axios.get();
}

function handleBackClick() {
  const currentPage = "url";
  const nextURL = backward.pop()

  forward.push(currentPage);
  loadNewPage(nextURL);
}

function handleForwardClick() {
  if (forward.isEmpty()) return

  const currentPage = "url";
  const nextURL = forward.pop();

  backward.push(currentPage);
  loadNewPage(nextURL);
}
