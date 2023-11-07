// 숫자의 합
// 문제
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let numbers = input[1].split("").map(Number);

let total = numbers.reduce((a, b) => a + b);
console.log(total);

// 다른 풀이
let n = Number(input[0]);
let string = input[1];

let answer = 0;
// 문자열에 포함된 문자를 하나씩 확인하며
for (let x of string) {
  // 모든 숫자를 더하기
  answer += Number(x);
}

console.log(answer);
