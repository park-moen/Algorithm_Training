class BinaryTree {
  constructor(array) {
    this.array = array;
  }

  preorder() {
    let res = '';
    const array = this.array;

    function recursive(index) {
      if (array.length <= index) return;

      res += array[index] + ' ';
      recursive(index * 2 + 1);
      recursive(index * 2 + 2);
    }

    recursive(0);

    return res;
  }

  inorder() {
    let res = '';
    const array = this.array;

    function recursive(index) {
      if (array.length <= index) return;

      recursive(index * 2 + 1);
      res += array[index] + ' ';
      recursive(index * 2 + 2);
    }

    recursive(0);
    return res;
  }

  postorder() {
    let res = '';
    const array = this.array;

    function recursive(index) {
      if (array.length <= index) return;

      recursive(index * 2 + 1);
      recursive(index * 2 + 2);
      res += array[index] + ' ';
    }

    recursive(0);
    return res;
  }

  bfs(value) {
    for (let idxVal of this.array) {
      if (value === idxVal) return true;
    }

    return false;
  }

  dfs(value) {
    const array = this.array;
    let isFound = false;

    function recursive(index) {
      if (index >= array.length || isFound) return;

      if (array[index] === value) {
        isFound = true;
        return;
      }

      recursive(index * 2 + 1);
      recursive(index * 2 + 2);
    }

    recursive(0);

    return isFound;
  }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const myTree = new BinaryTree(arr);

console.log(myTree.preorder());
// console.log(myTree.inorder());
// console.log(myTree.postorder());

// console.log(myTree.bfs(13));
// console.log(myTree.dfs(13));
