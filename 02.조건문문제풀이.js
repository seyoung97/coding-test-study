// 시험성적
// 문제
// 시험 점수를 입력받아 90 ~100점은 A, 80 ~89점은 B, 70 ~79점은 C, 60 ~69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let data = Number(input[0]);

function check(a) {
  if (90 <= a && a <= 100) {
    console.log("A");
  } else if (80 <= a && a <= 89) {
    console.log("B");
  } else if (70 <= a && a <= 79) {
    console.log("C");
  } else if (60 <= a && a <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
}

check(data);
