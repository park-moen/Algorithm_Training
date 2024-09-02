const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

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

/**
 *
 * @param {string[]} input
 * @returns
 */

function solution(input) {
  const N = Number(input[0]);
  const dequeue = new Dequeue();
  const result = [];

  for (let i = 1; i <= N; i++) {
    const [cmd, value] = input[i].split(" ");

    switch (cmd) {
      case "1":
        dequeue.unshift(Number(value));
        break;
      case "2":
        dequeue.push(Number(value));
        break;
      case "3":
        result.push(dequeue.shift());
        break;
      case "4":
        result.push(dequeue.pop());
        break;
      case "5":
        result.push(dequeue.getSize);
        break;
      case "6":
        result.push(dequeue.isEmpty() ? 1 : 0);
        break;
      case "7":
        result.push(dequeue.front);
        break;
      case "8":
        result.push(dequeue.end);
        break;
    }
  }

  return result.join("\n");
}

console.log(solution(input));
