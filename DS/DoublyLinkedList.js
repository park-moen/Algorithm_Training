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

  findNode(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (currentNode.next === null) {
        console.log('잘못된 index 정보입니다.');
        return;
      }

      currentNode = currentNode.next;
    }

    return currentNode;
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
    const currentNode = this.findNode(index);

    if (currentNode) {
      this.head = currentNode;
      this.head.prev = null;
    }
  }

  access(index) {
    const currentNode = this.findNode(index);

    return currentNode.value;
  }

  insert(index, value) {
    if (!value) {
      console.log('값을 입력하세요.');
      return;
    }

    if (this.head === null) {
      this.prepend(value);
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (currentNode === null) {
        console.log('잘못된 index 정보입니다.');
        return;
      }

      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      this.append(value);
    }

    const node = new Node(value, currentNode.prev, currentNode);
    node.prev.next = node;
    node.next.prev = node;
  }

  remove(index) {
    if (this.head === null) {
      console.log('리스트가 비어 있어서 삭제를 할 수 없습니다.');
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;

      return;
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (currentNode.next === null) {
        console.log('잘못된 index 정보입니다.');
        return;
      }

      currentNode = currentNode.next;
    }

    if (currentNode === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;

      return;
    }

    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
  }

  print(mode = '') {
    if (this.head === null) {
      console.log('비어있는 리스트입니다.');
      return;
    }

    let currentNode = this.head;
    const result = [];

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    if (mode === 'reverse') {
      console.log(result.reverse());
    } else {
      console.log(result);
    }
  }
}

const doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList.isEmpty());

doublyLinkedList.prepend(2);

doublyLinkedList.prepend(1);
doublyLinkedList.append(3);
doublyLinkedList.append(4);
doublyLinkedList.append(5);
// doublyLinkedList.insert(2, 3);

doublyLinkedList.remove(4);

doublyLinkedList.print();
// console.log(doublyLinkedList.access(2));
// doublyLinkedList.setHead(4);

// doublyLinkedList.print();
