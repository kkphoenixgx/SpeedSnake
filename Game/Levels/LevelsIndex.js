import { default as RedApple } from '../Entities/Apples/RedApple/RedAppleIndex.js'
import { GameSnake } from "../Index.js";

export default class Level{

    constructor(level){
        this.level = level;
    }
    
    executeLevel(){
        
        var redApple = new RedApple();

        switch(this.level){
            case 1:
                redApple.setApplePosition([ { 'x' :5, 'y' : 5 }] );

                // console.log(redApple.applePosition);
                // console.log(GameSnake.snakeBody);
                // console.log(redApple.redAppleCollider(GameSnake.snakeBody));

                if(redApple.redAppleCollider(GameSnake.snakeBody)){

                    console.log('enteredHere');
                    this.level++
                    redApple.updateRedApple();
                    this.executeLevel();
                } 

            break;
            default:
                redApple.setApplePosition(RedApple.generateRandomPosition());
                RedApple.updateRedApple();
        }
    }

}