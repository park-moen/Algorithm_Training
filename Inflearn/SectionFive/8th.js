function makeMaps(maps, value) {
  if (!maps.has(value)) maps.set(value, 1);
  else maps.set(value, maps.get(value) + 1);
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  let lt = 0;
  const len = t.length - 1;
  const sH = new Map();
  const tH = new Map();

  for (let value of t) {
    makeMaps(tH, value);
  }

  for (let i = 0; i < len; i++) {
    makeMaps(sH, s[i]);
  }

  for (let rt = len; rt < s.length; rt++) {
    makeMaps(sH, s[rt]);

    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);

    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
