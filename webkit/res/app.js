const menuBtn = document.querySelector('.menu')
const sideBar = document.querySelector('.smallscreens')
const cancelBtn = document.querySelector('.cancel')
const screenCont = document.querySelector('.pc .screen .inner .para p')
const paraphone = document.querySelector('.phone .screen .paras p')
const paras = document.querySelector('.phone .screen p')

menuBtn.onclick = () => {
    sideBar.classList.add('active')
}

cancelBtn.onclick = () => {
    sideBar.classList.remove('active')
}

setInterval(() => {
    setTimeout(() => {
        screenCont.innerText = 'diagonizing a problem . . .'
        setTimeout(() => {
            screenCont.innerText = 'gathering informations . . .'
            setTimeout(() => {
                screenCont.innerText = 'fixing a problem . . .'
                setTimeout(() => {
                    screenCont.innerText = 'problem fixed . . .'
                }, 2000);
            }, 2000);
        }, 2000);
    }, 1000);
}, 10000);


setInterval(() => {
    setTimeout(() => {
        paras.innerHTML = `Tunaupiga mwingi sana! both <i class="bx bxl-apple"></i>+<i class="bx bxl-android"></i>`
        setTimeout(() => {
            paras.innerHTML = `Android FRP + Password Removal`
            setTimeout(() => {
                paras.innerText = 'iOS iCloud + Password Removal'
                setTimeout(() => {
                    paras.innerText = 'plus all software problems associated so far'
                }, 2000);
            }, 2000);
        }, 2000);
    }, 1000);
}, 10000);


setTimeout(() => {
    paras.innerHTML = 'starting services'
}, 1000);

setTimeout(() => {
    paras.innerHTML = '10% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 2000);

setTimeout(() => {
    paras.innerHTML = '20% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 3000);

setTimeout(() => {
    paras.innerHTML = '35% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 4000);

setTimeout(() => {
    paras.innerHTML = '40% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 5000);

setTimeout(() => {
    paras.innerHTML = '44% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 5500);

setTimeout(() => {
    paras.innerHTML = '56% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 6000);

setTimeout(() => {
    paras.innerHTML = '60% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 6200);

setTimeout(() => {
    paras.innerHTML = '70% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 6400);

setTimeout(() => {
    paras.innerHTML = '80% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 6600);

setTimeout(() => {
    paras.innerHTML = '90% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 6800);

setTimeout(() => {
    paras.innerHTML = '94% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 6800);

setTimeout(() => {
    paras.innerHTML = '99% <br> <i class="bx bxl-apple"></i> + <i class="bx bxl-android"></i>'
}, 6900);

setTimeout(() => {
    paras.innerHTML = 'upacking <br><i class="bx bxl-android"></i> services'
}, 7000);

setTimeout(() => {
    paras.innerHTML = 'upacking <br> <i class="bx bxl-apple"></i> services'
}, 8000);

setTimeout(() => {
    paras.innerHTML = 'welcome MSS home of software magicials'
}, 9000);


// pc mwana
setTimeout(() => {
    screenCont.innerHTML = 'starting services'
}, 1000);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 2000);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 3000);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 4000);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 5000);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 5500);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 6000);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 6200);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 6400);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 6600);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 6800);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 6800);

setTimeout(() => {
    screenCont.innerHTML = ' <i class="bx bxl-microsoft"></i>'
}, 6900);

setTimeout(() => {
    screenCont.innerHTML = 'upacking all service software solutions'
}, 7000);

setTimeout(() => {
    screenCont.innerHTML = 'upacking <i class="bx bxl-apple"></i> services'
}, 8000);

setTimeout(() => {
    screenCont.innerHTML = 'upacking <i class="bx bxl-android"></i> services'
}, 8500);

setTimeout(() => {
    screenCont.innerHTML = 'Just One Tap, All Fixed'
}, 9000);