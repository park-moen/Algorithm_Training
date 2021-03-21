class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null ? false : true;
  }

  prepend(value) {
    return (this.head = new Node(value, this.head));
  }

  append(value) {
    let curr = this.head;
    let prev = null;

    if (curr === null) {
      this.head = new Node(value, null);
      return;
    }

    while (curr !== null) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, null);

    return;
  }

  setHead(index) {
    let curr = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      if (curr === null) return false;

      curr = curr.next;
    }

    this.head = curr.next;

    return true;
  }

  access(index) {
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    return curr.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let curr = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      if (curr === null) return;

      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, curr);

    return;
  }

  remove(index) {
    if (index === 0) {
      if (this.head !== null) {
        this.head = this.head.next;
        return true;
      } else {
        return false;
      }
    }

    let curr = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return false;
      }
      prev = curr;
      curr = curr.next;
    }

    if (prev.next === null) return false;

    prev.next = curr.next;

    return;
  }

  print() {
    let curr = this.head;

    if (curr === null) {
      console.log('[]');
      return;
    }

    let result = ' ';
    while (curr !== null) {
      result += curr.value + ' ';
      curr = curr.next;
    }

    console.log(`[${result}]`);

    return;
  }
}

const myList = new SinglyLinkedList();

console.log(myList.print());

console.log(myList.remove(0));

for (let i = 0; i < 4; i++) {
  myList.append(i + 1);
}

// myList.setHead(1); // [ 1 2 3 4 ] [ 3 4 ]

// console.log(myList.access(1));
myList.insert(2, 2); // [ 1 2 2 3 4 ]

myList.remove(0); // [ 1 2 3 4 ]

myList.print();
