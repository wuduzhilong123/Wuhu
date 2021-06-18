require('../../css/advertisingCss.less')

document.ready(function(){
// 倒计时
let countdownDom=document.querySelector('.countdown');
// 跳过
let capsuleBut=document.querySelector('.capsule');

let times=setInterval(function(){
    let sub=parseInt( countdownDom.textContent)-1
    countdownDom.textContent=sub+'s'
    if(sub===0){
        clearInterval(times)
        location.href='./pasTop.html'
    }
},1000000) 
capsuleBut.addEventListener('click',function(){
    location.href='./pasTop.html'
})
})
