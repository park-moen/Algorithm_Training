class LinearQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.rear = 0;
    this.front = 0;
    this.array = new Array(capacity);
  }

  put(value) {
    if (this.rear === this.capacity) {
      console.error('overflow');
      return false;
    }

    this.array[this.rear++] = value;
    return true;
  }

  get() {
    if (this.front === this.rear) {
      console.error('underflow');
      return;
    }

    return this.array[this.front++];
  }

  peek() {
    if (this.front === this.rear) {
      console.error('underflow');
      return;
    }

    return this.array[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  print() {
    if (this.front === this.rear) {
      console.log([]);
      return [];
    }

    const result = [];
    for (let i = this.front; i < this.rear; i++) {
      result.push(this.array[i]);
    }

    console.log(result);
    return result;
  }
}

const myQueue = new LinearQueue(8);

for (let i = 0; i < 5; i++) {
  myQueue.put(i + 1);
}

console.log(myQueue.get());
console.log(myQueue.get());
console.log(myQueue.get());

console.log(myQueue.print());

console.log(myQueue.peek());
