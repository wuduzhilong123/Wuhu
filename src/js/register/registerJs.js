require('../../css/register/register.less')

// 验证码
let yzs=''
let captcha = new CaptchaMini();
    captcha.draw(document.querySelector('#captcha'), function (res) {
      yzs=res
    })
    // 跳转登陆
let registerBut=document.querySelector('.register')
registerBut.addEventListener('click',function(){
    location.href='./pasTop.html'
})
// 
let trlDom=document.querySelector('.trl')
let yzmsDom=document.querySelector('.yzms')
let pasDom=document.querySelector('.pas')
let passDom=document.querySelector('.pass')
let confirmBut=document.querySelector('.confirm')



let trl1=document.querySelector('.trl1')
let yzms1=document.querySelector('.yzms1')
let code1=document.querySelector('.code1')
let pas1=document.querySelector('.pas1')
let pass1=document.querySelector('.pass1')
trlDom.addEventListener('blur',function(i){
    let trlVal=trlDom.value
    if(trlVal){
    let trlZz=/^[1][3-9][0-9]{9}$/
        if(trlZz.test(trlVal)){
            // trl1.textContent='';
        }else{
    //    utils.toast(1,1,'手机号错误')

        }
    } else{
        // utils.toast(1,1,'请输入手机号')
    }

    
})

yzmsDom.addEventListener('blur',function(i){
    let yzmsVal=yzmsDom.value
    if(yzmsVal){
        if(yzmsVal.toLowerCase()===yzs.toLowerCase()){
            // yzms1.textContent='';
        }else{
        // utils.toast(1,1,'验证码错误')

        }
    } else{
        // utils.toast(1,1,'请输入验证码')

    }
})
pasDom.addEventListener('blur',function(i){
    let pasVal=pasDom.value
    let pow=/[A-Za-z0-9]{5,12}/
    if(pasVal){
        if(pow.test(pasVal)){
            // pas1.textContent='';
        }else{
        // utils.toast(1,1,'密码错误')
        }
    } else{
        // utils.toast(1,1,'请输入密码')
    }
})
passDom.addEventListener('blur',function(i){
    let passVal=passDom.value
    if(passVal){
        if(passVal===pasDom.value){
            // pass1.textContent='';
        }else{
            // utils.toast(1,1,'密码错误')
        }
    } else{
        // utils.toast(1,1,'请输入密码')
    }
})

confirmBut.addEventListener('click',function(ex){
    trlDom.focus()
    yzmsDom.focus()
    pasDom.focus()
    passDom.focus()

    trlDom.blur()
    yzmsDom.blur()
    pasDom.blur()
    passDom.blur()
    if(trl1.textContent==""&&  yzms1.textContent==""&&
    pas1.textContent==""&&  pass1.innerHTML==""){
        let data={account:trlDom.value,password:pasDom.value}
        //请求注册接口
        $http.post('/users/add', data, function (res) {
            //判断请求是否成功
            if (res.status === 0) {
                //提醒用户  
                logIn(data)
                //跳转登录页面

                // setTimeout(function () {
                //     location.href = './home.html';
                // }, 1000)
            } else {
                utils.toast(0, 1, res.msg);
            }
        })
    }
    function logIn(data){
        $http.post('/users/login', data, function (res) {
            console.log(res);
            if (res.status === 0) {
                // alert('登录成功');
                utils.toast(1, 1, '登录成功')
                //数据存到本地存储
                localStorage.setItem('user', JSON.stringify(res.data.user))
                //跳转页面
                setTimeout(function () {
                    location.href = './home.html'
                }, 1000)
            } 
            })
    }
})