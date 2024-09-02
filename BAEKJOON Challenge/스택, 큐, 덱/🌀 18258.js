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

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.front === null ? true : false;
  }

  push(value) {
    if (this.isEmpty()) {
      this.front = new Node(value, null, this.front);
      this.rear = this.front;
    } else {
      this.rear = new Node(value, this.rear, null);
      this.rear.prev.next = this.rear;
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    if (this.front === this.rear) {
      const value = this.front.value;
      this.front = null;
      this.rear = null;

      this.size--;
      return value;
    }

    const value = this.front.value;
    this.front = this.front.next;
    this.front.prev = null;
    this.size--;

    return value;
  }

  peekFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.front.value;
  }

  peekBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.rear.value;
  }
}

/**
 *
 * @param {string []} input
 */
function solution(input) {
  const capacity = Number(input[0]);
  const cmdLines = input.slice(1);
  const result = [];
  const queue = new Queue(capacity);

  cmdLines.forEach(cmdLine => {
    const [cmd, value] = cmdLine.split(" ");

    switch (cmd) {
      case "push":
        queue.push(Number(value));
        break;
      case "pop":
        result.push(queue.pop());
        break;
      case "size":
        result.push(queue.size);
        break;
      case "empty":
        result.push(queue.isEmpty() ? 1 : 0);
        break;
      case "front":
        result.push(queue.peekFront());
        break;
      case "back":
        result.push(queue.peekBack());
        break;
    }
  });

  return result.join("\n");
}

console.log(solution(input));
