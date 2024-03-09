import React from 'react';
//기초 틀(형식)

//children 문법 : 컴포넌트 내부에 포함된 JSX요소들을 가리키는 속성


function Template({children, todoLength}) {
  return (
    <div className='Template'>
        <div className='title'>오늘의 할일 {todoLength}</div>
        {/* todoLength : 오늘의 할일 개수 */}
        <div>{children}</div>
        {/* 에버노트 참조 */}
    </div>
  )
}

export default Template;