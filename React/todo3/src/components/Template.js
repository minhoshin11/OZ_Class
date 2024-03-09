import React from 'react';
//기초 틀(형식)

//children 문법 : 컴포넌트 내부에 포함된 JSX요소들을 가리키는 속성
//children -> a로 바꾸면 나타나지 않음.


function Template({children, todoLength}) {
  return (
    <div className='Template'>
        <div className='title'>오늘의 할일 {todoLength}</div>
        <div>{children}</div>
    </div>
  )
}

export default Template;