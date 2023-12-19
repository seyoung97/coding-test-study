// 두 배열 합치기
// 문제
// 오름차순으로 정렬이 된 두 배열이 주어지면
// 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

// 입력
// 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
// 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

// 입력 예제
// 3
// 1 3 5
// 5
// 2 3 6 7 9

// 핵심 아이디어
// 투포인터 알고리즘

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    // arr1이나 arr2가 탐색이 끝나면 거짓이 돼서 끝나도록 조건 검
    if (arr1[p1] <= arr[p2]) {
      answer.push(arr1[p1++]); // arr[p1]을 push한 후에 p1++한다는 의미임
    } else {
      answer.push(arr2[p2++]);
    }
  }
  while (p1 < n) {
    // arr1이 남은 경우
    answer.push(arr1[p1++]);
  }
  while (p2 < m) {
    // arr2이 남은 경우
    answer.push(arr2[p2++]);
  }
  return answer;
}
