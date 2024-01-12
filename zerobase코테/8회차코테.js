// 문제 01
// 문자열 s가 있습니다. 이 문자열의 중복된 단어를 제외한 단어수를 출력하는 함수, solution을 완성해주세요.
// 예를 들어, s `Hello world Nice world`가 있을 때,
// 단어는 'Hello', 'world', 'Nice', 'world' 이며
// 중복을 제외한 단어는 'Hello', 'world', 'Nice'로 결과는 3입니다.

// 제한 사항
// 단어는 공백(` `)으로 구분되어 있습니다.

// 입력 형식
// s는 길이가 1 이상 1,000 이하인 문자열입니다.
// s는 영어 대, 소문자와 공백(` `)으로 이루어져 있습니다.

// 출력 형식
// 중복을 제외한 단어수를 출력합니다.

// 핵심 아이디어
// set으로 중복 제거

// 풀이
function solution(s) {
  let answer = 0;
  let arr = s.split(" ");
  let set = new Set(arr);
  answer = set.size;
  return answer;
}

let s = `Hello world Nice world`;
console.log(solution(s));

// 문제 02
// 1차원 숫자 배열 arr1, arr2가 주어집니다.
// 두 배열에서 중복으로 존재하는 숫자들을 오름차순 배열로 출력하는 함수, solution을 완성해주세요.

// 입력 형식
// arr1, arr2는 길이가 1 이상 100 이하의 배열입니다.
// arr1, arr2는 1 이상 100 이하의 정수로 이루어져 있습니다.

// 출력 형식
// 두 배열에서 중복으로 존재하는 숫자들을 반환합니다.

// 핵심 아이디어
// 투포인터

// set으로 중복 확인하는 방법

// 풀이
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return answer;
}

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));

// 문제 03
// SNS에서 서로가 팔로우를 했다는 것을 '맞팔'이라고 표현합니다.
// 다음 팔로우 관계를 나타낸 배열을 통해 서로 맞팔 관계인 쌍의 수를 리턴하는 함수를 작성하세요.
// 이때 ["철수", "영희"] 라는 정보는 철수가 영희를 팔로우 했음을 나타냅니다.

// 입력
// 팔로우 관계가 표현된 String 2차원 배열 A.

// 출력
// 맞팔 관계인 쌍의 수

// 핵심 아이디어
// 해쉬

// 풀이
function countMutualFollowers(relationships) {
  // 팔로우 관계를 저장할 Map 객체를 생성
  const followersMap = new Map();
  let result = 0;

  // 주어진 팔로우 관계 배열을 순회
  for (const relationship of relationships) {
    const [follower, followee] = relationship;

    // 만약 팔로우 관계 Map에 followee가 있고, followee가 follower를 팔로우하고 있다면
    if (
      followersMap.has(followee) &&
      followersMap.get(followee).has(follower)
    ) {
      // 맞팔 관계이므로 결과를 1 증가시킴
      result++;
    } else {
      // 팔로우 관계 Map에 follower가 없다면 새로 추가
      if (!followersMap.has(follower)) {
        followersMap.set(follower, new Set());
      }

      // follower가 followee를 팔로우하도록 설정
      followersMap.get(follower).add(followee);
    }
  }

  // 맞팔 관계인 쌍의 수 반환
  return result;
}

// 예시
const relationships = [
  ["철수", "영희"],
  ["영희", "철수"],
  ["민수", "영희"],
  ["민수", "철수"],
  ["철수", "민수"],
];

console.log(countMutualFollowers(relationships)); // 출력: 3
const test = {
  철수: ["영희", "민수"],
};

// 문제 04
// 이진 힙은 항상 부모 노드가 가지는 값이 자식 노드가 가지는 값보다 크거나 (MaxHeap)
// 혹은 작다는(MinHeap) 조건을 만족하는 완전 이진 트리 형태의 자료구조입니다.
// 완전 이진 트리는 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져있으며,
// 마지막 레벨의 모든 노드는 가장 왼쪽에서부터 순서대로 나열되는 이진 트리를 말합니다.
// 이러한 이진 힙은 보통 배열을 통해서 구현하게 됩니다.
// 배열의 index 1에 루트 노드를 저장하는 것으로 시작하여 현재 노드의 index * 2에 왼쪽 자식 노드,
// 현재 노드의 index * 2 + 1에 오른쪽 자식 노드를 저장합니다.
// 예를 들어 [0, 5, 10, 15] 는 루트 정점이 5이고, 루트 정점의 왼쪽 자식과 오른쪽 자식이 10, 15인 이진 힙으로 볼 수 있습니다.
// 배열이 주어질 때, 이 배열이 MinHeap인지 아닌지 판단하는 함수, solution을 완성해주세요.

// 입력 형식
// arr은 길이가 2 이상 33 이하의 배열입니다.
// arr은 0 이상 100 이하의 정수로 구성됩니다.

// 출력 형식
// 주어진 배열이 MinHeap이면 'YES', 아니면 'NO'를 출력합니다.

// 풀이
function solution(arr) {
  let answer = "YES";
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i * 2] || arr[i] > arr[i * 2 + 1]) return "NO";
  }

  return answer;
}

let arr = [0, 5, 10, 15];

// 문제 05
// 상현이와 성민이는 낱말 게임을 하고 있습니다. 패턴을 주면 이 패턴대로 한 사람씩 돌아가면서 낱말을 말하는 게임입니다.
// 예를 들어, 주어진 패턴 p가 "가나나가" 이고, 낱말 s가 "드래곤 바나나 바나나 드래곤" 라고 가정할 때 게임의 경과는 무승부로 true를 출력합니다.
// > 한 사람이 첫 번째 패턴인 "가" 시점에 특정 낱말을 말합니다.
//   ex: "드래곤"
// > 그다음 사람은 "가" 패턴에 말한 낱말을 제외하고, 두 번째 패턴인 "나" 시점에 맞는 임의의 낱말을 말합니다.
//   ex: "바나나"
// > 그다음 사람은 세 번째 패턴인 "나" 시점에 맞는 낱말을 말합니다.
//   ex: "바나나"
// > 마지막으로 네 번째 패턴인 "가" 시점에 맞는 낱말을 말합니다.
//   ex: "드래곤"
// 패턴 p와 언급한 낱말들 s가 주어질 때, 해당 게임이 무승부로 끝났는지를 출력하는 함수, solution을 완성해주세요.

// 제한 사항
// - 각 낱말은 공백이 없는 연속된 문자열입니다.
// - s의 각 낱말은 스페이스(" ")로 구분됩니다.

// 입력 형식
// p는 길이가 4인 문자열입니다.
// s는 길이가 1 이상 1,000 이하의 문자열입니다.

// 출력 형식
// 게임의 결과가 무승부인지를 출력합니다.

// 핵심 아이디어
// 해쉬
