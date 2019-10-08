const body = document.querySelector("body");

function getRandom(){
    const number = Math.floor(Math.random() * 3);
    return number
}

function init() {
    getRandom();
}
init();