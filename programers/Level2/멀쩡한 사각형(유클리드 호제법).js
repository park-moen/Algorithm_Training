function gcd(w, h) {
  return h ? gcd(h, w % h) : w;
}

function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}

console.log(solution(8, 12));
