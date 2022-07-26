## 11399번 ATM

### 문제 설명

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f96ae4e0-e261-4814-8aa1-5344c96b22ed/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df18ac71-0498-4c4b-8234-75eb6d5f2ac5/Untitled.png)

### 풀이 방법

- 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 문제로 그리디 알고리즘으로 최적의 해를 구해야 합니다.
- 정렬을 사용하여 가장 빠르게 인출하는 순서대로 나열합니다.
- 나열된 배열을 중첩 for문을 사용하여 인출 시간의 합을 결과에 누적시켜줍니다.

```js
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input[0]);
const timeWork = input[1]
  .split(' ')
  .map(v => +v)
  .sort();
// 11 103 132 19 102 => 102 103 11 132 19

let result = 0;

// 2중 for문을 사용 O(n^2)
for (let i = 0; i < n; i++) {
  for (let j = i; j >= 0; j--) {
    result += timeWork[j];
  }
}

console.log(result);
```

### 실패 지점

JS의 정렬 함수(Array.prototype.sort)가 배열 요소의 type을 암묵적으로 문자열로 변환 후 ASCII 문자 기준으로 정렬하는 특징을 가지고 있어서 10 이상의 숫자 type 부터는 sort 함수에 조건을 지정하지 않으면 사용자가 원하는 정렬된 값을 받을 수 없는 문제를 인식하지 못해서 반례에서 실패하는 경우가 생겼습니다.

```js
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input[0]);
const timeWork = input[1]
  .split(' ')
  .map(v => +v)
  .sort((a, b) => a - b); // 실패 지점을 해결하기 위해 조건을 작성

let result = 0;

for (let i = 0; i < n; i++) {}

console.log(result);
```

### 더 좋은 문제 풀이

위의 풀이 방법에서 가장 큰 문제점으로는 다중 for문을 사용했다는 문제가 있습니다. 이렇게 문제를 풀었어도 백준 문제 제출에는 정답으로 인정해주었지만 N ≤ 1,000 이라는 조건을 생각하면 O(n^2)으로 문제 풀이를 했을 경우 최대 1,000,000 연산으로 문제가 발생할 가능성이 생길 수 있습니다.

그래서 생각한 방법으로 새로운 변수를 만들어서 이전에 참조했던 값을 누적하고 결과 값에 정렬한 배열과 이전에 참조한 누적 값을 더하는 방식으로 문제를 풀어보았습니다.

```js
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input[0]);
const timeWork = input[1]
  .split(' ')
  .map(v => +v)
  .sort((a, b) => a - b);

let result = 0;
let previousValue = 0;

// 단일 for문을 사용하여 O(n)
for (let i = 0; i < n; i++) {
  result += timeWork[i] + previousValue;
  previousValue += timeWork[i];
}

console.log(result);
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e4f141a-df15-442c-a205-dc31ccb805f2/Untitled.png)
