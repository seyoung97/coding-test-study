// 코로나
// 문제
// 코로나로 인해 건물에 출입하는 인원의 시간을 체크하고 있습니다.
// 출입 기록인 history에는 출입한 사람의 번호 배열이 저장되어 있습니다.
// history에는 건물에 들어올 때에는 양수가, 나갈 때에는 음수가 기록됩니다.
// 이때, 확진자 번호 infected가 주어질 때, 확진자와 동선이 겹치는 사람의 번호를 오름차순으로 출력하는 함수, solution을 완성해주세요.
// 예를 들어, history가 [3, 2, -3, 1, -1, -2, 4, -4, 1, -1]이고,
// infected가 2로 주어질 때, 확진자와 동선이 겹치는 사람은[1, 3]입니다.

// 핵심 아이디어
// set으로 중복방지
// forEach로 배열의 각 요소를 검사
// sort함수로 정렬

// 풀이
function solution(history, infected) {
  let answer = new Set();
  // 현재 건물에 있는 사람의 번호를 저장하기 위한 Set 객체
  let current = new Set();
  history.forEach((person) => {
    // 만약 출입 기록이 음수라면(나갈 때)
    if (person < 0) {
      // 해당 번호의 양수 버전을 현재(current)에서 삭제
      current.delete(-person);
    } else {
      // 출입 기록이 양수라면(들어올 때)
      // 해당 번호를 현재(current)에 추가
      current.add(person);
    }
    if (current.has(infected)) {
      current.forEach((p) => {
        if (p !== infected) {
          answer.add(p);
        }
      });
    }
  });
  return [...answer].sort((a, b) => a - b);
}

let history = [3, 2, -3, 1, -1, -2, 4, -4, 1, -1];
let infected = 2;

// First appear twice
// 문제
// 문자열 s가 주어질 때, 문자열에서 제일 처음으로 두 번 등장하는 문자를 출력하는 함수, solution을 완성해주세요.
// 예를 들어 문자열 s "google"이 주어질 때, 제일 처음으로 두 번 등장하는 문자는 'o'입니다.

// 핵심 아이디어
// Map 객체 활용하여 어떤 문자가 처음으로 두번 등장하는지 판별

// 풀이
function solution(s) {
  const map = new Map();

  for (const c of s) {
    if (!map.has(c)) {
      // 만약 Map에 해당 문자가 없다면
      map.set(c, true);
    } else {
      // Map에 해당 문자가 이미 존재한다면, 즉, 두 번째 등장한 문자를 찾았다면
      // 해당 문자를 반환하고 함수 종료
      return c;
    }
  }

  return "";
}

// most closest number to zero
// 문제
// 숫자 배열 arr가 주어집니다. 이 중 0에서 가장 가까운 값을 구하는 함수, solution을 완성해주세요.

// 핵심 아이디어
// Math.abs()메서드로 절대값으로 만든다음 문제 해결

// 풀이
function solution(arr) {
  // 배열의 첫 번째 원소를 초기값으로 설정
  let closestValue = arr[0];

  // 배열을 순회하면서 0에 가장 가까운 값을 찾음
  for (let i = 1; i < arr.length; i++) {
    // 현재 원소와 현재까지의 최솟값과 0 사이의 거리를 비교
    if (Math.abs(arr[i]) < Math.abs(closestValue)) {
      closestValue = arr[i];
    }
  }

  return closestValue;
}

// 예시
let arr = [2, -7, 5, -3, 1];
console.log(solution(arr)); // 결과: 1

// 다른 풀이
function solution(arr) {
  let result = null;
  arr.forEach((num) => {
    if (result === null || num < result) {
      result = num;
    }
  });

  return result;
}

// Nth canceled order
// 문제
// 온라인으로 주문을 받고 있습니다. 주문 번호는 주문 순서대로 1부터 증가합니다.
// 일부 주문이 취소된 주문 내역이 주어질 경우, n번째 주문 취소된 주문 번호를 구하는 함수, solution을 완성해주세요.
// 예를 들어, 주문 내역 orders [2, 4, 5, 7]이 있고, 3번째 취소된 주문 번호는 6입니다.
// > 1번째 취소 주문 번호는 1
// > 2번째 취소 주문 번호는 3
// > 3번째 취소 주문 번호는 6

// 풀이
function solution(orders, n) {
  let missCount = 0;
  let num = 0;
  let i = 0;
  while (missCount !== n) {
    num++;

    if (orders[i] === num) {
      i++;
    } else {
      missCount++;
    }
  }
  return num;
}
