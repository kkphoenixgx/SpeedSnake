import {default as RedApple} from "../Entities/Apples/RedApple/RedAppleIndex.js";
import {default as Snake} from '../Player/Snake/SnakeIndex.js'

export default class Level{

    constructor(level){
        this.level = level;
        this.gameRedApple;
        this.gameSnake;

        this.executeLevel();
    }
    
    executeLevel(){
        switch(this.level){
            case 1:
                this.gameSnake = new Snake();
                this.gameRedApple = new RedApple(5, 5);
                this.gameRedApple.updateRedApple();

                console.log(this.gameRedApple.getAllApplesPositions());
                console.log(this.gameSnake.getAllSnakePartsPositions());

                if(this.gameRedApple.redAppleCollider()){
                    console.log('enteredHere');
                    this.level++
                    console.log('levelUp')
                }

            break;
            default:
                
                RedApple.updateRedApple();

                gameRedApple.getAllApplesPositions().forEach(element => {
                    if(GameSnake.snakeCollision(element)){
    
                        console.log('enteredHere');
                        this.level++
                        console.log('levelUp')
                    }
                });

        }
    }

}