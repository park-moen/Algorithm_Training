class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class Dequeue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null ? true : false;
  }

  unshift(value) {
    const newNode = new Node(value, null, this.head);
    this.size++;

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  shift() {
    if (this.isEmpty()) {
      return -1;
    }

    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;

      return value;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;

    return value;
  }

  push(value) {
    if (this.isEmpty()) {
      this.head = new Node(value, null, this.head);
      this.tail = this.head;
    } else {
      this.tail = new Node(value, this.tail, null);
      this.tail.prev.next = this.tail;
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;

      return value;
    }

    const value = this.tail.value;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;

    return value;
  }

  rotate(steps) {
    if (this.isEmpty()) {
      return -1;
    }

    if (steps > 0) {
      for (let i = 0; i < steps; i++) {
        this.push(this.shift());
      }
    } else {
      for (let i = 0; i < Math.abs(steps); i++) {
        this.unshift(this.pop());
      }
    }
  }

  get getSize() {
    return this.size;
  }

  get front() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.head.value;
  }

  get end() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.tail.value;
  }

  get print() {
    if (this.isEmpty()) {
      return [];
    }

    let currentNode = this.head;
    const result = [];

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }
}

const dequeue = new Dequeue();

dequeue.unshift(1);
dequeue.unshift(2);
dequeue.unshift(3);
dequeue.unshift(4);

console.log(dequeue.print);
