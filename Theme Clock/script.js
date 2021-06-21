const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", (event) => {
    const html = document.querySelector("html");

    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        event.target.innerHTML = "Dark Mode";
    }
    else {
        html.classList.add("dark")
        event.target.innerHTML = "Light Mode";
    }
})

function setTime() {
    const timeEl = new Date();
    const monthEL = timeEl.getMonth();
    const dayEl = timeEl.getDay();
    const dateEl = timeEl.getDate();
    const hours = timeEl.getHours();
    const hoursEl = hours % 12;
    const minutesEl = timeEl.getMinutes();
    const secondsEl = timeEl.getSeconds();
    const AmPm = hoursEl >= 12 ? "PM" : "AM";

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursEl, 0, 11, 0, 360)}deg)`
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutesEl, 0, 59, 0, 360)}deg)`
    second.style.transform = `translate(-50%, -100%) rotate(${scale(secondsEl, 0, 59, 0, 360)}deg)`

    time.innerHTML = `${hoursEl} : ${minutesEl < 10 ? `0${minutesEl}` : minutesEl} ${AmPm}`

    date.innerHTML = `${days[dayEl]}, ${months[monthEL]} <span class="circle">${dateEl}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setInterval(setTime, 1000);

setTime();
