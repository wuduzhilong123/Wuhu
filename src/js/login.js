require('../css/login.less')
document.ready(function(){
console.log(utils.addqnmd('login'));
utils.addqnmd('login');
  console.log(localStorage);
let outbut=document.querySelector('.outbut')
let portrait=document.querySelector('.portrait')
outbut.addEventListener('click',function(){
  localStorage.removeItem('user')
  utils.toast(1,1,'退出成功')
  setTimeout(function(ex){
    location.href='./pasTop.html'
  },1000)
 
})
portrait.addEventListener('click',function(ex){
  location.href='./personage.html'
})
  
  
  })