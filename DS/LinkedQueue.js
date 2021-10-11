class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  put(value) {
    if (this.tail === null) {
      this.head = new Node(value, this.head, null);
      this.tail = this.head;
      return true;
    }

    this.tail = new Node(value, this.tail, null);
    this.tail.prev.next = this.tail;

    return true;
  }

  get() {
    let result = 0;

    if (this.head === null) {
      console.log('underflow');
      return;
    } else if (this.head === this.tail) {
      result = this.head.value;

      this.head = null;
      this.tail = null;
    } else {
      result = this.head.value;

      this.head = this.head.next;
      this.head.prev = null;
    }

    return result;
  }

  peek() {
    if (this.head === null) {
      console.log('underflow');
      return;
    }

    return this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    if (this.head === null) {
      console.log([]);
      return [];
    }

    const result = [];
    let curr = this.head;

    while (curr !== null) {
      result.push(curr.value);
      curr = curr.next;
    }

    console.log(result);
    return result;
  }
}

const myQueue = new LinkedQueue();

myQueue.put(1);
myQueue.put(2);
myQueue.put(3);

console.log(myQueue.get(), 'get');
console.log(myQueue.peek(), 'peek');

console.log(myQueue.print());
