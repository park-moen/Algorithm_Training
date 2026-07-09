class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   *
   * @param {number} value
   */
  push(value) {
    this.stack.push(value);

    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const MinStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2
