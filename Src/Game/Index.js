//importations
import { gameBoard } from "./Entities/Board/BoardIndex.js";
import {startOrStop} from './Inputs/playButton.js'
import { default as Level } from "./Levels/LevelsIndex.js";

import { SnakeEventListener } from "./Player/Snake/snakeInputs.js";

let lastTimeRender = 0;

// levels variable
var level = new Level(1);

// game Snake
var GameSnake = level.gameSnake;
var GameRedApple = level.gameRedApple;

function gameLoop(time){
    //gameLoop
    window.requestAnimationFrame(gameLoop);

    // transforming the milliseconds in seconds, but now just counting seconds since last time Render 
    const secondsSinceLastTimeRender = (time - lastTimeRender) / 1000;

    // Checking if the game just started to accumulate time.
    if(secondsSinceLastTimeRender < 1 / GameSnake.snakeSpeed) return;

    lastTimeRender = time;
    
    update();
    draw();
}

//----------GameFunctions---------
    
    // The draw function has the responsibility to just draw
    function draw(){
        GameSnake.drawSnake();
        GameRedApple.drawRedApple();
    }
    
    // The game update function, everything that you put here, will be constantly updated
    function update(){
        gameBoard.innerHTML = '';
        if(startOrStop === true){
            SnakeEventListener();
            GameSnake.updateSnake();
            GameRedApple.updateRedApple();
            level.executeLevel();
        }
    }

window.requestAnimationFrame(gameLoop);