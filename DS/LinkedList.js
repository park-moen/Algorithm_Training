class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;

    return value;
  }

  append(value) {
    if (this.head === null) return this.prepend(value);

    let curr = this.head;
    let prev = null;

    while (curr !== null) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, null);
    this.size++;

    return value;
  }

  setHead(index) {
    if (index < 0 || index > this.size) return false;

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    this.head = curr;
    this.size -= index;

    return true;
  }

  access(index) {
    if (index < 0 || index >= this.size) return;

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    return curr.value;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) return false;

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    let curr = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, curr);
    this.size++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size) return false;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      let prev = null;

      for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }

    this.size--;

    return true;
  }

  print() {
    if (this.head === null) {
      console.log([]);
      return [];
    }

    let curr = this.head;
    let result = [];

    while (curr !== null) {
      result.push(curr.value);
      curr = curr.next;
    }

    console.log(result);
    return result;
  }
}

const myList = new SinglyLinkedList();

console.log(myList.remove(0));

for (let i = 0; i < 4; i++) {
  myList.append(i + 1);
}

myList.setHead(2);

myList.print();

console.log(myList.access(1));
myList.insert(2, 2);

myList.print();

myList.remove(0);

myList.print();
