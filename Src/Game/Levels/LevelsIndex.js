import {default as RedApple} from "../Entities/Apples/RedApple/RedAppleIndex.js";
import {default as Snake} from '../Player/Snake/SnakeIndex.js'
import { gameBoard } from "../Entities/Board/BoardIndex.js";

export var colliders = [];

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
                gameBoard.innerHTML = ''
                this.gameSnake = new Snake();
                
                this.gameRedApple = new RedApple(5, 5);
                this.gameRedApple.updateRedApple();

                colliders = [ this.gameRedApple.applePosition ]
            break;
            default:
                gameBoard.innerHTML = ''
                this.createLevelRedApple();
                this.gameRedApple.updateRedApple();

        }
    }

    onCollision(){
        this.level++
        this.gameRedApple.deleteAllRedApples();
        this.executeLevel();
    }

    createLevelRedApple(x = null, y = null){

        if(x == null && y == null) this.gameRedApple =  new RedApple();
        if(x !== null && y !== null) this.gameRedApple =  new RedApple(x, y);
        colliders = [ this.gameRedApple.applePosition ]
    }

}