let a = 10
let b = '10'
let total = a+b
//암시적 형변환(자바스트립트가 자동으로 데이터 형 변환(기본))
console.log(`total >> ${total}`)
console.log(`${typeof(a)}+${typeof(b)}=${typeof(a+b)}`) //데이터 타입을 알려줌
console.log('------------------------------------')
//명시적 형변환(문자>숫자, 숫자>문자)/ 직접 형변환
console.log(`b=${typeof(b)}, b+1=${b+1}`)
//Number() == 형변환메소드
//괄호안에 작성한 데이터를 숫자 데이터로 변환
//메서드를 사용할 때만 일회성으로 인식
//일회성의 불편함을 해소하기 위해 다른 변수에 대입
console.log(`b=${typeof(Number(b))}, ${typeof(b)}`)
let c = Number(b)
console.log(`c= ${typeof(c)}, c=${c}, a+c=${a+c} `)
console.log('------------------------------')
/* const d = window.prompt(`1+1=?`)
console.log(`d = ${d}, ${typeof(d)}`) */
//다른 메서드를 괄호안에 넣어서 사용할 수 있다
console.log('---------------------------')
const user = document.querySelector('#user')
const btn = document.querySelector('#result')
console.log(user,btn) //DOM 두개만 출력(태그)
//동작 이벤트 없이 input의 값 확인은 초기값 인식
//input value 값은
//숫자 데이터를 입력해도 문자 데이터로 자동 암시적 형 변환된다
user.value = 1234 //초기값 대입
console.log(`user typeof = ${typeof(user.value)}`)
console.log(`user value = ${user.value}`)

let userNumber = Number(user.value) //숫자로 형변환한 user 값
console.log(`userNumber type = ${typeof(userNumber)}`)
console.log(`userNumber value = ${userNumber}`)
//버튼 클릭시 기준 input의 현제 값을 파악한 후 결과출력
/* btn.addEventListener('click', function(){
    userNumber = Number(user.value)
    console.log(`userNumber type = ${typeof(userNumber)}`)
    console.log(`userNumber value = ${userNumber}`)
    //버튼 클릭시 input 값에 +1 결과 콘솔 출력
    console.log(`userNumber + 1 = ${userNumber + 1}`)
}) */

//구구단 풀이
console.log('구구단-----------------------------')
const dan2 = document.querySelector('#dan2')
const calc = document.querySelector('#calc')
const result = document.querySelector('#result')
const test = document.querySelector('#test')
console.log(dan2, calc, result)
console.log(typeof(dan2.value), typeof(calc.value))
console.log(`2*2= ${'2'*'2'}, 2+2= ${'2'+'2'}`) // 결과 4, 22
//자바스크립트는 +는 문자열로 나오고 나머지 산수는 숫자로 변환 돼 결과가 출력된다.
test.addEventListener('click', function(){
    let first = Number(dan2.value)
    let last = Number(calc.value)
    console.log(first*last)
    result.value = frist*last
})