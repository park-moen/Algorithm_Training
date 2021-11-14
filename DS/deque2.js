class Deque {
  constructor() {
    this.store = [];
    this.front = 0;
    this.rear = 0;
  }

  pushRIgth(item) {
    this.store[this.rear] = item;
    this.rear++;
  }

  popLeft() {
    if (this.front >= this.rear) return;

    const res = this.store[this.front];
    this.front++;

    return res;
  }

  popRight() {
    if (this.front >= this.rear) return;

    const res = this.store[--this.rear];

    return res;
  }

  length() {
    const size = this.rear - this.front;

    return size > 0 ? size : 0;
  }
}

const deque = new Deque();
