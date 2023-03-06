/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import State from './component/State'
import {useState} from 'react'
import Box from './component/Box'

function App() {
  // State라는거에 반응하기 때문에 react
  // react는 변수 값이 업데이트 됐다고 UI를 재렌더링 하지 않는다.
  // State가 변경 되었을 때만 UI를 재렌더링 한다.

  let num = 0;

  // useState
  // 1. import {useState} from 'react'
  // state를 사용하기 위해서 react에서 useState를 데려온다.
  // useState => 리액트에서 제공하는 함수 중 하나 (훅)
  // useState 함수가 무엇을 리턴하느냐
  // 아이템이 2개 들어있는 배열(Array)
  // 1.초기값을 담고있는 State 변수
  // 2.state값을 변경할 수 있도록 도와주는 set함수
  // 이 두가지 값을 배열로 리턴한다.
  // state를 변수처럼 사용하면 안되고, 값을 변경할 때는 변경함수를 호출하고 
  // 값을 그 안에 집어 넣어야 한다.
  const [count, setCount] = useState(0)
  let increase = () => {
    num = num + 1;
    setCount(count + 1)
    // state값이 업데이트 될 때 마다 function App을 다시 실행시키면서 변경된 UI를 업데이트
    // 변수는 값을 저장하지 않고 함수가 재호출 될 때 마다 초기화 된다.
    console.log("num", num, "state", count)
    console.log(count)
  }

  // console.log 두 개 찍히는 이유
  // App.js에 작성한 내용은 index.js를 거쳐서 'root'라는 아이디 값을 div에 그려진다.
  // StrictMode
  // 리액트로 개발할 때, 잠재적인 문제가 있는 지 검사 해주는 모드
  // StrictMode 스스로 문제점을 찾아주는건 아니지만,
  // 문제가 될 수 있는 함수를 두 번 실행해서 쉽게 문제를 찾을 수 있게 도와주는 역할
  // index.js => index.html파일과 App.js 파일을 연결해주는 연결 고리
  let a = 123;
  console.log(a);

  // State의 값 번영이 한 반자씩 늦는 이유
  // State값이 함수가 호출 될 때 바로 변경 값을 실행 하는 게 아니라 
  // 변경 되어야 하는 set함수들을 싹 모아서 함수가 끝나고나서 한 번에 처리한다. (비동기적) 
  // State 주의할 점 

  // State는 기존 값을 잃어버리지 않고 기억하고 있다.
  let num1 = [1,2,3,4];
  let name = ['짱구', '맹구', '철수', ' 훈이']

  return (  
    <div className='App'>
        {/* <Box num="1" name="짱구"/>
        <Box num="2" name="철수"/>
        <Box num="3" name="유리"/>
        <Box num="4" name="맹구"/> */}
      {
      name.map(function(a,i){
        return (
          <div className='box' key={i}>
        <h1>Box{num1[i]}</h1>
        <h2>{name[i]}</h2>
    </div>
        )
      })
    }  
    </div>
    
  );
    
}

export default App;