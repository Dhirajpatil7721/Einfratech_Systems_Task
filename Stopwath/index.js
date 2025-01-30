const start = document.getElementById("start")
const reset = document.getElementById("reset")
const lap = document.getElementById("lap")
const secElement = document.getElementById("sec")
const minElement = document.getElementById("min")
const hrElement = document.getElementById("hr")
const laplist = document.querySelector(".laps ul ")
const clearall = document.getElementById("clearall")


let sec = 0;
let min = 0;
let hr = 0;
let ispause = true
let intervalId;

start.classList = "fstart"
start.addEventListener('click', () => {

    start.classList = "fboth"
    reset.classList = "fboth"
    lap.classList = "fboth"


    if (ispause) {
        start.textContent = "Pause"
        ispause = false;


        intervalId = setInterval(() => {
            if (sec >= 59) {
                sec = 0;
                min++;
                minElement.textContent = `: ${min}`;
            } else if (min >= 59) {
                min = 0;
                hr++;
                hrElement.textContent = hr < 10 ? `:0${hr}` : `:${hr}`;
                minElement.textContent = min < 10 ? `:0${min}` : `:${min}`;
            } else if (hr >= 23) {
                hr = 0
                hrElement.textContent = hr;
            }
            else {
                sec++;
                // secElement.textContent = `: ${sec}`;
                secElement.textContent = sec < 10 ? `:0${sec}` : `:${sec}`;

            }
        }, 1000);
    } else if (!ispause) {
        start.textContent = "Play"

        ispause = true
        clearInterval(intervalId);
    }

})

reset.addEventListener('click', () => {
    clearall.style.display = "none"
    start.textContent = "Start"
    sec = 0;
    min = 0;
    hr = 0;
    secElement.textContent = ":00";
    minElement.textContent = ":00";
    hrElement.textContent = "00";
    laplist.textContent = ""
})

lap.addEventListener('click', () => {
    clearall.style.display = "block"
    let lapTime = `${hr < 10 ? "0" + hr : hr}:${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
    let li = document.createElement('li')
    li.classList = "li"
    li.textContent = "Lap " + (laplist.children.length + 1) + " - " + lapTime;
    laplist.appendChild(li);


})

clearall.addEventListener('click', () => {
    laplist.textContent = ""
    clearall.style.display = "none"
})