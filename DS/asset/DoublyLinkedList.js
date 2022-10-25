class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  prepend(value) {
    this.head = new Node(value, null, this.head);

    if (this.tail === null) {
      this.tail = this.head;
    } else {
      this.head.next.prev = this.head;
    }
  }

  append(value) {
    this.tail = new Node(value, this.tail, null);

    if (this.head === null) {
      this.head = this.tail;
    } else {
      this.tail.prev.next = this.tail;
    }
  }

  setHead(index) {
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr.next === null) return false;
      curr = curr.next;
    }

    this.head = curr;
    this.head.prev = null;

    return true;
  }

  access(index) {
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr.next === null) return;

      curr = curr.next;
    }

    return curr.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return true;
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr === null) return false;

      curr = curr.next;
    }

    if (curr === null) {
      this.append(value);
      return true;
    }

    const node = new Node(value, curr.prev, curr);
    node.prev.next = node;
    node.next.prev = node;

    return true;
  }

  remove(index) {
    if (this.head === null) return false;

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;

      return true;
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr.next === null) return false;
      curr = curr.next;
    }

    if (curr === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;

      return true;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    return true;
  }

  print() {
    let curr = this.head;

    if (curr === null) return '[]';

    let res = '';
    while (curr !== null) {
      res += curr.value + ' ';
      curr = curr.next;
    }

    return `[ ${res}]`;
  }

  printInv() {
    let curr = this.tail;

    if (this.tail === null) return '[]';

    let res = '';
    while (curr !== null) {
      res += curr.value + ' ';
      curr = curr.prev;
    }

    return `[ ${res}]`;
  }
}
const myList = new DoublyLinkedList();

for (let i = 0; i < 3; i++) {
  myList.append(i + 1);
}

myList.append(4);

console.log(myList.access(0));

// console.log(myList.setHead(3));

myList.insert(2, 2);

myList.remove(4);

console.log(myList.print()); // [ 1 2 2 3 4 ]
