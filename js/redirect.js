window.addEventListener('load', function () {
    let ul = document.querySelector('.nav');
    let flagindex = +document.querySelector('#flagindex').childNodes[0].nodeValue;
    switch (flagindex) {
        case 0:
            for (let li of ul.children) {
                li.firstElementChild.style.color = '';
            }
            ul.children[0].firstElementChild.style.color = '#fe5341';
            break;
        case 1:
            for (let li of ul.children) {
                li.firstElementChild.style.color = '';
            }
            ul.children[1].firstElementChild.style.color = '#fe5341';
            break;
        case 2:
            for (let li of ul.children) {
                li.firstElementChild.style.color = '';
            }
            ul.children[2].firstElementChild.style.color = '#fe5341';
            break;
        case 3:
            for (let li of ul.children) {
                li.firstElementChild.style.color = '';
            }
            ul.children[3].firstElementChild.style.color = '#fe5341';
            break;
        case 4:
            for (let li of ul.children) {
                li.firstElementChild.style.color = '';
            }
            ul.children[4].firstElementChild.style.color = '#fe5341';
            break;
        default:
            for (let li of ul.children) {
                li.firstElementChild.style.color = '';
            }
            ul.children[0].firstElementChild.style.color = '#fe5341';
            break;
    }


    let headerlogo = document.querySelector('.headerlogo');
    headerlogo.addEventListener('click', function () {
        window.location.href = '../czj/login.html';
    })

    for (var i = 0; i < ul.children.length; i++) {
        ul.children[i].setAttribute('index', i);
        ul.children[i].addEventListener('click', function () {
            const index = this.getAttribute('index');
            // console.log(index);
            switch (index) {
                case '0':
                    window.location.href = '../czj/index.html';
                    break;
                case '1':
                    window.location.href = '../wm/coldplay.html';
                    break;
                case '2':
                    window.location.href = '../jbf/guide_index.html';
                    break;
                case '3':
                    window.location.href = '../wm/tryout.html';
                    break;
                case '4':
                    window.location.href = '../jbf/report_index.html';
                    break;
            }
        })
    }
    function fn(index) {
        let ul2 = document.querySelector('.nav');
        for (var i = 0; i < ul2.children.length; i++) {
            ul2.children[i].children[0].style.color = 'black';
        }
        ul2.children[index].children[0].style.color = '#fe5341';
    }
    document.querySelector('.registerbtn').addEventListener('click', function () {
        window.location.href = '../czj/register.html';
    })

    let list = document.querySelector('.list_container');
    // console.log(list.children[2]);
    for (var i = 1; i < list.children[2].children.length; i++) {
        // console.log(list.children[2].children[i]);
        list.children[2].children[i].addEventListener('click', function () {
            window.location.href = '../czj/trial.html';
        })
    }
    for (var i = 1; i < 3; i++) {
        // console.log(list.children[2].children[i]);
        list.children[5].children[i].addEventListener('click', function () {
            window.location.href = '../czj/aboutjiguo.html';
        })
    }
    list.children[5].children[3].addEventListener('click', function () {
        window.location.href = 'mailto:BD@jiguo.com';
    })
    list.children[5].children[4].addEventListener('click', function () {
        window.location.href = 'mailto:CEO@jiguo.com';
    })


})