// dom == document(body라고 생각하면 됨) object model
// 자바스크립트 = 객체지향언어
// bom = browser object modle 웹브라우저의 기본 객체
let hello = 'hello js';
// window.alert(hello); /* 팝업창 띄우기 */
//let qa = window.prompt('1+1?'); /* 텍스트입력할수있는 팝업창 */
//window.alert('정답은'+qa+ '입니다.'); /* 동시에 적용되지않음 단계별로 적용 */
//let ox = window.confirm('자바스크립트는 객체지향언어다.');
// 확인=true(참), 취소=false(거짓)
//window.alert(ox);

//객체.속성
//객체.메서드()
//객체.속성.메서드()

//아이디 객체 변수 대입하기
//변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1'); // = 객체. 메소드()->문자는 ''안에
const loginBtn = document.getElementById('login');
const payBtn = document.getElementById('pay');
const price = document.getElementById('price');
console.log(btn1);
btn1.style.color = 'red';
btn1.style.background='linear-gradient(yellow,white)';
console.log(loginBtn);
console.log(payBtn);
console.log(price);

//클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first'); //id는 Element class는 Elements로 s를 붙인다.
const li_second = document.getElementsByClassName('second');
const li_last = document.getElementsByClassName('last');
//const li_last = document.getElementsByClassName('last')[0]; 변수 자체에 붙일수도 있음
console.log(li_first, li_second, li_last);
console.log(li_first[0]);
console.log(li_first[1]);

//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const aTag = document.getElementsByTagName('a');
console.log(header,h1,nav,aTag);
console.log(aTag[0]);

//innerHTML 속성 활용
//객체.속성 // 읽기
//객체.속성 = 대입값 // 수정or삭제
console.log(header.innerHTML) //undefined (정의하지 않는다= 파일이 존재하지 않는다) 
//Collection 으로 잡혀있을때는 순서를 정확히 해줘야한다.
console.log(header[0].innerHTML); //자식, 자손 읽기
console.log(h1[0].innerHTML);
console.log(nav[0].innerHTML);
console.log(aTag[0].innerHTML);
console.log(aTag[1].innerHTML);
console.log(aTag[2].innerHTML);
//console.log(ul[0].innerHTML);           ?
console.log(li_first[0].innerHTML);
console.log(li_first[1].innerHTML);
console.log(li_second[0].innerHTML);
console.log(li_last[0].innerHTML);
console.log(btn1.innerHTML); /* id는 순서 쓰지않는다 (하나밖에 없기때문에) */
console.log(loginBtn.innerHTML);
console.log(payBtn.innerHTML);
console.log(price.innerHTML);

h1[0].innerHTML ='로<br>고';
btn1.innerHTML = '전송';
aTag[2].innerHTML = ''; //빈문자열==문자열을 비운다.(삭제)
payBtn.innerHTML = 'PAY';

nav[0].style.backgroundColor ='aqua';
nav[0].style.border ='2px solid black';
h1[0].style.transform = 'rotate(10deg)';
loginBtn.style.filter = 'blur(1px) grayscale(100%)';

