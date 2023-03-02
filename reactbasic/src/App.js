/* elint-disable */
import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';

function App() {
  let user = 'sanghyun';
  // react에서 변수처럼 자료를 보관할 수 있는 state 문법
  let [count, setCount] = useState(0);
  let [counter, setCount1] = useState(0); 
  // 변수에 들어있는 데이터 html에 넣기
  // JSX 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array[ ]
  let [title, setTitle] = useState(["DW아카데미 503호", "DW아카데미 502호", "DW아카데미 501호"]); 

  return <div className="App">
    <h1>Hello! {user}!</h1>
  <p>This is a React App</p>

  <div>
    <p>클릭시 + {count}</p>
    <button onClick={()=>{
      setCount(count + 1);
    }}>Click Me</button>
  </div>

  <div className="list">
    <h4>{title[0]}</h4>
    <span onClick={()=> {setCount1(counter + 1)}}>🤔 + {counter}</span>
    
    {/* <button onClick={() => {
      setCount1(counter + 1);
    }}>Click Me</button> */}
    
    <p>안녕하세요. 저는 여상현입니다.</p>
  </div>

  <div className="list">
    <h4>{title[1]}</h4>
    <span onClick={()=> {setCount1(counter + 1)}}>🤔 + {counter}</span>
  
    <p>안녕하세요. 저는 여상현입니다.</p>
  </div>

  <div className="list">
    <h4>{title[2]}</h4>
    <span onClick={()=> {setCount1(counter + 1)}}>🤔 + {counter}</span>
    
    <p>안녕하세요. 저는 여상현입니다.</p>
  </div>

  <button onClick={()=> {
    let copy = [...title];
    copy[0] = "리액트 너무 재밌어요!"
    setTitle(copy);
  }}>글제목 변경</button>

  <button onClick={()=> {
    let copy1 =[...title];
    copy1 = copy1.sort();
    setTitle(copy1);
  }}>글 정렬</button>
  </div>
}

export default App;