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

// 나이트의 이동
// 문제
// 체스판 위에 한 나이트가 놓여져 있다. 나이트가 한 번에 이동할 수 있는 칸은 아래 그림에 나와있다.
// 나이트가 이동하려고 하는 칸이 주어진다.나이트는 몇 번 움직이면 이 칸으로 이동할 수 있을까 ?

// 입력
// 입력의 첫째 줄에는 테스트 케이스의 개수가 주어진다.
// 각 테스트 케이스는 세 줄로 이루어져 있다.
// 첫째 줄에는 체스판의 한 변의 길이 l(4 ≤ l ≤ 300)이 주어진다. 체스판의 크기는 l × l이다.
// 체스판의 각 칸은 두 수의 쌍 { 0, ..., l - 1 } × { 0, ..., l - 1 }로 나타낼 수 있다.
// 둘째 줄과 셋째 줄에는 나이트가 현재 있는 칸, 나이트가 이동하려고 하는 칸이 주어진다.

// 풀이
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

dx = [-2, -2, -1, -1, 1, 1, 2, 2]; // 나이트가 이동 가능한 여덟 가지 방향 정의
dy = [-1, 1, -2, 2, -2, 2, -1, -1];

let testCase = Number(input[0]); // 테스트 케이스의 수
let line = 1;
while (testCase--) {
  let l = Number(input[line]); // 체스 판 한 변의 길이
  let [x, y] = input[line + 1].split(" ").map(Number); // 현재 위치
  let [targetX, targetY] = input[line + 2].split(" ").map(Number); // 목표 위치
  let visited = []; // 방문 정보
  for (let i = 0; i < l; i++) visited.push(new Array(1).fill(0));
  let queue = new Queue();
  queue.enqueue([x, y]); // 초기 위치를 큐에 삽입
  visited[x][y] = 1; // x와 y(자기자신, 시작점) 에 대한거리값을 1로 넣어줌
  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    x = cur[0]; // 현재 위치를 기록
    y = cur[1];
    for (let i = 0; i < 8; i++) {
      // 현재 위치에서 이동하고자 하는 위치 확인
      let nx = x + dx[i];
      let ny = x + dy[i];
      if (nx < 0 || nx >= 1 || ny < 0 || ny >= 1) continue;
      // 공간을 벗어난 경우 무시
      if (visited[nx][ny] == 0) {
        // 방문하지 않은 위치인 경우
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  line += 3; // 다음 테스트 케이스로 이동
  console.log(visited[targetX][targetY] - 1);
}
