class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 숨바꼭질
// 문제
// 수빈이는 동생과 숨바꼭질을 하고 있다.
// 수빈이는 현재 점 N(0 ≤ N ≤ 100, 000)에 있고, 동생은 점 K(0 ≤ K ≤ 100, 000)에 있다.
// 수빈이는 걷거나 순간이동을 할 수 있다.
// 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X - 1 또는 X + 1로 이동하게 된다.
// 순간이동을 하는 경우에는 1초 후에 2 * X의 위치로 이동하게 된다.
// 수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지 구하는 프로그램을 작성하시오.

// 입력
// 첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다. N과 K는 정수이다.

// 풀이
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

const MAX = 100001;
let [n, k] = input[0].split(" ").map(Number); // 초기 위치n, 동생의 위치 k
let visited = new Array(MAX).fill(0); // 각 위치까지의 최단 시간

function bfs() {
  // 너비 우선 탐색
  let queue = new Queue();
  queue.enqueue(n);
  while (queue.getLength() != 0) {
    // 큐가 빌 때까지 반복
    let cur = queue.dequeue();
    if (cur == k) {
      // 동생의 위치에 도달한 경우
      return visited[cur]; // 최단 시간 출력
    }
    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      // 동생 위치에 도달하지 않은 경우 현재 위치의 -1, +1, *2를 탐색
      if (nxt < 0 || nxt >= MAX) continue;
      //  현재 위치의 -1, +1, *2가 공간을 벗어난 경우 무시
      if (visited[nxt] == 0) {
        // 방문 배열에 기록된 값이 0이라면 -> 아직 방문하지 않은 위치라면
        visited[nxt] = visited[cur] + 1; // 최단 거리 비용을 기록
        queue.enqueue(nxt);
      }
    }
  }
}

console.log(bfs());
