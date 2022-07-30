class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(firstIndex, lastIndex) {
    [this.heap[firstIndex], this.heap[lastIndex]] = [
      this.heap[lastIndex],
      this.heap[firstIndex],
    ];
  }

  size() {
    return this.heap.length;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftIndex = currentIndex * 2 + 1;
      const rightIndex = currentIndex * 2 + 2;

      if (leftIndex > this.heap.length) {
        break;
      }

      let leastChildIndex = leftIndex;

      if (
        rightIndex < this.heap.length &&
        this.heap[leftIndex] > this.heap[rightIndex]
      ) {
        leastChildIndex = rightIndex;
      }

      if (this.heap[currentIndex] > this.heap[leastChildIndex]) {
        this.swap(currentIndex, leastChildIndex);
        currentIndex = leastChildIndex;
      } else {
        break;
      }
    }
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return minValue;
  }
}

const fs = require('fs');
let input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(v => +v);
const N = input.shift();

const result = [];
const minHeap = new MinHeap();

for (let i = 0; i < N; i++) {
  if (input[i] > 0) {
    minHeap.add(input[i]);
  } else if (minHeap.size() === 0) {
    result.push(0);
  } else {
    result.push(minHeap.poll());
  }
}

console.log(result.join('\n'));
