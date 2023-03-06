// Destructuring
// 구조를 분해한다
// 객체를 분해해서 값을 가져온다.
let person = {
    name : 'sanghyun',
    age : 26
}

// name이랑 age라는 값을 변수로 뽑아서 콘솔로그
// 옛날 문법 
// let name = person.name;
// let age = person.age;
// let name1 = person['name'];
// let age1 = person['age'];
// console.log(name,age);
// console.log(name1,age1);

// 단축표기법 
// 변수 선언 후 먼저 객체를 써놓고 그 안에 내가 가져오고 싶은 key값을 입력
// person이라는 객체에서 name과 age라는 key값을 분해한 값을 let으로 선언한 변수로 만든다.
let {name, age} = person;
console.log(name, age);

// 어떤 객체안에서 가져오고 싶은 key 값을 멘션하면 그 key값을 이름으로 변수 생성
// 그 변수 안에 key값이 할당된다.
// 이 문법은 array[배열]에서도 동일하게 적용된다.

// Array(State에서 사용하는 문법)
let arr = [1,2,3,4,5];
// a와 b라는 변수가 생성되고, a랑 b에는 배열의 순서대로
// a에는 배열의 0번째 값, b에는 배열의 1값이 들어간다.
// let [a,b] = arr;
// console.log(a,b);

// 배열 안에 나머지 값 가져오기
// ...rest
// 배열 안에서 원하는 값을 뽑아낸 후 나머지 값을 저장하고 싶을 때 사용 
// rest대신에 다른 이름을 사용 상관없다.
// 변수 앞에 '...' 변수가 가장 마지막에 위치해야 한다.
// 구조 분해 할당
let[a,b,...rest] = arr;
console.log(rest)