class MyQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  /**
   * @param {number} x
   */
  push(x) {
    this.inStack.push(x);
  }

  pop() {
    this.transferIfNeeded();

    return this.outStack.pop();
  }

  peek() {
    this.transferIfNeeded();

    return this.outStack[this.outStack.length - 1];
  }

  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  transferIfNeeded() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
  }
}

const myQueue = new MyQueue();
myQueue.push(1); // null (반환값 없음)
myQueue.push(2); // null
myQueue.peek(); // 1
myQueue.pop(); // 1
myQueue.empty(); // false
