const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.last = null;
  }
  push(element) {
    this.last = new Node(element, this.last);
  }

  pop() {
   let result;
   if (this.last !== null) {
     result = this.last.data;
     this.last = this.last.prev;
   }
   return result;
  }

  peek() {
    if (this.last === null) {
      return undefined;
    }
    return this.last.data;
  }
}

module.exports = {
  Stack
};
