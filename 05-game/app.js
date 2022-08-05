const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEL = document.querySelector('#time')
let time = 0;
let score = 0;
let fail = 0;
const board = document.querySelector('#board')

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    //делегирование событий
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove()
        createRandomCircle()
    }
    else{
        fail++;
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    if (value == 60) {
        timeEL.innerHTML = '01:00'
    }
    else {
        timeEL.innerHTML = `00:${value}`
    }
}

function finishGame() {
    timeEL.parentNode.classList.add('hide')
    board.innerHTML = `<h3>Ваш счет: <span class='primary'>${score} </span></h3>`
    //board.innerHTML=+'<br>'
    //board.innerHTML +=`<h3> Ваши промахи: <span class='primary'>${fail} </span></h3>`
     
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRamdomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRamdomNumber(0, width - size);
    const y = getRamdomNumber(0, height - size,);

    circle.classList.add('circle')
    circle.style.backgroundColor=`rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;
    circle.style.boxShadow = `0 0 2px rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} ), 0 0 10px rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} )`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`

    board.append(circle)
}

function randomColor(){
    return Math.floor(Math.random()*255)
 }

function getRamdomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}