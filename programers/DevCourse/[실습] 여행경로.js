function solution(tickets) {
  let answer = [];
  const len = tickets.length;
  const visited = Array.from({ length: len }).fill(false);

  tickets.sort();

  function dfs(airport, count, path) {
    if (count === len && !answer.length) {
      answer = path;
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === airport) {
        visited[i] = true;
        dfs(tickets[i][1], count + 1, [...path, tickets[i][1]]);
        visited[i] = false;
      }
    }
  }

  dfs('ICN', 0, ['ICN']);
  return answer;
}

const tickets = [
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
];

solution(tickets);
