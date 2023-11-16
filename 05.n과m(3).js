// N과 M (3) 중복 수열
// 문제
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
// 1. 1부터 N까지 자연수 중에서 M개를 고른 수열
// 2. 같은 수를 여러 번 골라도 된다.

// 입력
// 첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 7)

// 풀이
// visited 배열 제거
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number); // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
let arr = []; // 순열을 계산하고자 하는 원소가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);

let selected = [];

let answer = "";
function dfs(arr, depth) {
  if (depth == m) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
}

dfs(arr, 0);
console.log(answer);
