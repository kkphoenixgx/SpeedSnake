import { getInputDirection } from "./snakeInputs.js";
import { gameBoard } from "../../Entities/Board/BoardIndex.js";
import {colliders , default as Level} from "../../Levels/LevelsIndex.js"
import { level } from "../../gameIndex.js"

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
        
        // ------Loops-----

        updateSnake(){
            colliders.forEach(collider => {

                if(this.snakeCollision(collider) === 'Head Collided'){
                    level.onCollision();
                    console.log(level.level);
                }

            })

            this.getInputDirections()
              .then( dataInputDirection => {

                  // actions
                  this.snakeBody[this.snakeBody.length-1].x += dataInputDirection.x;
                  this.snakeBody[this.snakeBody.length-1].y += dataInputDirection.y;
                  
                  setTimeout(() => {
                      this.moveSnakeSegments(dataInputDirection);
                  }, 1000)

              })
              .catch( err => console.error(err));
        }
    
        drawSnake(){
            
            for (let i = 0; i < this.snakeBody.length; i++){
                // creating the div for the element
                let snakePartElement = document.createElement("div");

                // if there is the first add the css class 
                
                    if(JSON.stringify(this.snakeBody[this.snakeBody.length-1]) === JSON.stringify(this.snakeBody[i])){
                        snakePartElement.classList.add('snakeHead');
                        this.snakeHeadElement = snakePartElement;
                    }
                    if(this.snakeBody[this.snakeBody.length-1] != this.snakeBody[i]) snakePartElement.classList.add('snake');
            
                // defining the start position 
                    snakePartElement.style.gridRowStart = this.snakeBody[i].y;
                    snakePartElement.style.gridColumnStart = this.snakeBody[i].x;
            
                // placing it on the gameBoard
                    gameBoard.appendChild(snakePartElement);
            }

        }
        
        // ------Actions-------

        moveSnakeSegments(dataInputDirection){

            // for(let i = 0; i < this.snakeBody.length; i++){

            //     if(this.snakeBody[i] == this.snakeBody[this.snakeBody.length-1]) return

            //     setTimeout(()=> {

            //         this.snakeBody[i] = {... this.snakeBody}

            //     },300);
            // }
        }

        snakeCollision(ColliderPosition){

            for(let i = 0; i < this.snakeBody.length; i++){

                if(ColliderPosition.x === this.snakeBody[i].x && ColliderPosition.y === this.snakeBody[i].y){

                    if(this.snakeBody[i] == this.snakeBody[this.snakeBody.length -1]) return 'Head Collided'
                    return `Snake collided`
                
                }
            }
        }

        // ----- Side Methods -----

        getAllSnakePartsPositions(){
            return this.snakeBody
        }
        getHeadPosition(){
            return this.snakeBody[this.snakeBody.length -1]
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
}