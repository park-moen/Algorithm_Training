class Heap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heapPush(value) {
    this.heap.push(value);

    let curIdx = this.heap.length - 1;
    let parIdx = parseInt(curIdx / 2);

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parseInt;
      parIdx = parseInt(curIdx / 2);
    }
  }

  heapPop() {
    const min = this.heap[1];

    if (this.heap.length - 1 <= 1) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rigthIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rigthIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rigthIdx] < this.heap[curIdx]
    ) {
      const minIdx = this.heap[leftIdx] > this.heap[rigthIdx] ? rigthIdx : leftIdx;
      this.swap(minIdx, curIdx);

      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rigthIdx = curIdx * 2 + 1;
    }

    return min;
  }

  print() {
    if (this.heap.length === 1) {
      console.log('[]');
      return;
    }

    console.log(`[ ${this.heap.slice(1).join(', ')} ]`);
  }
}

const heap = new Heap();

heap.heapPush(1);
heap.heapPush(3);
heap.heapPush(2);
heap.heapPush(7);
heap.heapPush(1);
heap.heapPush(5);
heap.heapPush(6);
heap.heapPush(2);
heap.heapPush(8);

// heap.print();
// heap.heapPop();
// heap.heapPop();
// heap.heapPop();
// heap.heapPop();
// heap.heapPop();
// heap.heapPop();
// heap.heapPop();
heap.print();
