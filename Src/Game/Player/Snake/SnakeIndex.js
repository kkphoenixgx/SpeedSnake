import { getInputDirection } from "./snakeInputs.js";
import { gameBoard } from "../../Entities/Board/BoardIndex.js";

export default class Snake {
    
    constructor(){
        this.snakeSpeed = 5;
        this.snakeBody = [
            { x: 11, y: 11 },
            { x: 11, y: 12 },
            { x: 11, y: 13 },            
        ];

        this.snakeHeadElement;
    }

    //-------Methods------
        
        //it updates the snake on the screen
        updateSnake(){

            this.getInputDirections()
              .then( dataInputDirection => {
    
                  // actions
                  this.snakeBody[this.snakeBody.length-1].x += dataInputDirection.x;
                  this.snakeBody[this.snakeBody.length-1].y += dataInputDirection.y;

                  moveSnakeSegments(dataInputDirection);

              })
              .catch( err => console.error(err));
        }
    
        drawSnake(){
            
            for (let i = 0; i < this.snakeBody.length; i++){
                // creating the div for the element
                let snakePartElement = document.createElement("div");

                // if there is the first add the css class 
                    console.log(this.snakeBody[this.snakeBody.length-1]);
                    console.log(this.snakeBody[i]);

                    if(this.snakeBody[this.snakeBody.length-1] == this.snakeBody[i]){
                        snakePartElement.classList.add('snakeHead');
                        snakePartElement = this.snakeHeadElement;
                    }
                    if(this.snakeBody[this.snakeBody.length-1] != this.snakeBody[i]) snakePartElement.classList.add('snake');
            
                // defining the start position 
                    snakePartElement.style.gridRowStart = this.snakeBody[i].y;
                    snakePartElement.style.gridColumnStart = this.snakeBody[i].x;
            
                // placing it on the gameBoard
                    gameBoard.appendChild(snakePartElement);
            }

        }
        
        moveSnakeSegments(dataInputDirection){

            for(let i = 0; i < this.snakeBody.length; i++){

                if(this.snakeBody[i-1] == this.snakeBody[this.snakeBody.length-1]) return

                console.log(dataInputDirection);

                // this.snakeBody[i -1].x += dataInputDirection.x;
                // this.snakeBody[i -1].y += dataInputDirection.y;

            }

        }

        getInputDirections(){
            
            let getInputDirections = new Promise((resolve, reject) => {

                try{ 
                    let dataInputDirection = getInputDirection(); 

                    // let moveSnakeSegments = new Event('snakeMove');
                    // this.snakeHeadElement.dispatchEvent(moveSnakeSegments)

                    resolve(dataInputDirection); 
                }
                catch(err){ reject(err)}
            })

            return getInputDirections;
        }

        snakeCollision(ColliderPosition){

            for(let i = 0; i < this.snakeBody.length; i++){

                if(ColliderPosition.x === this.snakeBody[i-1].x && ColliderPosition.y === this.snakeBody[i -1].y){

                    if(this.snakeBody[i-1] == this.snakeBody[this.snakeBody.length -1]) return 'Head Collided'
                    return `Snake collided`
                
                }
            }
        }

        getAllSnakePartsPositions(){
            return this.snakeBody
        }
}