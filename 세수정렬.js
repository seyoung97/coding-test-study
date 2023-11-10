// 세수정렬
// 문제
// 동규는 세수를 하다가 정렬이 하고싶어졌다.
// 숫자 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고싶어졌다.
// 숫자 세 개가 주어졌을 때, 가장 작으 수, 그 다음 수 가장 큰 수를 출력하는 프로그램을 작성하시오

// 입력
// 숫자 세 개가 주어진다. 이 숫자는 1보다 크거나 같고, 1,000,000보다 작거나 같다. 이 숫자는 모두 다르다.

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 각각의 정수 데이터가 들어있는 배열 만들기
let arr = input[0].split(" ").map(Number);

// 오름차순 정렬 수행
arr.sort(function (a, b) {
  return a - b;
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " ";
}

console.log(answer);

// 다른 풀이
// 선택 정렬 함수 사용
function selectionSort(array) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    let temp = arr[i]; // 스와프
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

selectionSort(arr);

let answer2 = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " ";
}
console.log(answer2);
