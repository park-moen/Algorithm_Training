// 틀린 문제
// sort()를 통해서 while loop을 도는 동안 계속 정렬을 하도록 코드를 작성했지만,
// 정렬에 대한 시간복잡도가 nlog(n)이라고 하면, n * nlogn이 되어서 시간 초과가 발생한다.
// 초기 1회 정렬이 필요한 경우는 sort 메소드를 사용하는게 효과적이지만
// 값에 대한 잦은 수정이 있는경우, 계속 정렬을 해야하는 경우는 heap을 사용하는게 효과적입니다.

// const fs = require('fs');
// const input = fs.readFileSync('input.txt').toString().trim().split('\n');

// input.shift();

// const bundleCards = input.map(v => +v).sort((a, b) => a - b);

// let result = 0;

// while (true) {
//   if (bundleCards.length === 1) {
//     const bundleCard = bundleCards.shift();

//     result += bundleCard;
//     break;
//   }

//   const firstBundleCard = bundleCards.shift();
//   const lastBundleCard = bundleCards.shift();
//   const sumOfBundleCard = firstBundleCard + lastBundleCard;

//   result += sumOfBundleCard;

//   if (bundleCards.length === 0) {
//     break;
//   }

//   bundleCards.push(sumOfBundleCard);
//   bundleCards.sort((a, b) => a - b);
// }

// console.log(result);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
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

  heapAdd(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapPoll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.heapifyDown();

    return minValue;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      if (this.getLeftChildIndex(currentIndex) >= this.size()) {
        break;
      }

      const leftIndex = this.getLeftChildIndex(currentIndex);
      const rigthIndex = this.getRightChildIndex(currentIndex);

      let leastChildIndex = leftIndex;

      if (rigthIndex < this.size() && this.heap[leftIndex] > this.heap[rigthIndex]) {
        leastChildIndex = rigthIndex;
      }

      if (this.heap[currentIndex] > this.heap[leastChildIndex]) {
        this.swap(currentIndex, leastChildIndex);
        currentIndex = leastChildIndex;
      } else {
        break;
      }
    }
  }
}

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = input.shift();
const bundleCards = input.map(v => +v);
const heap = new MinHeap();

for (let i = 0; i < N; i++) {
  heap.heapAdd(bundleCards[i]);
}

let result = 0;

while (heap.size() > 1) {
  const firstBundleCard = heap.heapPoll();
  const lastBundleCard = heap.heapPoll();
  const sumOfBundleCard = firstBundleCard + lastBundleCard;

  result += sumOfBundleCard;
  heap.heapAdd(sumOfBundleCard);
}

console.log(result);
