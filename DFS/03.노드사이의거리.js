// 노드사이의 거리
// 문제
// N개의 노드로 이루어진 트리가 주어지고 M개의 두 노드 쌍을 입력받을 때 두 노드 사이의 거리를 출력하라.

// 입력
// 첫째 줄에 노드의 개수 N과 거리를 알고 싶은 노드 쌍의 개수 M이 입력되고
// 다음 N-1개의 줄에 트리 상에 연결된 두 점과 거리를 입력받는다.
// 그 다음 줄에는 거리를 알고 싶은 M개의 노드 쌍이 한 줄에 한 쌍씩 입력된다.
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number); // 노드 개수n, 쿼리 개수 m
let graph = []; // 트리 정보 입력 받기
for (let i = 1; i <= n; i++) graph[i] = [];
// 1번 노드부터 n번 노드까지 빈 배열
for (let i = 1; i < n; i++) {
  let [x, y, cost] = input[i].split(" ").map(Number);
  // 연결되어 있는 두개의 노드에 대한 정보 입력
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  // 깊이 우선 탐색 함수 구현
  if (visited[x]) return; // 각 노드는 한 번만 방문
  visited[x] = true; // 방문 처리
  distance[x] = dist; // x번 노드까지의 거리를 기록
  for (let [y, cost] of graph[x]) {
    // x노드의 인접 노드들 확인
    dfs(y, dist + cost);
    // x노드의 인접 노드에 대한 깊이 우선 탐색 진행
    // x까지의 거리 비용인 dist와 x에서 y까지의 거리비용을 더해 총 거리비용을 계산
  }
}

for (let i = 0; i < m; i++) {
  // 각 쿼리마다 매번 dfs를 수행
  let [x, y] = input[n + i].split(" ").map(Number);
  visited = new Array(n + 1).fill(false); // 방문 처리 초기화
  distance = new Array(n + 1).fill(-1); // 거리 초기화
  dfs(x, 0); // 노드 x에서 출발했을 때의 모든 노드까지의 거리를 계산
  console.log(distance[y]); // 노드 y까지의 최단 거리 출력
}
