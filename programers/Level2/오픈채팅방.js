function solution(record) {
  let answer = [];
  const hash = {};

  for (const user of record) {
    const [state, uid, name] = user.split(' ');

    if (state === 'Leave') {
      answer.push([uid, '님이 나갔습니다.']);
      continue;
    }
    if (state === 'Enter') answer.push([uid, '님이 들어왔습니다.']);

    hash[uid] = name;
  }

  return answer.map(el => hash[el[0]] + el[1]);
}

const recode = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution(recode));

function solution2(record) {
  const users = {};
  const orders = [];

  for (const rec of record) {
    const [cmd, uid, nickname] = rec.split(' ');

    if (cmd === 'Enter') {
      users[uid] = nickname;
      orders.push([cmd, uid]);
    }

    if (cmd === 'Leave') {
      orders.push([cmd, uid]);
    }

    if (cmd === 'Change') {
      users[uid] = nickname;
    }
  }

  console.log(orders, users);

  const res = [];

  for (const order of orders) {
    const [cmd, uid] = order;

    if (cmd === 'Enter') res.push(`${users[uid]}님이 들어왔습니다.`);
    if (cmd === 'Leave') res.push(`${users[uid]}님이 나갔습니다.`);
  }

  return res;
}
