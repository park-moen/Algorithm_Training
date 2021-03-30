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

  isEmpty() {
    return this.head === null ? true : false;
  }

  put(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
    } else {
      this.tail = new Node(value, this.tail, null);
      this.tail.prev.next = this.tail;
    }
  }

  get() {
    let value;
    if (this.head === null) {

      return undefined;
    } else if (this.head === this.tail) {
      value = this.head.value;
      this.head = null;
      this.tail = null;
    } else {
      value = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
    }

    return value;
  }

  peek() {
    if (this.head === null) {
      return undefined;
    }
    return this.head.value;
  }

  print() {
    let curr = this.head;

    if (curr === null) {
      return '[]';
    }

    let result = ' ';

    while (curr !== null) {
      result += `${curr.value} `;
      curr = curr.next;
    }

    return `[${result}]`
  }
}

const myQueue = new LinkedQueue();

myQueue.put(1);
myQueue.put(2);
myQueue.put(3);

console.log(myQueue.get(), 'get');
console.log(myQueue.peek(), 'peek');

console.log(myQueue.print());