window.addEventListener('load', function () {
    let backtop = document.querySelector('.backtop');
    /* 滑轮监听 */
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 80) {
            backtop.style.display = 'block';
        } else {
            backtop.style.display = 'none';
        }
    })

    /* 回到页面首部按钮事件 */
    backtop.addEventListener('mouseenter', function () {
        backtop.style.opacity = '1';
    })
    backtop.addEventListener('mouseleave', function () {
        backtop.style.opacity = '.6';
    })
    backtop.addEventListener('click', function () {
        backToTop(window, 0);

    })
    /* 回到页面首部 */
    function backToTop(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step = step < 0 ? Math.floor(step) : Math.ceil(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15)
    }


    /* 焦点图倒计时  */
    let dayspan = document.querySelector('.day');
    let hourspan = document.querySelector('.hour');
    let minutespan = document.querySelector('.minute');
    var countdown = this.setInterval(() => {
        let now = +new Date();
        let deadline = +new Date('2022/1/1');
        let resttime = parseInt((deadline - now) / 1000);

        let day = parseInt(resttime / 3600 / 24);
        day = day < 10 ? '0' + day : day;
        let hour = parseInt(resttime / 3600 % 24);
        hour = hour < 10 ? '0' + hour : hour;
        let minute = parseInt(resttime / 60 % 60);
        minute = minute < 10 ? '0' + minute : minute;

        dayspan.innerHTML = day;
        hourspan.innerHTML = hour;
        minutespan.innerHTML = minute;
    }, 1000)

    let applyfor = document.querySelector('.applyfor');
    let person = document.querySelector('.person');
    let machine = document.querySelector('.machine');
    let personnum = 132;
    let machinenum = 20;
    applyfor.addEventListener('click', function () {
        personnum++;
        machinenum--;
        person.innerHTML = `${personnum}`;
        machine.innerHTML = `${machinenum}`;

        if (machinenum == 0) {
            applyfor.style.backgroundColor = '#ccc';
            applyfor.innerHTML = '已售罄';
            applyfor.disabled = 'true';

        }
    })

    /* 轮播图点击跳转 */
    let scrollimg_thing = document.querySelector('.scrollimg_thing').children;
    for (let li of scrollimg_thing) {
        for (let div of li.children) {
            div.addEventListener('click', function () {
                window.location.href = '../wm/playskip.html';
            })
        }
    }
    let reportmore = document.querySelector('#reportmore');
    reportmore.addEventListener('click', function () {
        window.location.href = '../jbf/report_index.html';
    })
    let guidemore = document.querySelector('#guidemore');
    guidemore.addEventListener('click', function () {
        window.location.href = '../jbf/guide_index.html';
    })
    let coldplaymore = document.querySelector('#coldplaymore');
    coldplaymore.addEventListener('click', function () {
        window.location.href = '../wm/coldplay.html';
    })

    /* 接口地址 
    http://192.168.31.5:3000/useing/master
    http://192.168.31.5:3000/report/hot 
    http://192.168.31.5:3000/guid/hot
    http://192.168.31.5:3000/play/hot
 
   */

    let report_content = document.querySelector('.report_content');
    let guide_content = document.querySelector('.guide_content');
    let coldplay_content = document.querySelector('.coldplay_content');

    let ajax = new XMLHttpRequest();
    ajax.open('get', 'http://192.168.31.5:3000/report/hot');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                let data = JSON.parse(ajax.responseText);
                showdata1(data);
            }
        }
    }
    let ajax2 = new XMLHttpRequest();
    ajax2.open('get', 'http://192.168.31.5:3000/guid/hot');
    ajax2.send();
    ajax2.onreadystatechange = function () {
        if (ajax2.readyState == 4) {
            if (ajax2.status == 200) {
                let data = JSON.parse(ajax2.responseText);
                showdata2(data);
            }
        }
    }
    let ajax3 = new XMLHttpRequest();
    ajax3.open('get', 'http://192.168.31.5:3000/play/hot');
    ajax3.send();
    ajax3.onreadystatechange = function () {
        if (ajax3.readyState == 4) {
            if (ajax3.status == 200) {
                let data = JSON.parse(ajax3.responseText);
                showdata3(data[0].reverse());
            }
        }
    }
    function showdata1(data) {
        let str = '';
        for (let i = 0; i < 8; i++) {
            str += `
                <div class="report_content_element">
                    <img src="${data[i].img}" width="220px" height="130px">
                    <p>${data[i].text}</p>
                    <div>
                        <span>${data[i].uName}</span>
                        <div class="thumbs">
                            <img src="../img/zan.png" alt="">3
                            <img src="../img/reply.png" alt="">3
                        </div>
                    </div>
                </div>
            `
        }
        report_content.innerHTML = str;
        for (let div of report_content.children) {
            div.addEventListener('click', function () {
                window.location.href = '../jbf/guide_detail.html';
            })
        }
    }
    function showdata2(data) {
        let str = '';
        for (let i = 0; i < 4; i++) {
            str += `
                <div class="guide_content_element">
                    <div></div>
                    <div></div>
                    <div>
                        <img src="${data[i].img}" alt="">
                        <span>${data[i].text}</span>
                        <div>
                            <span><img src="../img/xin.png" alt="">${data[i].like}</span>
                            <span><img src="../img/reply.png" alt="">${data[i].words}</span>
                        </div>
                    </div>
                </div>
            `
        }
        guide_content.innerHTML = str;
        for (let div of guide_content.children) {
            div.addEventListener('click', function () {
                window.location.href = '../jbf/guide_detail.html';
            })
        }
    }
    function showdata3(data) {
        let str = '';
        for (let i = 0; i < 8; i++) {
            str += `
               <div class="coldplay_content_element">
                    <img src="${data[i].img}" width="220px" height="130px">
                    <p>${data[i].text}</p>
                    <p>${data[i].description}</p>
                    <div>
                        <span>${data[i].price}</span>
                        <div class="thumbs">
                            <img src="../img/zan.png" alt="">3
                            <img src="../img/reply.png" alt="">3
                        </div>
                    </div>
                </div>
            `
        }
        str += str;
        coldplay_content.innerHTML = str;
        for (let div of coldplay_content.children) {
            div.addEventListener('click', function () {
                window.location.href = '../wm/playskip.html';
            })
        }
    }

    let moreimg = document.querySelector('.moreimg');
    let loadimg = document.querySelector('.loadimg');

    moreimg.addEventListener('click', function () {
        moreimg.style.display = 'none';
        loadimg.style.display = 'block';
    })
    loadimg.addEventListener('click', function () {
        loadimg.style.display = 'none';
        moreimg.style.display = 'block';
    })

})