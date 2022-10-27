class ArrayBinaryTree {
  constructor(array) {
    if (!Array.isArray(array)) {
      console.log('매개변수가 배열 타입이 아닙니다.');
      return;
    }

    this.array = array;
  }

  predorder() {
    const result = [];
    const array = this.array;
    function recursive(index) {
      if (index >= array.length) {
        return;
      }

      result.push(array[index]);
      recursive(index * 2 + 1);
      recursive(index * 2 + 2);
    }

    recursive(0);

    console.log(result);
  }

  inorder() {
    const result = [];
    const array = this.array;
    function recursive(index) {
      if (index >= array.length) {
        return;
      }

      recursive(index * 2 + 1);
      result.push(array[index]);
      recursive(index * 2 + 2);
    }

    recursive(0);

    console.log(result);
  }

  postorder() {
    const result = [];
    const array = this.array;
    function recursive(index) {
      if (index >= array.length) {
        return;
      }

      recursive(index * 2 + 1);
      recursive(index * 2 + 2);
      result.push(array[index]);
    }

    recursive(0);

    console.log(result);
  }
}

const arrayBinaryTree = new ArrayBinaryTree([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
]);

arrayBinaryTree.predorder();
arrayBinaryTree.inorder();
arrayBinaryTree.postorder();
