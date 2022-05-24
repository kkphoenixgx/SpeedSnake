//importations
import { gameBoard } from "./Entities/Board/BoardIndex.js";
import {startOrStop} from './Inputs/playButton.js'
import { default as Level } from "./Levels/LevelsIndex.js";

import { SnakeEventListener } from "./Player/Snake/snakeInputs.js";

export var level = new Level(1);

export default class Game{

    constructor(){
        this._lastTimeRender = 0;
        this._GameSnake = level.gameSnake;    
        this._GameRedApple = level.gameRedApple;

        let gameLoop = (time) => {
            
            //gameLoop
            window.requestAnimationFrame(gameLoop);

            // transforming the milliseconds in seconds, but now just counting seconds since last time Render 
            const secondsSinceLastTimeRender = (time - this._lastTimeRender) / 1000;

            // Checking if the game just started to accumulate time.
            if(secondsSinceLastTimeRender < 1 / this._GameSnake.snakeSpeed) return;

            this._lastTimeRender = time;
            
            this.update();
            this.draw();
        }
        window.requestAnimationFrame(gameLoop);

    }

    //----------GameFunctions---------
        
        // The draw function has the responsibility to just draw
        draw(){
            this._GameSnake.drawSnake();
            this._GameRedApple.drawRedApple();
        }
        // The game update function, everything that you put here, will be constantly updated
        update(){
            gameBoard.innerHTML = '';
            if(startOrStop === true){
                SnakeEventListener();
                this._GameSnake.updateSnake();
                this._GameRedApple.updateRedApple();
                level.executeLevel();
            }
        }
    // 
}
