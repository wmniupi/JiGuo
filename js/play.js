window.addEventListener('load',function(){
        var more = document.getElementsByClassName('more')[0];
        var more1 = document.getElementsByClassName('more1')[0];
        more.addEventListener('click',function(){
        more.style.display = 'none';
        more1.style.display = 'block';
        })
        var category  = document.getElementsByTagName('span')[2];
        var hottest = document.getElementsByTagName('span')[1];
        hottest.addEventListener('click',()=>{
            window.location.href='./play02.html'
        })

        category.addEventListener('click',()=>{
            window.location.href='./play03.html'
        })
            var li = document.getElementsByTagName('li');
            for(var i=0;i<li.length;i++){
            li[i].onclick = function(){
                window.location.href = './playskip.html'
            }
        }
})
