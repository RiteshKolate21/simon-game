let gameSeq = [];
let userSeq = [];
let highScore = 0;
let btns = ["one", "two", "three", "four"]

let started = false;
let level = 0;

//h3 for level text
let levelh3 = document.querySelector('.h3');

// Rules Modal Logic
const rulesOverlay = document.getElementById('rules-overlay');
const rulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-rules');

function openRules() {
    rulesOverlay.classList.add('active');
}

function closeRules() {
    rulesOverlay.classList.remove('active');
}

rulesBtn.addEventListener('click', openRules);
closeRulesBtn.addEventListener('click', closeRules);

// Show rules on initial load
window.addEventListener('load', openRules);

document.addEventListener('keypress', (event) => {
    event.stopPropagation();

    // If rules are open, close them
    if (rulesOverlay.classList.contains('active')) {
        closeRules();
    }

    if (started == false) {
        started = true;
        console.log('game started');
        levelup();
    }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}


function levelup() {
    userSeq = [];
    level++;

    levelh3.innerText = `Level ${level}`;

    //choose random button

    let randomind = Math.floor(Math.random() * 4);
    let randomcolor = btns[randomind];

    let randombtn = document.querySelector(`.${randomcolor}`);

    // console.log(randomind);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameSeq.push(randomcolor)
    console.log(gameSeq);
    gameFlash(randombtn);
}

function checkAns(inx) {

    if (userSeq[inx] === gameSeq[inx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        levelh3.innerHTML = `Game Over! <br>Your Score was ${level} <br> Press Any Key To Restart`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = 'white';
        }, 150);
        reset();
    }
    // console.log('Current Level', level);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");

    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allButton = document.querySelectorAll('.btn');

for (btn of allButton) {
    btn.addEventListener("click", btnPress)
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}