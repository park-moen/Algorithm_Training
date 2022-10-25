class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.isFull = false;
    this.array = new Array(capacity);
  }

  put(value) {
    if (this.isFull) {
      console.log('overflow');
      return false;
    }

    this.array[this.rear++] = value;
    this.rear %= this.capacity;

    if (this.rear === this.front) this.isFull = true;

    return true;
  }

  get() {
    if (!this.isFull && this.front === this.rear) {
      console.log('underflow');
      return;
    }

    const value = this.array[this.front++];
    this.front %= this.capacity;
    this.isFull = false;

    return value;
  }

  peek() {
    if (!this.isFull && this.front === this.rear) {
      console.log('underflow');
      return;
    }

    return this.array[this.front];
  }

  isEmpty() {
    return !this.isFull && this.front === this.rear;
  }

  print() {
    if (!this.isFull && this.front === this.rear) {
      console.log([]);
      return [];
    }

    let endIdx = this.rear;

    if (this.rear <= this.front) endIdx += this.capacity;

    const result = [];
    for (let i = this.front; i < endIdx; i++) {
      result.push(this.array[i % this.capacity]);
    }

    console.log(result);
    return result;
  }
}

const myQueue = new CircularQueue(8);

for (let i = 0; i < 8; i++) {
  myQueue.put(i + 1);
}

myQueue.get();
myQueue.get();
myQueue.get();

console.log(myQueue.peek());

console.log(myQueue.print());
