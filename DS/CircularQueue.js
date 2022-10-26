class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.isFull = false;
  }

  enqueue(value) {
    if (this.isFull) {
      console.log('queue overflow');
      return;
    }

    this.array[this.rear++] = value;
    this.rear %= this.capacity;

    if (this.front === this.rear) {
      this.isFull = true;
    }
  }

  dequeue() {
    if (!this.isFull && this.front === this.rear) {
      console.log('queue underflow');
      return;
    }

    const value = this.array[this.front++];
    this.front %= this.capacity;
    this.isFull = false;

    return value;
  }

  peek() {
    if (this.front === this.rear && !this.isFull) {
      console.log('리스트가 비어있습니다.');
      return;
    }

    return this.array[this.front];
  }

  print() {
    const result = [];
    let endIndex = this.rear;

    if (this.front === this.rear && !this.isFull) {
      console.log([]);
      return;
    }

    if (this.front >= this.rear) {
      endIndex += this.capacity;
    }

    for (let i = this.front; i < endIndex; i++) {
      result.push(this.array[i]);
    }

    console.log(result);
  }
}

const circularQueue = new CircularQueue(5);

circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);

const front = circularQueue.dequeue();
const peek = circularQueue.peek();
console.log(front, peek);

circularQueue.print();
