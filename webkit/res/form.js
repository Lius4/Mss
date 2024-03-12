const phoneinput = document.querySelector('.wrapper .phoneno input')
const emailinput = document.querySelector('.wrapper .email input')
const form = document.querySelector('.wrapper form')
const errorparaphone = document.querySelector('.wrapper .phoneno p')
const errorparaemail = document.querySelector('.wrapper .email p')


form.onsubmit = (e) => {
    e.preventDefault()

    if (phoneinput.value.length < 10) {
        phoneinput.classList.add('error')
        errorparaphone.style.display = 'flex'
    } else {
        phoneinput.classList.remove('error')
        errorparaphone.style.display = 'none'
    }

    if (!validateEmail(emailinput.value)) {
        emailinput.classList.add('error')
        errorparaemail.style.display = 'flex'
    } else {
        emailinput.classList.remove('error')
        errorparaemail.style.display = 'none'
    }
}

document.onkeydown = () => {
    if (phoneinput.value.length >= 9) {
        phoneinput.classList.remove('error')
        errorparaphone.style.display = 'none'
    }

    if (emailinput.value.length >= 10) {
        emailinput.classList.remove('error')
        errorparaemail.style.display = 'none'
    }
}