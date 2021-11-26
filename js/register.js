window.addEventListener('load', function () {
    let phone_number = document.querySelector('#phone_number');
    let check_code = document.querySelector('#check_code');
    let postcodebtn = document.querySelector('#postcodebtn');
    let identifying_code = document.querySelector('#identifying_code');
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let confirmpwd = document.querySelector('#confirmpwd');
    let registerbtn = document.querySelector('#registerbtn');

    let gotologinbtn = document.querySelector('.gotologinbtn');
    let gotoindexbtn = document.querySelector('.gotoindexbtn');

    let p1 = document.querySelector('.p1');
    let p2 = document.querySelector('.p2');
    let p3 = document.querySelector('.p3');
    let p4 = document.querySelector('.p4');
    let p5 = document.querySelector('.p5');
    let p6 = document.querySelector('.p6');

    let reg_tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    /* 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$ */
    let reg_user = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    /* 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$ */
    let reg_pwd = /^[a-zA-Z]\w{5,17}$/;

    let flag = 0;

    phone_number.addEventListener('blur', function () {
        if (!reg_tel.test(phone_number.value)) {
            phone_number.style.border = '1px solid red';
            p1.style.opacity = '1';
        } else {
            phone_number.style.border = '';
            p1.style.opacity = '0';
            flag++;
        }
    })
    check_code.addEventListener('blur', function () {
        if (check_code.value != 'wmnb') {
            check_code.style.border = '1px solid red';
            p2.style.opacity = '1';
        } else {
            check_code.style.border = '';
            p2.style.opacity = '0';
            flag++;
        }
    })
    postcodebtn.addEventListener('click', function () {
        alert('验证码为：wmnb，请及时输入！');
        postcodebtn.style.border = '1px solid #a3a3a3';
        postcodebtn.style.color = '#a3a3a3';
        postcodebtn.disabled = 'true';
        let min = 30;
        let timer = setInterval(() => {
            if (min == 1) {
                postcodebtn.innerHTML = '获取验证码';
                postcodebtn.style.color = 'rgb(254,83,65)';
                postcodebtn.disabled = '';
                postcodebtn.style.border = '1px solid rgb(254,83,65)';
                clearInterval(timer);
                return
            }
            min--;
            postcodebtn.innerHTML = min + '秒后重新发送';
        }, 1000);
    })
    identifying_code.addEventListener('blur', function () {
        if (identifying_code.value != 'r2B7') {
            identifying_code.style.border = '1px solid red';
            p3.style.opacity = '1';
        } else {
            identifying_code.style.border = '';
            p3.style.opacity = '0';
            flag++;
        }
    })
    username.addEventListener('blur', function () {
        if (!reg_user.test(username.value)) {
            username.style.border = '1px solid red';
            p4.style.opacity = '1';
        } else {
            username.style.border = '';
            p4.style.opacity = '0';
            flag++;
        }
    })
    password.addEventListener('blur', function () {
        if (!reg_pwd.test(password.value)) {
            password.style.border = '1px solid red';
            p5.style.opacity = '1';
        } else {
            password.style.border = '';
            p5.style.opacity = '0';
            flag++;
        }
    })
    confirmpwd.addEventListener('blur', function () {
        if (password.value != confirmpwd.value) {
            confirmpwd.style.border = '1px solid red';
            p6.style.opacity = '1';
        } else {
            confirmpwd.style.border = '';
            p6.style.opacity = '0';
            flag++;
        }
    })
    registerbtn.addEventListener('click', function () {
        if (flag == 6) {
            document.querySelector('.mask').style.display = 'flex';
        } else {
            alert('请按需求填写号表单内容！');
        }
    })

    gotologinbtn.addEventListener('click', function () {
        window.location.href = "./login.html";
    })
    gotoindexbtn.addEventListener('click', function () {
        window.location.href = "./index.html";
    })

})