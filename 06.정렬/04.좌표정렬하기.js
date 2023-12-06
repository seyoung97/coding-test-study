// 좌표 정렬하기
// 문제
// 2차원 평면 위의 점 N개가 주어진다.
// 좌표를 x좌표가 증가하는 순으로,
// x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다.
// 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다.
// (-100, 000 ≤ xi, yi ≤ 100, 000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

// 출력
// 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

// 풀이
// 해결 아이디어
// sort()사용
// 원하는 기준에 따라서 객체에 대한 정렬을 수행하는 기능 제공
// 본 문제에서 정렬할 데이터는 한 점(x,y)로 객체 형태
// 1. x좌표가 증가하는 순으로 정렬
// 2. x좌표가 같으면 y좌표 증가하는 순으로 정렬
let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let data = [];
for (let i = 1; i < n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  data.push([x, y]);
}

function compare(a, b) {
  if (a[0] != b[0]) {
    // x가 같지 않다면
    return a[0] - b[0]; // x좌표 기준 오름차순
  } else {
    // x가 같으면
    return a[1] - b[1]; // y좌표 기준 오름차순
  }
}

data.sort(compare);

let answer = "";
for (let point of data) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);

// 좌표 정렬하기 2
// 문제
// 2차원 평면 위의 점 N개가 주어진다.
// 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다.
// 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다.
// (-100, 000 ≤ xi, yi ≤ 100, 000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

// 출력
// 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

// 풀이
function compareYfirst(a, b) {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
}

data.sort(compareYfirst);

let answer2 = "";
for (let point of data) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer2);
