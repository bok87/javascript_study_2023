/*






func1('a1234')
func1('abc1234') //호출
console.log('---------------')
//함수 기능: 리턴(return) 함수결과값 외부로 반환명령
/* function func2(a){
//     console.log(a+1)
// }
// function func3(a){
//     wondow.alert(a+1) 
}  //불필요한 함수를 두번써야해서 아래의 방법으로 한다
function func2(a){
    return a+1 //리턴활용 함수 결과값만 외부로 반환
}
func2(50) //함수결과값을 출력하는 메서드가 없어 출력x
console.log(func2(50))//함수결과를 호출앞 메서드가 출력o
window.alert(func2(100))
document.write(func2(10)) */
console.log('--------------------')
function func3(a,b){
    return a*b //함수 내 return 1개만 존재
}
console.log(func3(10,20))
console.log(func3(2,3))
console.log('--------------------')
let total = 0
function func4(a){
    total =a
    total++ //return 앞에있기때문에 실행됨
    return total //보통은 맨 마지막에 리턴을 작성, 어떤 조건을 제외하고 실행하고싶을때 중간에 작성
    //total++ //return 뒤에 있는 js는 실행하지 못한다. (리턴에서 외부로 값을 뺴버렸기때문에)
}
console.log(func4(20))
console.log('--------------------')
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 // num1=30 num2=20 ->10+20=30
    console.log(num1,num2)
    num2 = a+b // num2=6 a=2 b=4 ->20제거,2+4=6
    console.log(num2, a, b)
    num1 += num2 // num1=36 num2=6 ->30+6=36
    console.log(num1,num2)
    return num1 //36 외부반환, 마지막 값의 num1을 빼온다
}
console.log(func5(2,4)) // 함수호출,  return num1=36, return num2=6
console.log('--------------------')
function func5(a,b){ //36 6
    num1 += num2 // num1=42 num2=6
    console.log(num1,num2)
    num2 = a+b // num2=6 a=2 b=4
    console.log(num2, a, b)
    num1 += num2 // num1=48 num2=6
    console.log(num1,num2)
    return num2
}
console.log(func5(2,4)) // 마지막 값의 num1을 빼온다 return num1=48, return num2=6
console.log('--------------------')
const txtInput = document.querySelectorAll('.txt')
console.log(txtInput)
/* txtInput[0].addEventListener('focus', function(){
    txtInput[0].style.backgroundColor = 'aqua'
})
txtInput[1].addEventListener('focus', function(){
    txtInput[1].style.backgroundColor = 'aqua'
})
txtInput[2].addEventListener('focus', function(){
    txtInput[2].style.backgroundColor = 'aqua'
}) */
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정데이터 
//위의 방법을 아래로 수정
txtInput[0].addEventListener('focus', function(){
    bg(txtInput[0],'yellow'), //노랑
    font(txtInput[0])
})
txtInput[1].addEventListener('focus', function(){
    bg(txtInput[1], 'blue') //파랑
})
txtInput[2].addEventListener('focus', function(){
    bg(txtInput[2], 'pink') //분홍
})
function bg(target,color){
    let clr = color
    return target.style.backgroundColor = color //변수명에는 따옴표를 붙이면 안된다
    //함수는 생성되면 함수위아래 상관없이 모두 호출 가능하다 
}
function font(target){
    return target.style.color = 'red'
}
console.log('--------------------')
//관심상품, 알림설정 이미지에 마우스를 올렸을때
//off -> on 이미지 변경
//마우스를 나갔을때 pn -> off 이미지변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg) //변수 정상확인
likeImg.addEventListener('mouseover',function(){
    //console.log('over') //이벤트 정상확인
    //likeImg.src='./image/heart_on.png'
    onOff(this, 'heart', 'on')
})
likeImg.addEventListener('mouseout',function(){
    //console.log('out') //이벤트 정상확인
    //likeImg.src='./image/heart_off.png'
    onOff(this, 'heart', 'off')
})
ideaImg.addEventListener('mouseover',function(){
    //console.log('over') //이벤트 정상확인
    //ideaImg.src='./image/idea_on.png'
    onOff(ideaImg, 'idea', 'on')
    // onOff(ideaImg,'idea','on')
})
ideaImg.addEventListener('mouseout',function(){
    //console.log('out') //이벤트 정상확인
    //ideaImg.src='./image/idea_off.png'
    onOff(ideaImg, 'idea', 'off')
    // onOff(ideaImg,'idea','off')
})
function onOff(target, target2, mouse,){
    return target.src=`./image/${target2}_${mouse}.png`
}
// function onOff(target, name, status){
//     return target.src = `./image/${name}_${status}.png`
// }