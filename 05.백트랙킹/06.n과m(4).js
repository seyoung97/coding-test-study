// N과 M (4) 중복 조합
// 문제
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
// 1. 1부터 N까지 자연수 중에서 M개를 고른 수열
// 2. 같은 수를 여러 번 골라도 된다.
// 3. 고른 수열은 비내림차순이어야 한다.
// 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.

// 입력
// 첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let selected = [];

let answer = "";
function dfs(arr, depth, start) {
  if (depth == m) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1, i); // 중복 조합이므로, 재귀함수 호출시 현재 인덱스를 넣기
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer);
