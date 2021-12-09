export const pauseButtonElement = document.querySelector('.colum2 button');

export let startOrStop = true;

pauseButtonElement.addEventListener('click', event => {
    if(startOrStop === true){
        startOrStop = false;
        pauseButtonElement.innerHTML = 'Start';
    }
    else if(startOrStop === false){
        startOrStop = true;
        pauseButtonElement.innerHTML = 'Pouse';
    }
})