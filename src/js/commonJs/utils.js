/**
 * 工具函数
 */
const utils={}
utils.toast=function(status,min,text){
    let toast=document.createElement('div')
    toast.className='toast'
    let html=`
        <div class="ions">
            ${
                status===0? "!":"√"
            }
        </div>
        <div class="text">${text}</div>
    `
    toast.innerHTML=html
    document.querySelector('body').appendChild(toast)
    setTimeout(function(){
        toast.remove() 
    },min*1000)


    
}
utils.addqnmd=function(page){
    let footer=document.createElement('div')
    footer.className='footer'
    let html=`
    <a href="./home.html">
        <div class="${page ==='home' ? 'itim pattern':'itim'}">
            <p><i class="iconfont iconhome "></i></p>
            <span>首页</span>
        </div>
    </a>
    <a href="./index.html">
        <div class="${page ==='index' ? 'itim pattern':'itim'}">
            <p><i class="iconfont iconsports"></i></p>
            <span>运动</span>
        </div>
    </a>
    
    <a href="./login.html">
    <div class="${page ==='login' ? 'itim pattern':'itim'}">
        <p><i class="iconfont iconmine"></i></p>
            <div>我的</div>
    </div>
    </a>
    
   
    
    `
    footer.innerHTML=html;
    document.querySelector('body').appendChild(footer)
}
window.utils=utils