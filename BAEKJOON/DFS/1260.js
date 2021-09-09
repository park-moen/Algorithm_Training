const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(item => +item);
