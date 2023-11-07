// 최소 최대
// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다.
// 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.모든 정수는 - 1, 000, 000보다 크거나 같고,
// 1, 000, 000보다 작거나 같은 정수이다.

// 핵심 아이디어
// 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는다.
// 최댓값(max value)과 최솟값(min value) 정보를 업데이트 한다.
// 원소를 차례대로 하나씩 확인한다는 점에서 시간 복잡도 O(N)로 해결할 수 있다.

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// 모든 정수는 -1,000,000보다 크거나 같고,
// 1,000,000보다 작거나 같은 정수이다.
let minValue = 1000001; // 일단 큰 수로 초기화
let maxValue = -1000001; // 일단 작은 수로 초기화
for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i];
  if (maxValue < arr[i]) maxValue = arr[i];
}
console.log(minValue, maxValue);

// 다른 풀이
// reduce 함수 사용
let data = input[1].split(" ").map((x) => Number(x));
let minValue2 = data.reduce((a, b) => Math.min(a, b));
let maxValue2 = data.reduce((a, b) => Math.max(a, b));

console.log(minValue2 + " " + maxValue2);

// 최댓값
// 문제
// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
// 예를 들어, 서로 다른 9개의 자연수
// 3, 29, 38, 12, 57, 74, 40, 85, 61
// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// 입력
// 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

// 핵심 아이디어
// 배열의 원소를 하나씩 확인하여, 최댓값과 그 인덱스를 찾는 문제
// 계속해서 가장 큰 갓ㅂ을 가지는 원소의 인덱스를 업데이트한다.
// 원소를 차례대로 하나씩 확인한단는 점에서 시간 복잡도 O(N)로 해결할 수 있다.

// 풀이
let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr2 = input2.map((x) => Number(x));
let maxValue3 = arr2.reduce((a, b) => Math.max(a, b));
let maxValueIndex = arr2.indexOf(maxValue3);
console.log(maxValue3);
console.log(maxValueIndex + 1);

// 다른 풀이
let maxIndex = 0;
let maxValue4 = 0;
for (let i = 0; i < 9; i++) {
  let data = Number(input2[i]);
  if (maxValue < data) {
    maxValue4 = data;
    maxIndex = i;
  }
}

console.log(maxValue4);
console.log(maxIndex + 1);

// 나머지
// 문제
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다.
// 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다.
// 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다.
// 이 숫자는 1, 000보다 작거나 같고, 음이 아닌 정수이다.

// 핵심 아이디어
// 각 원소를 하나씩 확인하며, 42로 나눈 나머지를 차례대로 출력한다
// 중복되지 않는 자료를 답기 적합한 집합자료형을 사용

// 풀이
let fs = require("fs");
let input3 = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr3 = input3.map((x) => Number(x));
let mySet = new Set(); // 집합 객체 생성

// 원소를 하나씩 확인
for (let i = 0; i < 10; i++) {
  mySet.add(arr3[i] % 42); // 42로 나눈 나머지를 집합의 원소로 삽입
}

// 집합에 포함된 원소의 개수 출력
console.log(mySet.size);
