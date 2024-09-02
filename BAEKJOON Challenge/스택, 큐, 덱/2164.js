const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

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
    this.size = 0;
  }

  isEmpty() {
    return this.head === null ? true : false;
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

    const value = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;

    return value;
  }

  get front() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.head.value;
  }

  get back() {
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

function solution(input) {
  const queue = new LinkedQueue();

  for (let i = 1; i <= input; i++) {
    queue.push(i);
  }

  while (queue.size !== 1) {
    queue.pop();
    queue.push(queue.pop());
  }

  return queue.front;
}

console.log(solution(input));
