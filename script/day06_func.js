//함수
//DOM.addEventListener('이벤트',function(){실행결과})
//기본문법(아래)
//function 함수명() {재사용문법}
//자판기 함수 : 무조건 콜라1개가 나오는 자판기
//함수는 생성, 호출을 개별로 진행해야 한다.
function japangi(){
    console.log('콜라 1개 나왔습니다.')
}
japangi() // 호출(생성된 함수명 작성)
const orderBtn = document.querySelector('#order')
console.log(orderBtn)
//DOM 이벤트로 함수 호출 시 함수명만 작성한다. (괄호없이)
// orderBtn.addEventListener('click',japangi)
orderBtn.addEventListener('click', function(){
    console.log('1000원 입금')
    japangi() //함수(function)안에 쓸 경우 함수명 옆에 괄호 써야함
})

// 함수 = 재사용되는 js문법을 감싸서 쉽게 호출하는 기능
// 매개변수 = 재사용되는 함수 내에 변경되는 데이터가 있을 경우
//function 생성함수명(생성매개변수명){재사용문법}
function japangi2(drink){
    console.log(drink+'1개 나왔습니다!')
}
//매개변수가 있는 함수를 호출할 경우
//호출함수 괄호안에는 매개변수에 삽입할 데이터를 작성한다.
japangi2('사이다')
japangi2('콜라')

console.log('----------------------------yoga')
const orderBtn2=document.querySelector('#order2')
console.log(orderBtn2)
function yoga(pd){
    console.log(pd+'1개를 주문하셨습니다.')
}
yoga('레깅스')
yoga('요가매트')
orderBtn2.addEventListener('click',function(){
    yoga('레깅스')
})
console.log('----------------------------')
//사이다 1개 나왔습니다
//콜라 2개 나왔습니다
//사이다 3개 나왔습니다
//function 함수명(매개변수, 매개변수) {}
function japangi3(drink, num){
    console.log(drink+num+'개 나왔습니다.')
}
japangi3('사이다','1')
japangi3('콜라','2')
japangi3('사이다','3')
console.log('----------------------적금')
//4주 자유적금 통장
//초기금액 = 10,000원
//함수호출메세지 >> ?원 입금했습니다. 총 잔액은 ?원 입니다.
let passBook = 10000
function week4Passbook(money){
    // let total=passBook + money <-이 방법은 매번 만원에 플러스되어 돈이 쌓이지 않음
    // console.log(total)
    passBook += money
    console.log(money+'원 입금했습니다.') //`${money}원 입금했습니다'
    console.log(`총 잔액은 ${passBook}원 입니다.`)
}
//1000원 입금했습니다. 총 잔액은 11000원 입니다.
week4Passbook(1000) 
week4Passbook(10000)
week4Passbook(5000)
week4Passbook(-5000)
console.log('----------------------------구구단')
//구구단 2단 ~9단까지 함수 제작하기
function dan99(dan){
    console.log(`${dan}X1=${dan*1}`)
    console.log(`${dan}X2=${dan*2}`)
    console.log(`${dan}X3=${dan*3}`)
    console.log(`${dan}X4=${dan*4}`)
    console.log(`${dan}X5=${dan*5}`)
    console.log(`${dan}X6=${dan*6}`)
    console.log(`${dan}X7=${dan*7}`)
    console.log(`${dan}X8=${dan*8}`)
    console.log(`${dan}X9=${dan*9}`)
    console.log('--------------------')
}
dan99(8)
dan99(3)
// dan99(4)
// dan99(5)
// dan99(6)
// dan99(7)
// dan99(8)
// dan99(9)




