// 동전 0
// 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.
// 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다.
// 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
// 둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순으로 주어진다.
// (1 ≤ Ai ≤ 1, 000, 000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai - 1의 배수)

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 1; i <= input.length; i++) {
  arr.push(Number(input[i]));
}

let cnt = 0;
for (let i = n - 1; i >= 0; i--) {
  cnt += Math.floor(k / arr[i]); // 해당 동전을 몇개 사용해야하는지
  k %= arr[i]; // 해당 동전으로 모두 거슬러준 뒤 남은 금액
}

console.log(cnt);
