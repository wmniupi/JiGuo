window.onload =function(){
    var span = document.getElementsByTagName('span');
span[0].addEventListener('click',()=>{
    window.location.href = './tryout.html'
})
 span[1].addEventListener('click',()=>{
        window.location.href = './user02.html'
    })
span[2].addEventListener('click',()=>{
    window.location.href = './tryout.html'
})
span[3].addEventListener('click',()=>{
    window.location.href = './user03.html'
})
span[4].addEventListener('click',()=>{
    window.location.href = './user04.html'
})
span[5].addEventListener('click',()=>{
    window.location.href = './user05.html'
})
var li = document.getElementsByTagName('li');
for(var i=0;i<li.length;i++){
    li[i].onclick = function(){
        window.location.href = './playskip.html'
    }
}
}