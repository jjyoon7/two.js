const COORDS = 'coords';

function askForCoords() {
    
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        //get weather
    }
}

function init() {
    loadCoords();
}

init();