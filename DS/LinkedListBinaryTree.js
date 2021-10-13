class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(array) {
    const nodeArr = array.map(el => new Node(el));
    const len = nodeArr.length;

    for (let i = 0; i < len; i++) {
      const leftIdx = i * 2 + 1;
      const rigthIdx = i * 2 + 2;

      if (leftIdx < len) nodeArr[i].left = nodeArr[leftIdx];
      if (rigthIdx < len) nodeArr[i].right = nodeArr[rigthIdx];
    }

    this.root = nodeArr[0];
  }

  preorder() {
    let res = '';

    function recursive(node) {
      res += node.value + ' ';

      if (node.left !== null) recursive(node.left);
      if (node.right !== null) recursive(node.right);
    }

    recursive(this.root);

    return res;
  }
  inorder() {
    let res = '';

    function recursive(node) {
      if (node.left !== null) recursive(node.left);
      res += node.value + ' ';
      if (node.right !== null) recursive(node.right);
    }

    recursive(this.root);

    return res;
  }
  postorder() {
    let res = '';

    function recursive(node) {
      if (node.left !== null) recursive(node.left);
      if (node.right !== null) recursive(node.right);
      res += node.value + ' ';
    }

    recursive(this.root);

    return res;
  }
  bfs(value) {
    const queue = [];

    queue.push(this.root);
    while (queue.length) {
      const node = queue.shift();

      if (node.value === value) return true;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    return false;
  }
  dfs(value) {
    let isFound = false;
    function recursive(node) {
      if (isFound) return;

      if (node.value === value) {
        isFound = true;
      }

      if (node.left !== null) recursive(node.left);
      if (node.right !== null) recursive(node.right);
    }

    recursive(this.root);

    return isFound;
  }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tree = new BinaryTree(arr);

console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());
console.log(tree.dfs(5));
console.log(tree.bfs(12));
