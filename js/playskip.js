 window.addEventListener('load',function(){
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
 