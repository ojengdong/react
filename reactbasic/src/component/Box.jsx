import React from 'react';
import {useState} from 'react';
import './Box.css';

// 컴포넌드 생성시 주의사항
// 1. 컴포넌트의 이름은 반드시 대문자로 시작해야 한다.
// 리액트는 태그가 대문자로 시작하는지 여부로 컴포넌트랑 일반 HTML 태그를 구별한다.
// 소문자로 시작할 시 리액트는 이걸 HTML 태그로 분류하기 때문에 에러가 생길 수 있다.
// 2. 기능별로 나눠서 컴포넌트 생성 / 태스트 또는 유지보수 할 때 용이함.
// 3. 하나의 컴포넌트에 이것저것 여러가지 기능을 담기 보다는 
// 한 컴포넌트에는 하나의 기능만 있는 게 좋다

// 컴포넌드틀 나누는 절대적인 기준은 없다.
// 코드를 직접 짜면서 본인만의 기준을 만드는게 좋음
const Box = (props) => {
  return (
    <div className='box'>
        <h1>Box{props.num}</h1>
        <h2>{props.name}</h2>
    </div>
  )
}


export default Box