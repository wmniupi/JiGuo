window.addEventListener('load', function () {
    let loginbtn = document.querySelector('.mb2');
    let username = document.querySelector('.username');
    let password = document.querySelector('.password');

    loginbtn.addEventListener('click', function () {
        if (username.value == '' || password.value == '') {
            alert('用户名或密码不得为空！');
            username.value = '';
            password.value = '';
        } else if (username.value != 'admin' || password.value != 'abc123456') {
            alert('用户名或密码不正确，请重新输入！');
            username.value = '';
            password.value = '';
        } else {
            alert('登陆成功！');
            window.location.href = '../czj/index.html';
        }

    })



})