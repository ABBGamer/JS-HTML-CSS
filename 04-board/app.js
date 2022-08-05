const board = document.querySelector('#board')
const SQUARES_NUMBER = 50000

for (let i=0;i<SQUARES_NUMBER;i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=>
    setColor(square) )

    square.addEventListener('mouseleave',()=>
    removeColor(square) )

    board.append(square)
}

function setColor(element){
    element.style.backgroundColor=`rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;
    element.style.boxShadow = `0 0 2px rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} ), 0 0 10px rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} )`
}

function removeColor(element){
    element.style.backgroundColor="#1d1d1d"
    element.style.boxShadow = `0 0 2px #000`
}

function randomColor(){
   return Math.floor(Math.random()*255)
}