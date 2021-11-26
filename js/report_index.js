/**
 * 这里是report_index的js文件
 * 创建于：2021-11-25
 */
 window.addEventListener('load',function(){
    // 加载更多实现效果
    const more_ = document.querySelector('#more');
    // console.log(more_);
    // more_.children[0].addEventListener('click',function(){
    //     this.innerHTML = '<img src="../../img/loading-icon.gif"/>&nbsp;&nbsp;正在加载中';
    // });
    // 最新和最热的切换
    const btn_new = document.getElementById('btn_new');
    const btn_hot = document.getElementById('btn_hot');
    btn_new.addEventListener('click',function(){
        this.className = 'nav';
        btn_hot.className = '';
        let ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        ajax_.open('get','http://192.168.31.5:3000/report/new',true);
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
        ajax_.open('get','http://192.168.31.5:3000/report/hot',true);
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
        // for(var i of v){
        //     // console.log(i);
        //     str += '<li>';
        //     str += '<div><img src="'+i.img+'"/>';
        //     str += '<div>'+i.text;
        //     str += '<span><img src="../../img/tx.jpg" alt="">'+i.endTime+'</span>';
        //     str += '<span><img src="../../img/zan.png" alt="">'+i.totalnum;
        //     str += '<img src="../../img/reply.png" alt="">'+i.apply+'</span>';
        //     str += '</div></div>';
        //     str += '<div>关于此产品还有'+i.num+'篇报告，点击查看</div>'; 
        // }
        var bool = true;
        for (let i = 0; i<5; i++){
            str += '<li>';
            str += '<div><img src="'+v[i].img+'"/>';
            str += '<div>'+v[i].text;
            str += '<span><img src="../../img/tx.jpg" alt="">'+v[i].endTime+'</span>';
            str += '<span><img src="../../img/zan.png" alt="">'+v[i].totalnum;
            str += '<img src="../../img/reply.png" alt="">'+v[i].apply+'</span>';
            str += '</div></div>';
            str += '<div>关于此产品还有'+v[i].num+'篇报告，点击查看</div>'; 
        }
        const ul =  document.getElementById('show_ul');
        ul.innerHTML = str;
        // console.log(ul.children);
        // 给每个li增加跳转
        for(var li of ul.children){
            // console.log(li);
            li.addEventListener('click',function(){
                window.location.href = '../guide/guide_detail.html';
            })
        }
        more_.children[0].innerHTML = '<img src="../../img/more.png"/>&nbsp;&nbsp;点击加载更多';
        more_.children[0].addEventListener('click',function(){
            if(bool){
                bool=false;
                this.innerHTML = '<img src="../../img/loading-icon.gif"/>&nbsp;&nbsp;正在加载中';
                clearTimeout(timer);
                var timer = setTimeout(function(){
                    more_.children[0].innerHTML = '到底了~~';
                    for (let i = 5; i<v.length; i++){
                        str += '<li>';
                        str += '<div><img src="'+v[i].img+'"/>';
                        str += '<div>'+v[i].text;
                        str += '<span><img src="../../img/tx.jpg" alt="">'+v[i].endTime+'</span>';
                        str += '<span><img src="../../img/zan.png" alt="">'+v[i].totalnum;
                        str += '<img src="../../img/reply.png" alt="">'+v[i].apply+'</span>';
                        str += '</div></div>';
                        str += '<div>关于此产品还有'+v[i].num+'篇报告，点击查看</div>'; 
                    }
                    const ul =  document.getElementById('show_ul');
                    ul.innerHTML = str;
                    // console.log(ul.children);
                    // 给每个li增加跳转
                    for(var li of ul.children){
                        // console.log(li);
                        li.addEventListener('click',function(){
                            window.location.href = '../guide/guide_detail.html';
                        })
                    }
                },1500)
            }else{

            }
        });

    }
    btn_new.click();
    
})