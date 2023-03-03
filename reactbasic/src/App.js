/* elint-disable */
import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';

function App() {
  let user = 'sanghyun';
  // react에서 변수처럼 자료를 보관할 수 있는 state 문법
  let [count, setCount] = useState(0);
  let [counter, setCount1] = useState([0,0,0]); 
  // 변수에 들어있는 데이터 html에 넣기
  // JSX 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array([ ])
  let [title, setTitle] = useState(["DW아카데미 503호", "DW아카데미 502호", "DW아카데미 501호"]); 
  // title.map(function (title) {
  //   return <h4>[title]</h4>
  // })
  console.log(title);
  
  let [bgColor, setbgColor] = useState('');
  let [name, setName] = useState(["홍길동", "김철수", "유리"]);
  let copy3 = [...name];
  let name1 = document.querySelector(".name");
  
  // map함수가 array의 갯수만큼 return을 반복한다.
  // return 한줄일때는 () 필요 X
  // 매개변수(파라미터)를 만들어주면 함수 파라미터가 array자료 안에 있는 데이터가 된다.
  // [1,2,3].map(function(num){
  //   return console.log(num)
  // })

  // let num = [1, 2, 3, 4, 5];
  // let newNum = num.map((num) => num + 1)
  // console.log(num);
  // console.log(newNum);

  // let num1 = [1,2,3,4,5];
  // let newNum1 =  num1.map((num) => num * 3)
  // console.log(num1);
  // console.log(newNum1);

  let arr = [1,2,3,4,5];
  let newArr = arr.map(function(element){
    return element * 3
  })
  console.log(newArr);

  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 3;
  }

  console.log(arr);

  return (
    <div className="App" style={{ backgroundColor: bgColor ? "red" : "" }}>
      <h1>Hey! {user}!</h1>
      <p>This is a React App</p>

      <div>
        <p>클릭시 + {count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>
      </div>

      {/* <div className="list">
    <h4>{title[0]}</h4>
    <span onClick={()=> {setCount1(counter + 1)}}>🤔 + {counter}</span>
    
    <button onClick={() => {
      setCount1(counter + 1);
    }}>Click Me</button>
    
    <p>안녕하세요. 저는 여상현입니다.</p>
    
  </div>

  <div className="list">
    <h4>{title[1]}</h4>
    <span onClick={()=> {setCount1(counter + 1)}}>🤔 + {counter}</span>
  
    <p>안녕하세요. 저는 여상현입니다.</p>
  </div> */}
      {/* <div className="list">
    
    <h4>{title[2]}</h4>
    <span onClick={()=> {setCount1(counter + 1)}}>🤔 + {counter}</span>
    
    <p>안녕하세요. 저는 여상현입니다.</p>
  </div> */}

    
  {/* 소문자 -> 대문자 (map) */}
    {/* { 
      ['sanghyun', 'yeo' , 'lullu'].map(function(name){
        return name.toUpperCase();
      })
    } */}

    {/* 대문자 -> 소문자 */}
    {
      ['SANGHYUN', 'YEO' , 'LULLU'].map (function(a){
        return a.toLowerCase(1);
        
      })
    }

      {title.map(function (a, i) {
       //let copy2 = [...counter];
        return (
        <div className="list" key={a}>
          {/* <h4>{a}</h4> */}
          <h4>{title[i]}</h4>
          
          <span
            onClick={() => {
              let copy2 = [...counter]
              copy2[i] +=1;
              setCount1(copy2)

            }}
          >
            
            🤔 + {counter[i]}
            
          </span>
            
          <p className="name">
          
            안녕하세요. 저는 <strong>{name[i]}</strong>입니다.
          </p>
          
        </div>
        )
      })}

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "리액트 너무 재밌어요!";
          setTitle(copy);
        }}
      >
        글제목 변경
      </button>

      <button
        onClick={() => {
          let copy1 = [...title];
          copy1 = copy1.sort();
          setTitle(copy1);
        }}
      >
        글 정렬
      </button>

      <button
        onClick={() => {
          setbgColor(!bgColor);
        }}
      >
        배경색바꾸기
      </button>
      <button onClick={() => {
        let copy3 = [...name];
        copy3 = ["짱구", "맹구", "훈이"]
        setName(copy3);
        
      }}>이름변경</button>
    </div>
  );
}

export default App;