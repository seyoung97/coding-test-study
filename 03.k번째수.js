// K번째 수
// 문제
// 수 N개 A1, A2, A3, ..., AN이 주어진다. A를 오름차순 정렬을했을 때,
// 앞에서부터 K번째 있는 수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N(1<= N <= 5,000,000)과 k(1<= k<= N)이 주어진다.
// 둘째 중에는 A1, A2, A3, ..., AN이 주어진다.

// 출력
// A를 정렬했을 때, 앞에서부터 K번째 있는 수를 출력한다.
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr[K - 1]);
