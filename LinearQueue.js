class LinearQueue {
  constructor(capacity) {
      this.capacity = capacity;
      this.front = 0;
      this.rear = 0;
      this.array = new Array(capacity);
  }

  put(value) {
    if (this.rear === this.capacity) {
      console.error('queue overflow');
      
      return false;
    }

    this.array[this.rear++] = value;

    return true;
  }

  get() {
    if (this.front === this.rear) {
      console.error('queue underflow');

      return undefined;
    }

    return this.array[this.front++];
  }

  peek() {
    if (this.front === this.rear) {
      return undefined;
    }

    return this.array[this.front];
  }

  print() {
    let result = ' ';

    for (let i = this.front; i < this.rear; i++) {
      result += this.array[i] + ' ';
    }

    return `[${result}]`;
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