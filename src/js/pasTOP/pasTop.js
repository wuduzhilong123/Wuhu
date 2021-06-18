require('../../css/pasTop/pasTop.less')

let trlDom=document.querySelector('.trl')
let pasDom=document.querySelector('.pas')
let confirmBut=document.querySelector('.confirm')
let trl1=document.querySelector('.trl1')
let pas1=document.querySelector('.pas1')
trlDom.addEventListener('blur',function(i){
    let trlvla=trlDom.value
    // console.log(trlvla);
    if(trlvla){
        // trl1.textContent=''
    }else{
        // utils.toast(1,1,'请输入账号')
    }
})
pasDom.addEventListener('blur',function(){
    let pasvla=pasDom.value
    if(pasvla){
        // pas1.textContent=''
    }else{
    //    utils.toast(1,1,'请输入密码')
    }
})
confirmBut.addEventListener('click',function(ex){
    trlDom.focus()
    pasDom.focus()

    trlDom.blur()
    pasDom.blur()
    if(trl1.textContent==""&& pas1.textContent==""){
        let data = {
            account: trlDom.value,
            password: pasDom.value
        }
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
        } else {

            utils.toast(0, 1, '用户密码错误，请重新登录')
        }
    })
    }})
    let ring=document.querySelector('.ring')
    ring.addEventListener('click',function(){
        location.href='./register.html'
    })