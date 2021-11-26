/**
 * 这里是guide_detail的js文件
 * 创建于：2021-11-26
 */
window.addEventListener('load',function(){
    const like = document.getElementById('like_btn');
    const share = document.getElementById('share_btn');
    var bool1 = true;
    like.addEventListener('click',function(){
        if(bool1){
            bool1 = false;
            this.children[0].src='../../img/xinRedh.png';
            this.style.color = '#fe5431'
            // console.log(this.childNodes[3].childNodes[0].nodeValue);
            this.children[2].innerHTML = parseInt(this.childNodes[3].childNodes[0].nodeValue)+1;
        }else{
            bool1 = true;
            this.children[0].src='../../img/xinRedo.png';
            this.style.color = '#ababab'
            // console.log(this.childNodes[3].childNodes[0].nodeValue);
            this.children[2].innerHTML = parseInt(this.childNodes[3].childNodes[0].nodeValue)-1;
        }
        
    })
    var bool2 = true;
    share.addEventListener('click',function(){
        if(bool2){
            bool2 = false;
            this.children[0].src='../../img/shareh_yj1.png';
            this.style.color = '#fe5431'
            this.childNodes[2].nodeValue = '已分享';
        }else{
            bool2 = true;
            this.children[0].src='../../img/share_yj1.png';
            this.style.color = '#ababab';
            this.childNodes[2].nodeValue = '分享';
        }
        
    })
})