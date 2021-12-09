import { getInputDirection } from "./snakeInputs.js";
import { gameBoard } from "../../Entities/Board/BoardIndex.js";

export default class Snake {
    
    constructor(){
        this.snakeSpeed = 5;
        this.snakeBody = [
            { x: 11, y: 11 },
            { x: 11, y: 12 },
            { x: 11, y: 13 },            
        ]
    }

    //-------Methods------
        
        //it updates the snake on the screen
        updateSnake(){
            const dataInputDirection = getInputDirection();
            
            // actions
            this.snakeBody[this.snakeBody.length-1].x += dataInputDirection.x;
            this.snakeBody[this.snakeBody.length-1].y += dataInputDirection.y;

        }
    
        // It draws the snake on the screen
        drawSnake(){
            this.snakeBody.forEach(bodyPart => {
                // creating the div for the element
                    const snakePartElement = document.createElement("div");
            
                // if there is the first add the css class 
                    if(bodyPart == this.snakeBody[this.snakeBody.length-1]) snakePartElement.classList.add('snakeHead');
                    if(bodyPart != this.snakeBody[this.snakeBody.length-1]) snakePartElement.classList.add('snake');
            
                // defining the start position 
                    snakePartElement.style.gridRowStart = bodyPart.y;
                    snakePartElement.style.gridColumnStart = bodyPart.x;
            
                // placing it on the gameBoard
                    gameBoard.appendChild(snakePartElement);
            });
        }
        // the snakeCollision, checks if something colides with the snake and return true or false. 
        snakeCollision(ColiderPosition){
            return this.snakeBody.some(bodyPart => {
                return ColiderPosition.x === bodyPart.x && ColiderPosition.y === bodyPart.y; 
            });
        }
}