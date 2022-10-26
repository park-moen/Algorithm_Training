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

  // 리스트가 비어있는지 확인하는 연산자
  isEmpty() {
    if (this.head !== null) {
      return false;
    }

    return true;
  }

  findNode(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (!currentNode) {
        console.log('잘못된 index 정보입니다.');
        return;
      }

      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // 리스트의 앞에 개체를 삽입하는 연산자
  prepend(value) {
    this.head = new Node(value, this.head);
  }

  // 리스트의 뒤에 개체를 삽입하는 연산자
  append(value) {
    if (!this.head) {
      this.head = new Node(value, null);

      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = new Node(value, null);
  }

  // 리스트의 첫 머리(head)를 결정하는 연산자
  setHead(index) {
    this.head = this.findNode(index);
  }

  // 주어진 인덱스에 해당하는 요소에 접근하는 연산자
  access(index) {
    return this.findNode(index)?.value;
  }

  // 주어진 인덱스에 새로운 요소를 삽입하는 연산자
  insert(item, index) {
    if (index === 0) {
      this.prepend(item);
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i < index; i++) {
      if (!currentNode) {
        console.log('잘못된 index 정보입니다.');
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = new Node(item, currentNode);
  }

  // 주어진 인덱스에 해당하는 요소를 제거하는 연산자
  remove(index) {
    if (index === 0) {
      if (this.head !== null) {
        this.head = this.head.next;
        return;
      } else {
        console.log('잘못된 정보입니다.');
        return;
      }
    }

    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i < index; i++) {
      if (currentNode === null || currentNode.next === null) {
        console.log('잘못된 index 정보입니다.');
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
  }

  print() {
    let result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.value);

      currentNode = currentNode.next;
    }

    console.log(result.join(' -> '));
  }
}

const singlyLinkedList = new SinglyLinkedList();

console.log(singlyLinkedList.isEmpty());
singlyLinkedList.prepend(4);
singlyLinkedList.prepend(5);

singlyLinkedList.append(2);
singlyLinkedList.append(1);
singlyLinkedList.insert(3, 2);
// singlyLinkedList.remove(4);

console.log(singlyLinkedList.isEmpty());
console.log(singlyLinkedList.access(2));

singlyLinkedList.print();

singlyLinkedList.setHead(2);
singlyLinkedList.print();
