const chatBtn = document.querySelector('.chatwidget a i')
const chatwiget = document.querySelector('.chat')
const close = document.querySelector('.chat a i')


chatBtn.onclick = () => {
    chatwiget.style.display = 'flex'
}

close.onclick = () => {
    chatwiget.style.display = 'none'
}