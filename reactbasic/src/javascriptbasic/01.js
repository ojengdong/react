// Object shorthand Assingment
// ES6에서는 객체를 반환할 때 불필요한 반복을 하지 않아도 된다.
let name = 'sanghyun';
let age = 26;

let person = {
    name : name,
    age : age
}
console.log(person);

// 단축 표기법
// 키와 키값에 들어가는 변수의 이름이 같다면, 생략하고 한번만 작성해도 된다.
// 키와 벨류 값이 일치할 때만 줄여서 사용 가능
// 키 이름을 선언된 값이 있다면 velue가 생략되어도 값을 매칭 해준다.
let person2 = {
    name,
    age
}
console.log(person2);