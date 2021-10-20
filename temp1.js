function solution(orders, course) {
  const result = [];
  let total = new Map();

  const pick = (begin, order, len, temp) => {
    if (temp.length === len) {
      const alpha = temp.slice(0).sort().join('');
      total.set(alpha, total.get(alpha) + 1 || 1);
      return;
    }

    for (let i = begin; i < order.length; i += 1) {
      temp.push(order[i]);
      pick(i + 1, order, len, temp);
      temp.pop(order[i]);
    }
  };

  for (let i = 0; i < course.length; i += 1) {
    const len = course[i];
    let max = 2,
      temp = [];
    total = new Map();

    for (let i = 0; i < orders.length; i += 1) {
      pick(0, orders[i], len, temp);
    }

    let strings = [];
    for (const [alpha, count] of total) {
      if (count < max) continue;
      if (count > max) {
        max = count;
        strings = [alpha];
      } else if (count === max) strings.push(alpha);
    }
    result.push(...strings);
  }

  return result.sort();
}

// const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
const orders = ['XYZ', 'XWY', 'WXA'];
const course = [2, 3, 4];

console.log(solution(orders, course));
