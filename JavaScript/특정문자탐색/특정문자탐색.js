function question(a, n) {
  // 여기에서 코드 작성해주세요!
  let result = 0;
  for(let i=0; i < a.length; i++){
    if(a[i] === n) {
      result++;
    }
  }
  return result;
}


/*  function question(a, n) {
      let result = 0; // n과 일치하는 문자의 개수를 저장할 변수 초기화

      for (let i = 0; i < a.length; i++) { // 주어진 배열 a의 각 요소를 반복하여 확인
        if (a[i] === n) { // 현재 인덱스의 요소가 n과 일치하는지 확인
          result++; // 일치한다면 결과값 변수를 1 증가시킴
        }
      }
      return result; // n과 일치하는 문자의 개수 반환
} */




// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
  question,
  [
      [['h', 'a', 'p', 'p', 'y'], 'p'],
      [['h', 'e', 'l', 'l', 'o'], 'o'],
      [['c', 'h', 'r', 'i', 's', 't', 'm', 'a', 's'], 'a'],
      [['네', '잎', '클', '로', '버', '로', '버', '오', '버'], '버'],
  ],
  [2, 1, 1, 3]
);

function Test(question, conditions, results) {
  for (let index in results) {
      const result = Array.isArray(results[index])
          ? JSON.stringify([question(...conditions[index])]) === JSON.stringify(results[index])
          : question(...conditions[index]) === results[index];
      console.log(`테스트 ${+index + 1}`, result);
      if (!result) {
          console.log('테스트에 통과하지 못했습니다.');
          return;
      }
  }

  console.log('테스트에 통과하셨습니다!');
}