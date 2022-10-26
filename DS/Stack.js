class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Array(capacity);
    this.top = 0;
  }

  push(value) {
    if (this.top === this.capacity) {
      console.log('stack overflow');
      return;
    }

    this.array[this.top++] = value;
  }

  pop() {
    if (this.top < 0) {
      console.log('stack underflow');
      return;
    }

    return this.array[--this.top];
  }

  peek() {
    return this.top === 0 ? undefined : this.array[this.top - 1];
  }

  isEmpty() {
    return this.top === 0 ? true : false;
  }

  print() {
    if (this.top === 0) {
      console.log('[]');
      return;
    }

    const result = [];

    for (let i = 0; i < this.top; i++) {
      result.push(this.array[i]);
    }

    console.log(result);
  }
}

const stack = new Stack(5);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// const last = stack.pop();
const currentValue = stack.peek();
console.log(currentValue);

stack.print();
