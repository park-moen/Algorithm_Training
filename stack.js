class Stack {
  constructor(capacity) {
      this.capacity = capacity
      this.top = 0;
      this.array = new Array(capacity);
  }

  push(value) {
    if (this.top === this.capacity) {
      console.error('stack overflow');

      return false;
    }

    this.array[this.top++] = value;

    return true;
  }

  pop() {
    if (this.top === 0) {
      console.error('stack underflow');

      return undefined;
    }

    return this.array[--this.top];
  }

  peek() {
    if (this.top === 0) {
      return undefined;
    }

    return this.array[this.top - 1];
  }

  isEmpty() {
    return this.top === 0 ? true : false;
  }
  
  print() {
    let result = ' ';

    for (let i = 0; i < this.top; i++) {
      result += this.array[i] + ' ';
    }

    return `[${result}]`;
  }
}

const myList = new Stack(8);

for (let i = 0; i < 8; i++) {
  myList.push(i + 1);
}

myList.pop();
myList.pop();
myList.pop();
myList.pop();
myList.pop();
myList.pop();
myList.pop();
myList.pop();

console.log(myList.isEmpty());

console.log(myList.print());

console.log(myList.peek());

