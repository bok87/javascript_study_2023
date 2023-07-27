// 객체구분 > 변수생성 > 변수활용 속성, 이벤트, 메서드
// ------------------ getElement 객체방법
const ulWrap = document.getElementById('wrap');
const liTag = document.getElementsByTagName('li');
const aTag = document.getElementsByTagName('a');
// ------------------ queryselector 객체방법
const ulWrapQ = document.querySelector('#wrap');
const liTagQ = document.querySelectorAll('li');
const aTagQ = document.querySelectorAll('a');
// const aTagQ = document.querySelectorAll('#wrap a') wrap 안의 a (쿼리만가능 겟엘리먼트불가능)
const aTagQ1 =document.querySelector('#wrap a:nth-child(1)'); 
// hover는 못씀
// ------------------ 변수 정상출력확인
console.log(ulWrap,ulWrapQ,liTag,aTagQ1);
console.log(liTag[0], liTag[1], liTag[2], liTag[3]);
console.log(liTagQ, liTagQ[0], liTagQ[1], liTagQ[2], liTagQ[3]);
console.log(aTag, aTag[0], aTag[1], aTag[2], aTag[3]);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2], aTagQ[3]);
//---------------------------------------------------------
console.log('------------------------------------------');
console.log('li태그 변수 값은'+liTagQ[0]+'입니다!');
console.log('1+1='+(1+1));
console.log('7X4='+(7*4));
console.log(`1+1=${1+1}`); //template 문자열 방식
console.log(`7X4=${7*4}`);
console.log(`li태그 변수 값은 ${liTagQ[0]}입니다!`)