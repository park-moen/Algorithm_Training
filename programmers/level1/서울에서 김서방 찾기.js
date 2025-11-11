function solution(seoul) {
  if (Array.isArray(seoul)) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
  }
}

const seoul = ['Jane', 'Kim'];
solution(seoul);
