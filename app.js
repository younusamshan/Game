let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#resetBtn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-contaniner')
let msg = document.querySelector('#msg')


let turn0 = true // player X , player 0


let winPatterns = [
    [0, 1, 3],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];
 resetGame = () => {
turn0 = true
enableboxes();
msgContainer.classList.add('hide')
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log('box')
        if (turn0) { // player 0
            box.innerText = '0'
            turn0 = false

        } else {// player x
            box.innerText = 'X'
            turn0 = true
        }
        box.disabled = true
        checkWinner();
    })
})
let disableboxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

let enableboxes = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = '';
        }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner Is ${winner}`
    msgContainer.classList.remove('hide')
     disableboxes()
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Valu = boxes[pattern[0]].innerText
        let pos2Valu = boxes[pattern[1]].innerText
        let pos3Valu = boxes[pattern[2]].innerText



        if (pos1Valu != '' && pos2Valu != '' && pos3Valu != '') {
            if (pos1Valu === pos2Valu && pos2Valu === pos3Valu) {


                // console.log('winer', pos1Valu)

                showWinner(pos1Valu)

            }
        }
    }
}

newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)