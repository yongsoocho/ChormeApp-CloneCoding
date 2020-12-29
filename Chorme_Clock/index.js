const clockContainer = document.querySelector(".js_clock");
const clockTitle = document.querySelector("h1");
/* same thing -> const clockTitle = document.querySelector(".js_title"); */

function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours}:${minute}:${seconds}`;
}

function init() {
    getTime();
}

init();