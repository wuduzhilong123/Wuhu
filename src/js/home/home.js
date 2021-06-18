require('../../css/home/home.less')

document.ready(function(){
  utils.addqnmd('home');
  let rankingDom=document.querySelector('.ranking')
  let sonDom=document.querySelector('.son')
  let punchBut=document.querySelector('.punch')
  let bigDom=document.querySelector('.big')
  let user=JSON.parse(localStorage.getItem('user'))

  var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        }
    // // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })
  function stop(){
    $http.get('/headPageInfo?userId='+user.userId,function(ser){
      if(ser.status==0){
        rankingDom.textContent=ser.data.rank
        sonDom.textContent=ser.data.punchIn
        bigDom.textContent=ser.data.insigniaNum
        if(ser.data.isPunch==='true'){
          punchBut.style.opacity='0'
        }else{
          punchBut.style.opacity='1'
        }
      }
    })
  
  }
  stop()

  punchBut.addEventListener('click',function(ex){
console.log(user.userId);
    $http.get('/clockIn?userId='+ user.userId,function(ser){
        if(ser.status===0){
          utils.toast(1, 1, '打卡成功')
          stop()
        }else{
          utils.toast(0, 1, ser.msg)
        }

     })

  })
  





})
