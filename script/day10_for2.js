//Es6 DOM 쉽게 관리할 수 있는 for ~ in ~of ~ Each
const study = ['html', 'css', 'javescript', 'design']
//기본 for 문법 for(변수생성; 조건식; 증감식){실행결과}
    for(i=0; i<study.length; i++){
        console.log(study[i])
    }
//for ~in 문법(DOM index number)
for(let i in study){
    console.log(i)
}
//for ~of 문법
for(let i of study){
    console.log(i)
}
console.log('---------')
const boxA = document.querySelectorAll('.box a')
for(let i in boxA){
    console.log(i) //DOM index+기본속성 출력
}
for(let i of boxA){
    console.log(i) //DOM 객체 출력
    i.addEventListener('mouseover',function(){
        console.log(this)
        i.style.backgroundColor = 'aqua'
    }) //mouseover end
    i.addEventListener('mouseout',function(){
        i.style.backgroundColor = 'coral'
        i.style.color = 'white'
    }) //mouseout end
    i.addEventListener('click',function(){
        window.alert('준비중입니다.')
    }) //click end
}//for of boxA end (in보다는 of를 많이 씀/ 돔객체를 볼 수 있기때문에)
console.log('---------')
//for ~ in 인덱스 위주 제어
//for ~ of 객체 위주 제어
//forEach 인덱스, 객체, 배열 동시제어
const num = [20, 21, 22, 23, 24, 25]
/* 
    객체.forEach(funxtion(객체매개변수, 인덱스매개변수, 배열매개변수){
        매개변수를 활용한 실행 속성 및 메서드 작성위치
    })
    *매개변수명은 의미만 맞게 자유롭게 설정 가능.
    *매매개변수 순서에 따라 객체, 인덱스, 배열 지정이니 순서주의!
    *매개변수 필요한 대상만 작성 가능
*/
//num.forEach(function(t, i, a){}) 매개변수명은 의미만 맞으면 어떻게 써도 상관없다
//num.forEach(function(dom, in, ar){})
num.forEach(function(target, index, array){
    console.log(`target=${target}`) //데이터 (순서대로인식)
    console.log(`index=${index}`) //배열 (순서대로인식)
    console.log(`array=${array}`) //전체출력
    console.log('---------')
})
boxA.forEach(function(target, index, array){
    console.log(target) //데이터 (순서대로인식)
    console.log(`index=${index}`) //배열 (순서대로인식)
    console.log(`array=${array}`) //전체출력
    console.log('---------')
    target.addEventListener('mousedown',function(){ //mousedown 마우스를 누르고 있을때
        target.style.color = 'red'
    })
})//forEach를 여러개 만들어도 중복생성 할 수 있다
console.log('---------')
const box2 = document.querySelectorAll('.box2 a')
console.log(box2,box2[1])
for(let i in box2){
    console.log(i)    
}
console.log('---------')
for(let i of box2){
    console.log(i)
}
console.log('---------')
box2.forEach(function(a,b,c){
    console.log(a)
    console.log(`${b}=b`)
    console.log(`${c}=c`)
})



