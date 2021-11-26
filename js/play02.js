window.onload = function(){
var more = document.getElementsByClassName('more')[0];
var more1 = document.getElementsByClassName('more1')[0];
more.addEventListener('click',function(){
more.style.display = 'none';
more1.style.display = 'block';
})
var newest = document.getElementsByTagName('span')[0];
var category  = document.getElementsByTagName('span')[2];
newest.addEventListener('click',()=>{
    window.location.href='./coldplay.html'
})
category.addEventListener('click',()=>{
    window.location.href='./play03.html'
})
}
