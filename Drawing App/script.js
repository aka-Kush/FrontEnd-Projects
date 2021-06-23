//* NOT COMPLETE

const canvas = document.getElementById("canvas");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
let sizeSpan = document.getElementById("size");
const clear = document.getElementById("clear");
const colorInp = document.getElementById("color");

const ctx = canvas.getContext("2d");

// let size = 20;
let size = sizeSpan.innerText;
let isPressed = false;
let color = "black";

let x;
let y;

canvas.addEventListener("mousedown", (event) => {
    isPressed = true;
    x = event.offsetX;
    y = event.offsetY;
})

canvas.addEventListener("mouseup", (event) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove", (event) => {
    if (isPressed) {
        const x2 = event.offsetX;
        const y2 = event.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}


// my work
let counter = 5;

// Increase Button
increase.addEventListener("click", () => {
    counter += 5;

    if (counter <= 20) {
        sizeSpan.innerText = counter;
    }
    else {
        counter = 20;
        sizeSpan.innerText = "20";
    }

})

// Decrease Button
decrease.addEventListener("click", () => {
    counter -= 5;
    
    if (counter > 0) {
        sizeSpan.innerText = counter;
    }
    else {
        counter = 0;
        sizeSpan.innerText = "0";
    }

})

// Clear Button
clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, 800, 800);
})

// Input color
// let sized = parseInt(sizeSpan.value);
