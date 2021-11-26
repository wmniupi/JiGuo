window.onload = function(){
    function showdata(){
        var ajax =new XMLHttpRequest();
        ajax.open('get','http://192.168.31.5:3000/useing/master');
        ajax.send();
        ajax.onreadystatechange =function(){
         if(ajax.readyState==4){
             if(ajax.status==200){
                 var data =JSON.parse(ajax.responseText);
                 show(data);
             }
         }
        }
    }
    showdata();
    function show(data){
        var ul = document.getElementsByTagName('ul')[1];
        var str= '';
        for(var i = 0;i<16;i++){
            
            var li =document.createElement('li');
            li.innerHTML=`  
                <span class="starting">首页</span>
                <img src="${data[i].img}" alt="">
                <h3>${data[i].text}</h3>
                <p>
                    <span class="rim_b">2032</span>
                    <span class="rim_b">20台</span>
                </p>
                <h4><span class="colour">${data[i].apply}</span>申请</h4>
                <h5>报告数量: 8</h5>
            `
            ul.appendChild(li);
        }
    }
    var span = document.getElementsByTagName('span');
    for(var i =0;i<span.length;i++){
        // if(span[i].value=='首页'){
        //     // this.className = exclusive
        //     console.log(span[i]);
        // }
        // console.log(span[i]);
    }
}