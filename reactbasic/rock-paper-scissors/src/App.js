import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Box from './component/Box'

// 객체는 key : value 형태로 작성한다.
// value로 여러개의 프로퍼티를 가질 수 있다.
// 프로퍼티 : key : value 쌍
const choice = {
  scissors : {
    name : "Scissors",
    img : "http://isweb.joongbu.ac.kr/~jgm/photo/sissor.jpeg",
  },
  rock : {
    name : "Rock",
    img : "http://isweb.joongbu.ac.kr/~jgm/photo/rock.jpeg",
  },
  paper : {
    name : "Paper",
    img : "http://isweb.joongbu.ac.kr/~jgm/photo/paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("")

  const play = (userChoice) => {
    console.log(userChoice, "선택됨!")
    setUserSelect(choice[userChoice])

    // randomChoice()함수를 실행했을 때 결과값
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice)

    // 1. 유저가 선택한 값
    // 2. 컴퓨터가 선택한 값
    // 두 값을 judgment함수에 매개변수로 보내준다.
    setResult(judgment(choice[userChoice], computerChoice))
  }

  const judgment= (user, computer)=> {
    // 게임 로직에 대해서 생각 해보기.
    // 어떻게 user, computer 두 값을 비교할건지?
    // user.name == computer.name : tie
    // user.name == "rock", computer.name == "paper": user LOSE / computer WIN
    // user.name == "rock", computer.name == "scissors": user WIN / computer LOSE
    // user.name == "scissors", computer.name == "paper": user WIN / computer LOSE
    // user.name == "scissors", computer.name == "rock": user LOSE / computer WIN
    // user.name == "paper", computer.name == "rock": user WIN / computer LOSE
    // user.name == "paper", computer.name == "scissors": user LOSE / computer WIN
    if(user.name == computer.name) {
      return "tie"
    } else if (user.name == "Rock") return computer.name == "paper" ? "lose" : "win"
      else if (user.name == "Scissors") return computer.name == "paper" ? "win" : "lose"
      else if (user.name == "Paper") return computer.name == "rock" ? "win" : "lose"
  }
  

  const randomChoice= ()=> {
    // 랜덤에서 우리가 가져올 수 있는 값은 숫자
    // 이 값을 데이터랑 어떻게 연결시킬지 고민
    // 배열의 인덱스 번호를 랜덤으로 선택되게 구현

    // 객체에서 인덱스를 번호를 사용하려면 Array로 만들어야 한다.
    // 객체의 key값을 뽑아서 Array로 만들어주는 함수 Object.keys()
    let itemArray = Object.keys(choice);
    console.log(itemArray)

    // 0부터 1사이에 있는 랜덤한 값을 반환한다.
    // Math.floor 소수점 아래를 버리는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length)
    console.log(randomItem)

    let final = itemArray[randomItem];
    return choice[final]
  }
  return (
    <div className="App">
      <div className="box-list">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='btn-list'>
        {/* play함수한테 매개변수로 값을 전달한다
            리액트에서는 play() UI를 그려줄 때 해당 함수를 실행 시킨다.
            onClick시 실행되게 하고 싶다면 콜백함수 형태로 전달해줘야 한다.
        */}
        <button onClick={()=> play("scissors")}>가위</button>
        <button onClick={()=> play("rock")}>바위</button>
        <button onClick={()=> play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;