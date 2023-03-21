import React from 'react'
import { useState } from 'react'

const Box = (props) => {
    let result;
    if(
        // props.title이 "Computer"라면
        // props.result "tie"가 아닐 경우
        // props.result가 빈 문자열이 아닌경우
        props.title === "Computer" &&
        props.result !== "tie" && 
        props.result !== ""
    ) {
        // result라는 변수한테 값이 "win"이면 : "lose",
        // "lose"면 "win"으로 변경한 값을 result에 할당한다.
        result = props.result === "win" ? "lose" : "win"
    } else {
        // 위의 경우가 아니라면
        result = props.result;
    }
    console.log(props)
  return (
    <div className={`Box ${result}`}>
        <h1>{props.title}</h1>``
        <h2>{props.item &&props.item.name}</h2>
        {/* 해결방법: 조건문 렌더링
            유저가 버튼을 클릭했을 때 useState값이 들어오고,
            값이 변경되면서  item이 img를 그려야 한는데,
            초기값이 null이라 img를 보여주지 못하고 에러발생
            =>조건부 렌더링으로 값이 null 아닐때만 실행되게 한다.

            없을 때 에러뜨는 이유 : 리액트 컴포넌트는 UI를 리턴할 때
            보여주고자 하는 값이 없다면 에러를 일으킨다.
            item 값이 null 아니라면 우항의 값을 렌더링 한다.
            item값이 null이라면 false를 리턴하니까 우항이 실행되지 않는다.(렌더링X)
         */} 
        <img src={props.item && props.item.img} alt="바위" />
        <h2>{result}</h2>
    </div>
  )
}

export default Box