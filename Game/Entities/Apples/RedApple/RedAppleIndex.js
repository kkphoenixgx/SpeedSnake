import { gameBoard } from "./../../Board/BoardIndex.js";

// defining the default random number for the apple
var randomNumberX = Math.floor(Math.random() *20) + 1;
randomNumberX *= Math.round(Math.random()) ? 1 : -1;
var randomNumberY = Math.floor(Math.random() *20) +1;
randomNumberY *= Math.round(Math.random()) ? 1 : -1;


export default class RedApple{
    
    constructor(positionX = randomNumberX, positionY = randomNumberY){

        this.applePosition = [ {'x' : positionX, 'y' : positionY} ];
        this.redAppleElement = document.createElement("div");
        this.drawRedApple();

    }
    
    // ----GameFunctions----
    
        drawRedApple(){
            
            // defining style
                this.redAppleElement.classList.add('redApple');
        
            // defining the start position 
                this.redAppleElement.style.gridRowStart = this.applePosition[0].x;
                this.redAppleElement.style.gridColumnStart = this.applePosition[0].y;
        
            // placing it on the gameBoard
                gameBoard.appendChild(this.redAppleElement);
        }

        updateRedApple(){
            this.redAppleElement.style.gridRowStart = this.applePosition[0].x;
            this.redAppleElement.style.gridColumnStart = this.applePosition[0].y;
        }

    // -----AppleFunctions------

        redAppleCollider(SnakePosition){
            if(this.applePosition){
                return SnakePosition[2].x === this.applePosition.x && SnakePosition[2].y === this.applePosition.y;
            }
        }

        static generateRandomPosition(){
            var randomNumberX = Math.floor(Math.random() *20) + 1;
            randomNumberX *= Math.round(Math.random()) ? 1 : -1;
            var randomNumberY = Math.floor(Math.random() *20) +1;
            randomNumberY *= Math.round(Math.random()) ? 1 : -1;

            var newApplePosition = {
                'x' : randomNumberX,
                'x' : randomNumberY
            }
            return newApplePosition
        }

    // ----getters----

        static getApplePosition(appleArrayPosition){
            return this.applePosition[appleArrayPosition];
        }
        static getAllApplesPositions(){
            return this.applePosition;
        }
    // -----Setters-----
        setApplePosition(newPositionObject){
            this.ApplePosition = newPositionObject;
        }

}