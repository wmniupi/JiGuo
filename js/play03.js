window.onload = function(){
var newest = document.getElementsByTagName('span')[0];
var hottest = document.getElementsByTagName('span')[1];
var category  = document.getElementsByTagName('span')[2];
newest.addEventListener('click',()=>{
    window.location.href='./coldplay.html'
})
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
}
