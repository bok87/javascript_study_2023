//전역변수, 지역변수 (함수 내/외부 생성한 변수 위치 차이)
let b = 20 //전역변수 b,c = 함수 바깥에서 생성된 변수 
let c = 30 //전역변수 함수 내, 외 모두 사용가능하다.(집 밖, 안 모두 살 수 있음)
function test (){    //지역변수 = 함수 내에서 생성된 변수 (지역=집)
    let a= 10        //지역변수 함수 내에서만 사용할 수 있다. (집 안에서만 살아갈 수 있다)
    console.log(a+b) // b는 집에 들어와도 살 수 있음
}
test()             
// console.log(a)  //지역변수를 함수 바깥에서 사용 시 에러발생 (a는 집밖으로 나와서 죽음)
// console.log(a+b)
console.log(b+c)
console.log('--------------------')
//조건문 - 논리데이터 참(true), 거짓(false)
let num1 = 5
let num2 = 7
let num3 = '5'
console.log(num1==num2) //false (1과2가 같다)
console.log(num1 < num2) //true (1이 2보다 작다)
console.log(num1==num3) //true (데이터타입 구분 X)
console.log(num1===num3) //false (데이터타입까지 구분 O)
console.log(num1!==num3) //true (!=서로 다르면 참), '='을 한번 더써서 데이터타입까지 구분 )
console.log(num1>=num2) //false 
console.log(num1<=num2) //true
console.log('--------------------')
//조건문
//if(조건식){조건식이 참일 때 실행결과} 조건식종료
//상황1. 주말에 날씨가 좋으면 등산가자! (조건-날씨가좋으면/참일때 등산가자!, 거짓일때 조건식종료)
let weather = ['비', '맑음', '흐림']
if (weather[0]==='맑음'){
    console.log('등산을 가자!')
}
console.log('--------------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true){console.log('실행1')} // O d가 true이면서 데이터조건도 일치하면 실행1 출력
if(f>10){console.log('실행2')} // X f가 10보다 크면 실행2 출력
if(g<=20){console.log('실행3')} // O g가 20보다 같거나 작으면 실행3 출력
if(e!==true){console.log('실행4')} // O e가 true와 다르면서 데이터조건도 다르면 실행4 출력
console.log('--------------------')
//관리자만 접속할 수 있는 페이지 만들기
//관리자 아이디일 경우만 접속가능(접속 후 인사말 출력)
/* const userId =  window.prompt('아이디를 입력하세요')
if(userId === 'admin'){
    window.alert('관리자님 환영합니다.')
} */
//사용자의 나이를 입력받고 10살 이하라면 '놀이기구 탑승불가'
// const userAge = window.prompt('나이를 입력하세요')
/* const userAge = Number(window.prompt('나이를 입력하세요'))
if (userAge<=10){
    window.alert('놀이기구 탑승불가')
} */
const userPrint = window.confirm('인쇄할까요?')
if(userPrint === true){
    window.print()
}
