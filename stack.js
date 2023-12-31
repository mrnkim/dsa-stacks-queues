/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  // a a.next null
  pop() {
    if (!this.top) throw new Error();

    let front = this.top;
    this.top = front.next;
    this.size--;
    return front.val;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    if(!this.top) return null;
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
