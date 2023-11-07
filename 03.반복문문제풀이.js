// 합
// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
  summary += i;
}

console.log(summary);

// 다른 풀이
// 등차수열의 합 공식을 이용할 수 있음
// 등차수열의 제 1항 부터 제 N항까지의 합을 Sn이라고 하자
// 첫째 항이 a, 마지막 항이 l일 때: Sn = N(a + l)/2
console.log((n * (n + 1)) / 2);

// 구구단
// 문제
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

// 입력
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

// 출력
// 출력형식과 같게 N*1부터 N*9까지 출력한다.

// 풀이
let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");
let a = Number(input2[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${a} * ${i} = ${n * i}`);
}

// 별 찍기 1
// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 풀이
let fs = require("fs");
let input3 = fs.readFileSync("/dev/stdin").toString().split("\n");
let b = Number(input3[0]);

for (let i = 1; i <= b; i++) {
  const star = "*";
  console.log(star.repeat(i));
}

// 다른 풀이
// 이중 반복문
let result = "";
for (let i = 0; i < b; i++) {
  // 층(행)만큼 반복
  for (let j = 0; j <= i; j++) {
    // 현재 행만큼 별 출력
    result += "*";
  }
  result += "\n"; // 행 바뀔 때마다 줄바꿈
}

console.log(result);
