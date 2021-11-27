window.addEventListener('load', function () {
    var body = document.getElementsByTagName('body')[0];
    var div_ = document.createElement('div');
    div_.style.position = 'absolute';
    div_.style.width = this.window.innerWidth + 'px';
    div_.style.height = '2000px';
    div_.style.zIndex = '999';
    var str = `<img src="../img/loading.gif" 
                style="position:absolute;left:50%;top:200px;transform:translate(-50%,0);"/>`
    div_.innerHTML = str;
    div_.style.backgroundColor = 'white';
    div_.style.left = 0;
    div_.style.top = 0;
    body.appendChild(div_);

    this.setTimeout(function () {
        body.removeChild(div_);
    }, 800);
})