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
    return this.head === null ? true : false;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
    } else {
      const node = new Node(value, null, this.head);
      this.head.prev = node;
      this.head = node; 
    }

    return;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null)
      this.tail = this.head;
    } else {
      const node = new Node(value, this.tail, null);
      this.tail.next = node;
      this.tail = node;
    }

    return;
  }

  setHead(index) {
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (curr === null) return false;
    }

    // if (curr === null) return false;

    curr.prev = null;
    this.head = curr;

    return true
  }

  access(index) {
    let curr = this.head;
    // let prev = null;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (curr === null) return undefined;
    }

    return curr.value;
  }

  insert(index, value) {
    if (this.head === null && index > 0) return false;

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
    curr.prev.next = node;
    curr.prev = node;
    curr = node;

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
      curr = curr.next

      if (curr === null) return false;
    }

    curr.prev.next = curr.next;
    
    if (curr !== this.tail) {
      curr.next.prev = curr.prev;
    } else {
      this.tail = curr.prev;
    }

    return true;
  }

  print() {
    if (this.head === null && this.tail === null) {
      console.log('[]');
      
      return;
    }

    let result = ' ';
    let curr = this.head;

    while (curr !== null) {
      result += curr.value + ' ';
      curr = curr.next;
    }

    console.log(`[${result}]`);
    
    return;
  }

  printInv() {

  }
}

const myList = new DoublyLinkedList();


for (let i = 0; i < 3; i++) {
  myList.append(i + 1);
}

myList.append(4); // 

console.log(myList.access(4)); // undefined

console.log(myList.setHead(4)); // false

myList.insert(2, 2); 

myList.remove(4); 

myList.print(); // [ 1 2 2 3 4 ]

