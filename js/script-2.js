const windowss = document.querySelector('.window')
let set = 0
document.onkeydown = check;
function check(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        set = set - 600
        if (set < 0) {
            set=1200
        }
        windowss.style.top = -set + 'px'
    }
    else if (e.keyCode == '40') {
        set = set + 600
        if (set > 1200) {
            set=0
        }
        windowss.style.top = -set + 'px'
    }
}

const game = document.querySelector('.game'),
    count = 16,
    cards = [];

    let cardds = undefined;

    let massiv = [
    'home',
    'fighter-jet',
    'themeisle',
    'id-card',
    'plane',
    'gift',
    'cutlery',
    'bug'
]

massiv.push(...massiv);
for (let i = 0; i < 100; i++) {
   const idx1 = Math.floor(Math.random() * massiv.length);
   const idx2 = Math.floor(Math.random() * massiv.length);

    const newIdx = massiv[idx1];
    massiv[idx1] = massiv[idx2];
    massiv[idx2] = newIdx
    }

    for (let i = 0; i < count; i++) {
    const divs = document.createElement('div');
    divs.classList.add('card');
    divs.innerHTML = `
        <div class="front">
            <i class="fa fa-${massiv[i]}"></i>
        </div>
        <div class="back">
        <img class="glock" src="img/glock.jpg" alt="">
        </div>
    `
    divs.addEventListener('click', () => {
        if (!divs.classList.contains('show')) {
            divs.classList.add('show')
        }
        if (!cardds) {
            cardds = divs
        } else {
            const iconOne = cardds.querySelector('i').classList[1];
            const iconTwo = divs.querySelector('i').classList[1];
            if (iconOne !== iconTwo) {
                const temp = cardds;
                setTimeout(() => {
                temp.classList.remove('show');
                divs.classList.remove('show');
                }, 1000)
            }
            cardds = undefined
        }
    })
    cards.push(divs);
    game.append(divs)
}
const dino = document.querySelector('#dino');
const kaktus = document.querySelector('.cactus')
const jump = document.querySelector('.jump')
const button=document.querySelector('.butn')
button.addEventListener("click", () => {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 500)
})