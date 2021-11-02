const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input.shift());

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heapPush(value) {
    this.heap.push(value);

    let currIdx = this.size();
    let parentIdx = parseInt(currIdx / 2);

    while (currIdx > 1 && this.heap[parentIdx] > this.heap[currIdx]) {
      this, this.swap(currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = parseInt(currIdx / 2);
    }
  }

  heapPop() {
    const min = this.heap[1];

    if (this.size() <= 1) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let currIdx = 1;
    let leftIdx = currIdx * 2;
    let rigthIdx = currIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rigthIdx]) {
      if (this.heap[leftIdx] < this.heap[currIdx]) {
        this.swap(currIdx, leftIdx);
        return min;
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[currIdx] ||
      this.heap[rigthIdx] < this.heap[currIdx]
    ) {
      const minIdx = this.heap[leftIdx] > this.heap[rigthIdx] ? rigthIdx : leftIdx;
      this.swap(currIdx, minIdx);

      currIdx = minIdx;
      leftIdx = currIdx * 2;
      rigthIdx = currIdx * 2 + 1;
    }

    return min;
  }
}

const minHeap = new MinHeap();

for (let i = 0; i < n; i++) {
  minHeap.heapPush(+input[i]);
}

let totalCount = 0;

while (minHeap.size() > 1) {
  const firstCard = minHeap.heapPop();
  const secondCard = minHeap.heapPop();
  const sumCount = firstCard + secondCard;

  totalCount += sumCount;
  minHeap.heapPush(sumCount);
}

console.log(totalCount);
