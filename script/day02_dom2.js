// getElement.. 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents')
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a')
const firstTag = document.getElementsByClassName('first');
const lastTag = document.getElementsByClassName('last');

console.log(mainTag,hTag[0], contentsCls[0], boxId);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
console.log(firstTag, lastTag);

// [ES6]querySelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
const aTagQ = document.querySelectorAll('a');
const firstTagQ = document.querySelector('.first');
const lastTagQ = document.querySelector('.last');

console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2],)/* querySelector는 가장 첫번째로 존재하는 태그만 읽고 끝냄, 뒤에 All 키워드를 붙여주면 모두 읽음 */
console.log(firstTagQ, lastTagQ);

//hTagQ.innerHTML='q';

//querySelector, querySelectorAll
//객체가 2개 이상일때 태그 작성 순서상 한개만 인식하고 싶다면
//==querySelector()
//객체가 2개 이상일 때 모두 잡아서 구분해서 사용하고 싶다면
//==querySelectorAll()
//const firstTagQ = document.querySelector('.first');
//console.log(firstTagQ);
//const lastTagQ = document.querySelectorAll('.last');
//console.log(lastTagQ[0]);