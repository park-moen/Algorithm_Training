class LinearQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.array = new Array(capacity);
  }

  enqueue(value) {
    if (this.rear === this.capacity) {
      console.log('queue overflow');
      return;
    }

    this.array[this.rear++] = value;
  }

  dequeue() {
    if (this.front > this.rear) {
      console.log('queue underflow');
      return;
    }

    return this.array[this.front++];
  }

  peek() {
    return this.front !== this.rear ? this.array[this.front] : undefined;
  }

  print() {
    if (this.front === this.rear) {
      console.log([]);
      return;
    }
    const result = [];

    for (let i = this.front; i < this.rear; i++) {
      result.push(this.array[i]);
    }

    console.log(result);
  }
}

const linearQueue = new LinearQueue(5);

linearQueue.enqueue(1);
linearQueue.enqueue(2);
linearQueue.enqueue(3);
linearQueue.enqueue(4);
linearQueue.enqueue(5);

linearQueue.dequeue();
linearQueue.dequeue();

linearQueue.print();
