const API_KEY = "9bc461fd0a5207c2d4962a814060dfad";
const weather = document.querySelector(".js-weather");
const COORDS = 'coords';

function geoWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `is ${temp} at ${place}`
    })
}

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
    geoWeather(latitude, longitude);
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
        const parseCoords = JSON.parse(loadedCoords);
        geoWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();