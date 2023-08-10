let userinputel = document.getElementById("defuser");
let timerel = document.getElementById("timer");

let timerval = parseInt(timerel.textContent);

function togetword(event) {
    let val = event.key;
    if (val === "Enter") {
        if (userinputel.value === "defuse") {
            timerel.textContent = "You did it";
            clearInterval(bomb);
        }
    }
}

function decrement() {
    timerval -= 1;
    timerel.textContent = timerval;
    if (timerval === 0) {
        clearInterval(bomb);
        timerel.textContent = "BOOM";
    }
}
let bomb = setInterval(decrement, 1000);

userinputel.addEventListener("keydown", togetword);