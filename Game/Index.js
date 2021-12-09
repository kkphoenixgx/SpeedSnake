//importations
import {default as Snake} from "./Player/Snake/SnakeIndex.js"

import { gameBoard } from "./Entities/Board/BoardIndex.js";
import {startOrStop} from './Inputs/playButton.js'
import { SnakeEventListener } from "./Player/Snake/snakeInputs.js";
import { default as Level } from "./Levels/LevelsIndex.js"
import {default as Apple} from './Entities/Apples/RedApple/RedAppleIndex.js'

let lastTimeRender = 0;
// creating a snake into the game
export var GameSnake = new Snake;

// levels variable
var level = new Level(1);

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
    }
    
    // The game update function, everything that you put here, will be constantly updated
    function update(){
        gameBoard.innerHTML = '';
        if(startOrStop === true){
            SnakeEventListener();
            GameSnake.updateSnake();
            level.executeLevel();
        }
    }

window.requestAnimationFrame(gameLoop);