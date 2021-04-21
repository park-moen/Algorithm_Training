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
      console.error('queue overflow');

      return false;
    }

    this.array[this.rear++] = value;
    this.rear %= this.capacity;

    if (this.rear === this.front) {
        this.isFull = true;
    }

    return true;
  }

  get() {
    if (!this.isFull && this.front === this.rear) {
      console.error('queue underflow');
      
      return false;
    }

    this.array[this.front++];
    this.front %= this.capacity;

    this.isFull = false;

    return true;
  }

  peek() {
    if (!this.isFull && this.front === this.rear) {
      console.error('queue underflow');

      return undefined;
    }

    return this.array[this.front];
  }

  print() {
    if (!this.isFull && this.front === this.rear) {
      return '[]';
    }

    // 순회를 통해서 front index가 rear index보다 뒤에 있는 경우
    // 1. for문을 두번 사용
    // 2. 가상으로 capacity(용량)를 만드어서 for문을 한번만 사용
    let index = this.rear;
    let result = ' ';

    if (this.rear <= this.front) {
      index += this.capacity;
   }
    for (let i = this.front; i < index; i++) {
      result += this.array[i % this.capacity] + ' ';
   }

   return `[${result}]`;
  }
}

const myQueue = new CircularQueue(8);

for (let i = 0; i < 8; i++) {
  myQueue.put(i + 1);
}

myQueue.get();
myQueue.get();
myQueue.get();

console.log(myQueue.peek());;

console.log(myQueue.print());
