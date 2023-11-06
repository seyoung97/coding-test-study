// A+B
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

//풀이
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// ["1", "2"]
let line = input[0].split(" ");

let a = parseInt(line[0]);
let b = parseInt(line[1]);
console.log(a + b);

// A*B
// 문제
// 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A×B를 출력한다.

// 풀이
let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");

let line2 = input2[0].split(" ");
let c = parseInt(line2[0]);
let d = parseInt(line2[1]);

console.log(c * d);
