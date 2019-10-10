const API_KEYS = "9bc461fd0a5207c2d4962a814060dfad";
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("can not access geo location.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError)
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