/**
 * 这里是guide_index的js文件
 * 创建于：2021-11-25
 */
window.addEventListener('load',function(){
    // 加载更多实现效果
    const more_ = document.querySelector('#more');
    // console.log(more_);
    more_.children[0].addEventListener('click',function(){
        this.innerHTML = '<img src="../../img/loading-icon.gif"/>&nbsp;&nbsp;正在加载中';
    });
    // 最新和最热的切换
    const btn_new = document.getElementById('btn_new');
    const btn_hot = document.getElementById('btn_hot');
    btn_new.addEventListener('click',function(){
        this.className = 'nav';
        btn_hot.className = '';
        let ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        ajax_.open('get','http://192.168.31.5:3000/guid/new',true);
        ajax_.send();
        ajax_.onreadystatechange = function(){
            if(ajax_.readyState == 4){
                if(ajax_.status == 200){
                    var res = JSON.parse(ajax_.responseText);
                    // console.log(res);
                    showdata(res);
                }
            }
        }
    });
    btn_hot.addEventListener('click',function(){
        this.className = 'nav';
        btn_new.className = '';
        let ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        ajax_.open('get','http://192.168.31.5:3000/guid/hot',true);
        ajax_.send();
        ajax_.onreadystatechange = function(){
            if(ajax_.readyState == 4){
                if(ajax_.status == 200){
                    var res = JSON.parse(ajax_.responseText);
                    // console.log(res);
                    showdata(res);
                }
            }
        }
    });
    // 渲染数据
    function showdata(v){
        var str = '';
        for(var i of v){
            // console.log(i);
            str += '<li>';
            str += '<div></div><div></div>';
            str += '<div>';
            str += '<img src="'+i.img+'"/>';
            str += '<span>'+i.text+'</span>';
            str += '<div>';
            str += '<span><img src="../../img/xin.png" alt="">'+i.like+'</span>';
            str += '<span><img src="../../img/reply.png" alt="">'+i.words+'</span>';
            str += '</div></div></li>';
        }
        const ul =  document.getElementById('show_ul');
        ul.innerHTML = str;
        // console.log(ul.children);
        // 给每个li增加跳转
        for(var li of ul.children){
            // console.log(li);
            li.addEventListener('click',function(){
                window.location.href = './guide_detail.html';
            })
        }

    }
    btn_new.click();
    
})

