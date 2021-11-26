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

})