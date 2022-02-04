import { gameBoardElement, putRedBorder, takeOutRedBorder, BorderOnOrOff} from "../../Entities/Board/BoardIndex.js";

let _inputDirection = {  x: 0, y: 0  }
let _lastMoves = {  x: 0, y: 0  }

var snakeMoves = {
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Right: 'ArrowRight',
    Left: 'ArrowLeft' 
}

export function SnakeEventListener(){

    gameBoardElement.addEventListener('mouseover', event => {

        putRedBorder();
        window.addEventListener('keydown', event =>{
            event.preventDefault();
            if(BorderOnOrOff){
                switch(event.key){
                    // remember that the y is changed 1 = -1, -1 = 1

                    case snakeMoves.Up:
                        if(_lastMoves.y !== 0) break;
                        
                        _inputDirection.x = 0;
                        _inputDirection.y = -1;
                    break;

                    case snakeMoves.Down:
                        if(_lastMoves.y !== 0) break;
                        
                        _inputDirection.x = 0;
                        _inputDirection.y = 1;
                    break;

                    // but the x is NOT changed

                    case snakeMoves.Right:
                        if(_lastMoves.x !== 0) break;
                        
                        _inputDirection.x = 1;
                        _inputDirection.y = 0;
            
                    break;

                    case snakeMoves.Left:
                        if(_lastMoves.x !== 0) break;
                    
                        _inputDirection.x = -1;
                        _inputDirection.y = 0;
                    break;
                
                }
            }
        });
    });

    gameBoardElement.addEventListener('mouseout', function() {
        takeOutRedBorder();
    })
}

export function getInputDirection(){
    _lastMoves = _inputDirection;
    return _inputDirection;
}