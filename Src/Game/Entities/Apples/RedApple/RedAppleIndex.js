import { gameBoard } from "./../../Board/BoardIndex.js";

// defining the default random number for the apple
var randomNumberX = Math.floor(Math.random() *20) + 1;
randomNumberX *= Math.round(Math.random()) ? 1 : -1;
var randomNumberY = Math.floor(Math.random() *20) +1;
randomNumberY *= Math.round(Math.random()) ? 1 : -1;


export default class RedApple{
    
    constructor(positionX = randomNumberX, positionY = randomNumberY){

        this.applePosition = {'x' : positionX, 'y' : positionY};
        this.redAppleElements = [];
        this.drawRedApple();

    }
    
    // ----GameFunctions----
    
        drawRedApple(){

            if(Array.isArray(this.applePosition)){

                for(var i = 0; i < applePosition.length; i++) {

                    let redAppleElement = document.createElement("div");
                    // defining style
                    redAppleElement.classList.add('redApple');

                    // defining the start position 
                        redAppleElement.style.gridRowStart = this.applePosition[i -1].x;
                        redAppleElement.style.gridColumnStart = this.applePosition[i -1].y;
                
                    // placing it on the gameBoard
                        gameBoard.appendChild(redAppleElement);
                    
                    this.redAppleElements.push(redAppleElement);
                }

            }else{
                this.createRedApple();
            }
        }

        createRedApple(){

            let redAppleElement = document.createElement("div");
                
            // defining style
                redAppleElement.classList.add('redApple');
        
            // defining the start position 
                redAppleElement.style.gridRowStart = this.applePosition.x;
                redAppleElement.style.gridColumnStart = this.applePosition.y;
        
            // placing it on the gameBoard
                gameBoard.appendChild(redAppleElement);
            
            this.redAppleElements.push(redAppleElement);
                
        }

        updateRedApple(){
            if(! Array.isArray(this.redAppleElements)){
                this.redAppleElements.forEach(element => {
    
                    this.redAppleElements.style.gridRowStart = element.x;
                    this.redAppleElements.style.gridColumnStart = element.y;
    
                })
            }
        }

    // -----AppleFunctions------

        redAppleCollider(SnakePosition){
            if(! this.applePosition) return
            
            if(Array.isArray(this.applePosition)){
                for(let i = 0; i < this.applePosition.length; i++){
                    if(SnakePosition[SnakePosition.length -1].x === this.applePosition[i-1].x && SnakePosition[SnakePosition.length -1].y === this.applePosition[i-1].y){
                        return true;
                    }
                }
            }else{
                if(! Array.isArray(SnakePosition)) return
                if(SnakePosition[SnakePosition.length -1].x === this.applePosition.x && SnakePosition[SnakePosition.length -1].y === this.applePosition.y) return true;
            }
       
            return false
        }

        static generateRandomApplePosition(){
            var randomNumberX = Math.floor(Math.random() *20) + 1;
            randomNumberX *= Math.round(Math.random()) ? 1 : -1;
            var randomNumberY = Math.floor(Math.random() *20) +1;
            randomNumberY *= Math.round(Math.random()) ? 1 : -1;

            this.newApplePosition = {
                'x' : randomNumberX,
                'y' : randomNumberY
            }

            this.setApplePosition(this.newApplePosition);
        }

    // ----getters----

        static getApplePosition(appleArrayPosition = null){
        
            if(appleArrayPosition){
                if( Array.isArray(this.applePosition) ){

                    this.applePosition = appleArrayPosition;
                    return this.applePosition 
                
                } else {  return this.applePosition  }
            }
            
            return this.applePosition;
        }
        getAllApplesPositions(){
            return this.applePosition;
        }
    // -----Setters-----
        setApplePosition(newPositionObject){
            this.applePosition = newPositionObject;
        }

}