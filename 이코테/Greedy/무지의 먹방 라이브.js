const food_times = [3, 1, 1, 1, 2, 4, 3];
const k = 12;

function solution(food_times, k) {
  const foods = [];
  let n = food_times.length;

  for (let i = 0; i < n; i++) {
    foods[i] = { val: food_times[i], index: i + 1 };
  }

  foods.sort((a, b) => {
    if (a.val === b.val) return a.index - b.index;
    return a.val - b.val;
  });

  let pretime = 0;

  for (let i = 0; i < foods.length; i++) {
    const diff = foods[i].val - pretime;

    if (diff !== 0) {
      let spend = diff * n;

      if (spend <= k) {
        k -= spend;
        pretime = foods[i].val;
      } else {
        k %= n;
        const subList = foods.slice(i).sort((a, b) => a.index - b.index);

        return subList[k].index;
      }
    }

    n -= 1;
  }

  return -1;
}

console.log(solution(food_times, k));
