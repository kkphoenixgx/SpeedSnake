export const gameBoard = document.querySelector('#game .gameBoard'); 
export const gameBoardElement = document.querySelector('#game'); 

export var BorderOnOrOff = false

export function putRedBorder(){
    BorderOnOrOff = true
    gameBoard.style.border = 'red 2px solid';
}

export function takeOutRedBorder(){
    BorderOnOrOff = false
    gameBoard.style.border = 'black 2px solid';
}