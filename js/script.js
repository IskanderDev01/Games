const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const gwindow = document.querySelectorAll('.gm-wind')
let i = 0;
function gameWindow(gg) {
    if (i > 2) {
        i=0
    }
    if (i < 0) {
        i=gwindow.length
    } 
    gwindow.forEach(item => {
        item.style.display="none"
    })
        gwindow[i].style.display="block"
}
gameWindow(i)
next.addEventListener('click', () => {
    gameWindow(i+=1)
})
prev.addEventListener('click', () => {
    gameWindow(i--)
})
document.onkeydown = checkKey
function checkKey(e) {
    if (e.keyCode == '37') {
    gameWindow(i+=1)
    }
    if (e.keyCode == '39') {
    gameWindow(i--)
    }
}
