class RecentCounter {
  constructor() {
    this.queue = [];
  }

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.queue.push(t);

    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}

const recentCounter = new RecentCounter();
recentCounter.ping(1); // 1
recentCounter.ping(2); // 2
recentCounter.ping(3); // 3
recentCounter.ping(3003); // ← 여기서 while이 2번 돈다
