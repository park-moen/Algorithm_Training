const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

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

  getSize() {
    return this.size;
  }

  get print() {
    if (this.isEmpty()) {
      return [];
    }

    let currentValue = this.head;
    const result = [];

    while (currentValue) {
      result.push(currentValue.value);
      currentValue = currentValue.next;
    }

    return result;
  }
}

/**
 *
 * @param {string []} input
 * @returns
 */
function solution(input) {
  const [N, K] = input.map(Number);
  const queue = new LinkedQueue();
  const result = [];

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (!queue.isEmpty()) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }

    result.push(queue.pop());
  }

  return `<${result.join(", ")}>`;
}

console.log(solution(input));
