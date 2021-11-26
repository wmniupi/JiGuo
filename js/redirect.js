window.addEventListener('load', function () {
    let ul = document.querySelector('.nav');
    for(var i = 0; i<ul.children.length; i++){
        ul.children[i].setAttribute('index',i);
        ul.children[i].addEventListener('click',function(){
            const index = this.getAttribute('index');
            // console.log(index);
            switch(index){
                case '0':
                    window.location.href = '../czj/index.html';
                    break;
                case '1':
                    break;
                case '2':
                    window.location.href = '../jbf/guide_index.html';
                    break;
                case '3':
                    break;
                case '4':
                    window.location.href = '../jbf/report_index.html';
                    break;
            }
        })
    }
    document.querySelector('.registerbtn').addEventListener('click',function(){
        window.location.href = '../czj/register.html';
    })
    

})