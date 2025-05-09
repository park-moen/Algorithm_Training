function solution1(record) {
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

const recode1 = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution1(recode1));

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

  const res = [];

  for (const order of orders) {
    const [cmd, uid] = order;

    if (cmd === 'Enter') res.push(`${users[uid]}님이 들어왔습니다.`);
    if (cmd === 'Leave') res.push(`${users[uid]}님이 나갔습니다.`);
  }

  return res;
}

const recode2 = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution2(recode2));

function solution3(record) {
  const answer = [];
  const upToState = {}; // hash

  for (const infomation of record) {
    const [action, id, name] = infomation.split(' ');

    if (action === 'Enter' || action === 'Change') upToState[id] = name;
  }

  for (const infomation of record) {
    const [action, id] = infomation.split(' ');

    if (action === 'Enter') {
      answer.push(upToState[id] + '님이 들어왔습니다.');
    } else if (action === 'Leave') {
      answer.push(upToState[id] + '님이 나갔습니다.');
    }
  }

  return answer;
}

const recode3 = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution3(recode3));
