class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null ? true : false;
  }

  enqueue(value) {
    if (this.isEmpty()) {
      this.front = new Node(value, null, this.front);
      this.rear = this.front;
    } else {
      this.rear = new Node(value, this.rear, null);
      this.rear.prev.next = this.rear;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("queue underflow");
      return;
    }

    if (this.front === this.rear) {
      const value = this.front.value;
      this.front = null;
      this.rear = null;

      return value;
    }

    const value = this.front.value;
    this.front = this.front.next;
    this.front.prev = null;

    return value;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("리스트에 값이 비어있습니다.");
      return;
    }

    return this.front.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log([]);
      return;
    }

    let currentNode = this.front;
    const result = [];

    while (currentNode) {
      result.push(currentNode.value);

      currentNode = currentNode.next;
    }

    console.log(result);
  }
}

const linkedQueue = new LinkedQueue();

console.log(linkedQueue.isEmpty());

linkedQueue.enqueue(1);
linkedQueue.enqueue(2);
linkedQueue.enqueue(3);
linkedQueue.enqueue(4);

// linkedQueue.dequeue();
// const peek = linkedQueue.peek();

// console.log(front, peek);

linkedQueue.print();
