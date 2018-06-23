import './hw_9.scss'


const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');
const clearAll = document.querySelector('button');

function showRed() {
    clearLights();
    redLight.style.opacity = "1";
}

function showYellow() {
    clearLights();
    yellowLight.style.opacity = "1";
}

function showGreen() {
    clearLights();
    greenLight.style.opacity = "1";
}

function clearLights() {
    redLight.style.opacity = "0.5";
    yellowLight.style.opacity = "0.5";
    greenLight.style.opacity = "0.5";
}


redLight.addEventListener('click', showRed);
yellowLight.addEventListener('click', showYellow);
greenLight.addEventListener('click', showGreen);
clearAll.addEventListener('click', clearLights);

